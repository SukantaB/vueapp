<template>
    <div @click="onClick(id)" class="flex justify-between shadow-lg rounded-lg p-5 mb-5 bg-white"  draggable="true" @dragstart="ondragStart($event, id)">  
        <span class="block">  {{ name }}  </span>
        <font-awesome-icon icon="trash" class="block text-1xl cursor-pointer" @click="onDelete($event, id)"  /> 
    </div>
</template>

<script src="./ListItem.js" />


<style src="./ListItem.css" scoped />

