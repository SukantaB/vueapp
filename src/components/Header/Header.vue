<template>
  <div class="p-5 flex align-middle justify-between"> 
    <div class="flex">
      <font-awesome-icon icon="home" class="text-3xl ml-2 "/> 
      <span class="block text-2xl ml-4"> {{tittle}} </span> 
    </div>
    <div class="flex">
      <span @click="logout()" class="cursor-pointer mr-2 underline"> Logout </span>
    </div>
  </div>
</template>

<script src="./Header.js" /> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Header.css" />

