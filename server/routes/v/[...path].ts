// Serves /media videos with byte ranges: Workers static assets answer Range requests with the
// whole file, and iOS Safari refuses to play video without 206 responses.
export default defineEventHandler(async (event) => {
    assertMethod(event, ['GET', 'HEAD'])
    const path = getRouterParam(event, 'path') ?? ''
    if (!/^[\w-]+(\/[\w-]+)*\.mp4$/.test(path)) {
        throw createError({ statusCode: 404 })
    }

    const assets = event.context.cloudflare?.env?.ASSETS as { fetch: typeof fetch } | undefined
    if (!assets) {
        // `nuxt dev` serves /public itself and handles ranges fine.
        return sendRedirect(event, `/media/${path}`, 302)
    }

    const range = getRequestHeader(event, 'range')
    const asset = await assets.fetch(new URL(`/media/${path}`, getRequestURL(event)), {
        headers: range ? { range } : {},
    })
    if (!asset.ok) {
        throw createError({ statusCode: asset.status })
    }
    // If the platform handles ranges itself one day, pass its answer through.
    if (asset.status === 206) {
        return asset
    }

    const body = await asset.arrayBuffer()
    const size = body.byteLength
    const headers = {
        'content-type': 'video/mp4',
        'accept-ranges': 'bytes',
        'cache-control': 'public, max-age=604800',
    }

    const match = range && /^bytes=(\d*)-(\d*)$/.exec(range)
    if (!match) {
        return new Response(body, { headers: { ...headers, 'content-length': String(size) } })
    }

    const [, from = '', to = ''] = match
    const start = from ? Number(from) : Math.max(0, size - Number(to))
    const end = from && to ? Math.min(Number(to), size - 1) : size - 1
    if (!(from || to) || start > end || start >= size) {
        return new Response(null, { status: 416, headers: { 'content-range': `bytes */${size}` } })
    }

    return new Response(body.slice(start, end + 1), {
        status: 206,
        headers: {
            ...headers,
            'content-range': `bytes ${start}-${end}/${size}`,
            'content-length': String(end - start + 1),
        },
    })
})
