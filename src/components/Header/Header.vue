<template>
  <div class="p-5 flex align-middle justify-between"> 
    <div class="flex">
      <font-awesome-icon icon="home" class="text-3xl ml-2 "/> 
      <span class="block text-2xl ml-4"> {{tittle}} </span> 
    </div>
    <div class="flex">
      <router-link to="/task"> <span class="mr-2"> Community Chat </span> </router-link>
      <router-link to="/login"> Login </router-link>
    </div>
  </div>
</template>

<script src="./Header.js" /> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Header.css" />

