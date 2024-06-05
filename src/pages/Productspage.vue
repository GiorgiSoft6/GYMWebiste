<template>
    <div class="flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 xl:grid-cols-3 w-[1000px]">
            <div v-for="item in Filtered" class="xl:w-[300px] w-full h-[350px] cursor-pointer flex items-center flex-col border border-gray-200">
                <router-link :to="{name: 'Product', params: {Product: item.fullname, ProductCategory: item.Category}}">
                <img class="w-44 h-64 object-cover " :src="item.img" alt="">
                <h2 class="text-xl mb-2">{{ item.title }}</h2>
                <h2 class="text-2xl text-green-500 font-medium">{{ item.price }}₾</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Productsjson from '../Products.json'

import { useRoute } from 'vue-router';
const route = useRoute();

const Filtered = computed(() =>{
    return Productsjson.filter(el => el.Category === route.params.Products)
})


</script>
