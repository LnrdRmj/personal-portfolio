// Generates responsive WebP variants: images/<id>.png → public/img/<id>-<width>.webp.
// Runs before `dev` and `build`; skips variants that are already newer than their source.
import { mkdir, readdir, stat } from 'node:fs/promises'
import { dirname, extname, join, relative } from 'node:path'
import sharp from 'sharp'
import { imageWidths } from '../shared/utils/images.ts'

const sourceDir = 'images'
const outputDir = 'public/img'

async function* walk(dir: string): AsyncGenerator<string> {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name)
        if (entry.isDirectory()) yield* walk(path)
        else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) yield path
    }
}

async function isFresh(output: string, sourceTime: number) {
    try {
        return (await stat(output)).mtimeMs >= sourceTime
    } catch {
        return false
    }
}

let written = 0
for await (const source of walk(sourceDir)) {
    const id = relative(sourceDir, source).slice(0, -extname(source).length).replaceAll('\\', '/')
    const sourceTime = (await stat(source)).mtimeMs
    const { width = 0 } = await sharp(source).metadata()

    for (const variant of imageWidths(width)) {
        const output = join(outputDir, `${id}-${variant}.webp`)
        if (await isFresh(output, sourceTime)) continue
        await mkdir(dirname(output), { recursive: true })
        await sharp(source).resize({ width: variant }).webp({ quality: 78 }).toFile(output)
        written++
    }
}

console.log(`[images] ${written} variant(s) written to ${outputDir}`)
