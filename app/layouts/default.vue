<template>
    <div class="flex min-h-dvh flex-col">
        <a
            href="#main"
            class="btn-primary sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
            {{ $t('nav.skipToContent') }}
        </a>
        <SiteHeader />
        <main id="main" class="flex-1">
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>
