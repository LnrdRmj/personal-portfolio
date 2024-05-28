<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col">
        <div class="text-3xl font-medium">
            LAVORI IN EVIDENZA
        </div>
        <!-- grid-rows-[repeat(auto-fill,minmax(500px,auto))] -->
        <div class="grid grid-cols-3 gap-4 grid-rows-[repeat(10,minmax(400px,auto))]">
            <div class="bg-green-300 col-span-2 row-span-2">
                Lavoro 1
            </div>
            <div class="bg-green-300 col-span-1 row-start row-span-1">
                Lavoro 2
            </div>
            <div class="bg-green-300 col-start-2 col-end-4 row-span-2">
                Lavoro 3
            </div>
            <div >
                empty
            </div>
            <div class="bg-green-300 col-span-1 row-start row-span-1">
                Lavoro 4
            </div>
            <div class="bg-green-300 col-span-1 row-start row-span-1">
                Lavoro 5
            </div>
        </div>
    </div>
</template>
