<template>
    <div class="flex justify-center items-center gap-20 flex-col md:flex-row">
        <img class="w-[300px]" :src="Filtered.img" alt="">
        <div class="flex flex-col gap-3 mt-2 object-cover">
            <h2 class="text-[40px]">{{ Filtered.title }}</h2>
            <h4 class="mb-6">{{Filtered.SmallTitl}}</h4>
            <h2 class="text-[30px] text-red-600 font-medium mb-36">Price: {{ Filtered.price }}</h2>
            <button class="w-full border border-gray-300 p-2 rounded-lg cursor-pointer">Add To Cart</button>
        </div>
    </div>
</template>


<script setup>
import {computed, onMounted} from 'vue'
import { useRoute } from 'vue-router';
import Productsjson from '../Products.json'

const route = useRoute();

const Filtered = computed(() =>{
    return Productsjson.find(el => el.fullname === route.params.Product)
})

onMounted(() => {
    console.log(route);
})

</script>