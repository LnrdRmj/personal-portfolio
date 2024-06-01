<script setup lang="ts">
import WorkCard from './WorkCard.vue'
</script>

<template>
    <div class="flex flex-col">
        <div class="text-3xl font-medium mb-14 uppercase">
            {{  $t('featuredWorks.title') }}
        </div>
        <!-- grid-rows-[repeat(auto-fill,minmax(500px,auto))] -->
        <div class="grid grid-cols-3 gap-7 grid-rows-[repeat(5,minmax(200px,auto))]">
            <WorkCard class="col-span-2 row-span-2"
                :client="$t('featuredWorks.work1.client')"
                :role="$t('featuredWorks.work1.role')"
                :description="$t('featuredWorks.work1.description')"
                variant="big"
                imageSrc="https://cdn.motor1.com/images/mgl/4001vK/s1/porsche-911-gt3-rs-2022.jpg"/>
            <WorkCard class="col-span-1 row-start row-span-1"
                :client="$t('featuredWorks.work2.client')"
                :role="$t('featuredWorks.work2.role')"
                :description="$t('featuredWorks.work2.description')"
                imageSrc="https://www.mercedes-benz.it/content/italy/it/passengercars/models/coupe/amg-gt-c192/overview/_jcr_content/root/responsivegrid/tabs_1864030011_copy/tabitem/simple_teaser/simple_teaser_item_1148938149.component.damq2.3390251811592.jpg/mercedes-amg-gt-c192-equipment-exterior-chromepackage-exterior-764x573-07-2023.jpg"/>
            <WorkCard class="col-start-2 col-end-4 row-span-2"
                :client="$t('featuredWorks.work3.client')"
                :role="$t('featuredWorks.work3.role')"
                :description="$t('featuredWorks.work3.description')"
                variant="big"
                imageSrc="https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1252/vlcsnap-2023-03-17-16h18m30s840.jpg"/>
            <div>
                <!-- empty -->
            </div>
            <WorkCard class="col-span-1 row-start row-span-1"
                :client="$t('featuredWorks.work4.client')"
                :role="$t('featuredWorks.work4.role')"
                :description="$t('featuredWorks.work4.description')"
                variant="small"
                imageSrc="https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1252/vlcsnap-2023-03-17-16h18m30s840.jpg"/>
            <WorkCard class="col-span-1 row-start row-span-1"
                :client="$t('featuredWorks.work5.client')"
                :role="$t('featuredWorks.work5.role')"
                :description="$t('featuredWorks.work5.description')"
                variant="small"
                imageSrc="https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1252/vlcsnap-2023-03-17-16h18m30s840.jpg"/>
        </div>
    </div>
</template>
