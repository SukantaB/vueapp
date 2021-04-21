<template>
  <div class="p-5 flex align-middle justify-between"> 
    <div class="flex">
      <span class="block text-2xl ml-4"> {{tittle}} </span> 
    </div>
    <div class="flex">
      <router-link to="/"><span class="cursor-pointer mr-2 underline"> Home </span> </router-link>
      <router-link to="/chat"><span class="cursor-pointer mr-2 underline"> Community Chat </span> </router-link>
      <span @click="logout()" class="cursor-pointer mr-2 underline"> Logout </span>
    </div>
  </div>
</template>

<script src="./Header.js" /> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Header.css" />

