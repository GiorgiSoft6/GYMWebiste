<template>
  <div class="w-full flex items-center justify-center gap-4 h-8 mb-5 bg-sky-600 xl:mb-0">
    <h1 class="text-sm text-white">FREE SHIPPING ONLY FOR ORDERS TO SPAIN & ITALY OVER</h1>
    <img class="w-14" src="./assets/Nutrex.png" alt="" />
  </div>
  <div
    class="w-full hidden items-center justify-between gap-0 h-8 mb-5 bg-black 2xl:justify-center 2xl:gap-[430px] xl:flex">
    <h1 class="text-[12px] text-gray-300">WELCOME TO THE OFFICIAL OLIMP STORE WEBSITE | EMAIL: <span
        class="text-sky-500">SHOP@OLIMPSTORE.EU </span> | CUSTOMER SERVICE OFFICE: +48 533 298 298</h1>
    <h1 class="text-[12px] text-gray-300">
      Shipping To:
      <select class="w-36 rounded-sm cursor-pointer text-black">
        <option class="text-black">Georgia</option>
        <option class="text-black">Engish</option>
        <option class="text-black">Turcky</option>
      </select>
    </h1>
  </div>
  <div class="flex items-center justify-center mb-4">
    <div class="gap-5 w-[1330px]">
      <div class="px-5 flex flex-col">
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center relative">
            <img @click="OpenMenu" class="cursor-pointer block w-9 xl:hidden" src="./assets/Menu.png" alt="" />
            <router-link to="/">
              <img class="w-32" src="./assets/Creatin.png" alt="" />
            </router-link>
            <div class="items-center flex gap-8 z-20">
              <router-link :to="{ name: 'Catalog' }">
                <p @mouseout="ModalFuncDec" @mouseover="ModalFunc"
                  class="fromHeaderHovver hidden xl:flex text-sm font-medium p-3 cursor-pointer hover:bg-sky-500">
                  PRODUCTS</p>
              </router-link>
              <router-link :to="{ name: 'Products', params: { Products: 'Creatin' } }">
                <h2 class="text-sm font-medium p-3 cursor-pointer hover:bg-sky-500 hidden xl:flex">CREATIN</h2>
              </router-link>
              <router-link :to="{ name: 'Products', params: { Products: 'Protein' } }">
                <h2 class="text-sm font-medium p-3 cursor-pointer hover:bg-sky-500 hidden xl:flex">PROTEIN</h2>
              </router-link>
              <h2 class="text-sm font-medium p-3 cursor-pointer hover:bg-sky-500 hidden xl:flex">STEROIDS</h2>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-44 relative hidden xl:flex">
              <input @keyup="GetInpInfo" v-model="GetInpInfoVmodel"
                class="w-44 border border-gray-400 rounded-sm h-10 outline-none pl-3" type="text"
                placeholder="Search" />
              <img class="absolute right-2 top-3 w-5 cursor-pointer" src="./assets/search-icon.png" alt="" />
              <div
                class="InpDiv w-[800px] z-40 min-h-[200px] hidden justify-center absolute top-10 left-[-620px] bg-white border border-gray-300 px-3">
                <div class="w-full h-full">
                  <div class="flex h-full">
                    <div class="min-w-[220px] flex flex-col gap-2">
                      <h2 class="text-2xl font-semibold">Populat Searches</h2>
                      <h4 class="cursor-pointer">Whey</h4>
                      <h4 class="cursor-pointer">Amino</h4>
                      <h4 class="cursor-pointer">Protin</h4>
                    </div>
                    <div class="w-1 min-h-[200px] bg-black"></div>
                    <div class="flex justify-center w-full" v-if="GetInpInfoVmodel.length <= 3">
                      <h2>ჩაწერე პროდუქტის სახელი</h2>
                    </div>
                    <div class="flex justify-center w-full"
                      v-else-if="GetInpInfoVmodel.length > 3 && INPComputed.length == 0">
                      <h2 class="text-2xl">Not Found!!!</h2>
                    </div>
                    <div v-else class="flex flex-col gap-10 w-full h-full px-4">
                      <div v-for="item in INPComputed" :key="item">
                        <router-link :to="{name: 'Product', params: {Product: item.fullname, ProductCategory: item.Category}}">
                          <div class="w-full h-[150px] flex cursor-pointer duration-700 hover:bg-gray-50">
                            <img class="w-[100px]" :src="item.img" alt="" />
                            <div class="ml-10 mt-2">
                              <h2 class="text-lg font-normal">{{ item.title }}</h2>
                              <p>{{ item.SmallTitl }}</p>
                              <h2 class="text-2xl">{{ item.price }}$</h2>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="w-8 h-8 cursor-pointer" src="./assets/User.png" alt="" />
            <img class="w-6 h-6 cursor-pointer" src="./assets/Cart.png" alt="" />
          </div>
        </div>
        <div class="w-full min-h-[100px] xl:hidden flex flex-col">
          <input v-model="InFuncModel" @keyup="InpFunctwo"
            class="w-full flex xl:hidden border border-gray-400 rounded-md h-10 outline-none pl-3" type="text"
            placeholder="Search" />
          <div class="VmodelDiv w-full hidden min-h-[100px] bg-white border border-gray-200">
            <div class="flex justify-center w-full" v-if="InFuncModel.length <= 3">
              <h2 class="text-2xl">ჩაწერე პროდუქტის სახელი</h2>
            </div>
            <div class="flex justify-center w-full" v-else-if="InFuncModel.length > 3 && INPComputedTwo.length == 0">
              <h2 class="text-2xl">Not Found!!!</h2>
            </div>
            <div v-else class="flex flex-col gap-10 w-full h-full px-4">
              <div v-for="item in INPComputedTwo" :key="item">
                <router-link :to="{name: 'Product', params: {Product: item.fullname, ProductCategory: item.Category}}">
                  <div @click="InptCloseDiv" class="w-full h-[150px] flex cursor-pointer duration-700 hover:bg-gray-50">
                    <img class="w-[100px]" :src="item.img" alt="" />
                    <div class="ml-10 mt-2">
                      <h2 class="text-lg font-normal">{{ item.title }}</h2>
                      <p>{{ item.SmallTitl }}</p>
                      <h2 class="text-2xl">{{ item.price }}$</h2>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="HeaderHovver2 hidden w-full h-full bg-white absolute duration-500">
    <div class="flex flex-col gap-2 text-blacl text-lg text-center font-mono w-full">
      <div class="flex items-center justify-between p-2">
        <h2 class="text-black font-normal text-2xl cursor-pointer">Store</h2>
        <img @click="DecMenu" class="w-10 cursor-pointer" src="./assets/XXX.png" alt="" />
      </div>
      <div>
        <ul class="flex flex-col gap-10">
          <li>
            <router-link :to="{ name: 'Products', params: { Products: 'Creatin' } }">
              <h2 @click="CloseHeader" class="cursor-pointer flex items-center justify-between">კრეატინი <img
                  class="w-8" src="./assets/Right.png" alt="" /></h2>
            </router-link>
            <hr />
          </li>
          <li>
            <router-link :to="{ name: 'Products', params: { Products: 'Protein' } }">
              <h2 @click="CloseHeader" class="cursor-pointer flex items-center justify-between">პროტეინი <img
                  class="w-8" src="./assets/Right.png" alt="" /></h2>
            </router-link>
            <hr />
          </li>
          <li>
            <h2 class="cursor-pointer flex items-center justify-between">საკვები დამნამატები <img class="w-8"
                src="./assets/Right.png" alt="" /></h2>
            <hr />
          </li>
          <li>
            <h2 class="cursor-pointer flex items-center justify-between">ერთჯერადი პროდუქცია <img class="w-8"
                src="./assets/Right.png" alt="" /></h2>
            <hr />
          </li>
          <li>
            <h2 class="cursor-pointer flex items-center justify-between">კრეატინი <img class="w-8"
                src="./assets/Right.png" alt="" /></h2>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div @click="ModalFunc" class="Modal absolute top-0 left-0 w-full h-full"></div>
  <RouterView />
  <DescriptionCmp />
  <!-- 
  <div class="w-full relative flex md:hidden">
          <input class="w-full h-10 border border-gray-400 rounded-md pl-2" type="text" placeholder="Search" />
          <img class="absolute right-2 top-2.5 w-5 cursor-pointer" src="./assets/search-icon.png" alt="" />
        </div> -->
</template>

<script setup>
import { computed, ref } from "vue";
import Productsjson from "./Products.json";
import DescriptionCmp from "./components/DescriptionCmp.vue";
let GetInpInfoVmodel = ref("");
let InFuncModel = ref('')

function OpenMenu() {
  document.querySelector(".HeaderHovver2").style.left = "0";
  document.documentElement.style.overflow = "hidden";
}
function DecMenu() {
  document.querySelector(".HeaderHovver2").style.left = "-100%";
  document.documentElement.style.overflowY = "scroll";
}
function CloseHeader() {
  document.querySelector(".HeaderHovver2").style.left = "-100%";
  document.documentElement.style.overflowY = "scroll";
}

function ModalFunc(e) {
  if (e.target === document.querySelector('.Modal')) {
    document.querySelector('.Modal').style.display = 'none'
    document.querySelector(".InpDiv").style.display = 'none'
  }
}

function InptCloseDiv(){
  document.querySelector('.VmodelDiv').style.display = 'none'
}

const INPComputed = computed(() => {
  return Productsjson.filter((el) => el.Category.toLowerCase().includes(GetInpInfoVmodel.value.toLowerCase()));
});

const INPComputedTwo = computed(() => {
  return Productsjson.filter((el) => el.Category.toLowerCase().includes(InFuncModel.value.toLowerCase()));
});


function GetInpInfo(e) {
  let InpDiv = document.querySelector(".InpDiv");
  if (e.target.value) {
    InpDiv.style.display = "flex";
    document.querySelector('.Modal').style.display = 'flex'
  } else {
    InpDiv.style.display = "none";
    document.querySelector('.Modal').style.display = 'none'
  }
}

function InpFunctwo(e) {
  let VmodelDiv = document.querySelector(".VmodelDiv");
  if (e.target.value) {
    VmodelDiv.style.display = "flex";
  } else {
    VmodelDiv.style.display = "none";
  }
}
</script>

<style>
.Modal {
  background: rgb(0, 0, 0, 0.3);
  display: none;
}

.fromHeaderHovver:hover+.HeaderHovver {
  display: block;
}

.HeaderHovver:hover {
  display: block;
}

@media (max-width: 1300px) {
  .HeaderHovver2 {
    top: 0;
    left: -1300px;
    height: 100%;
    display: flex;
  }
}

@media (min-width: 1500px) {
  .ModalDiv {
    display: none;
  }
}
</style>
