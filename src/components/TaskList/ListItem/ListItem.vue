<template>
    <div @click="onClick(id)" class="flex justify-between shadow-lg rounded-lg p-5 mb-5 bg-white align-middle"  draggable="true" @dragstart="ondragStart($event, id)">  
        <span class="block">  
            <input type="checkbox" class="mr-2 cursor-pointer"  @input="onCheck($event, id)" :checked="checked"/>
            {{ name }}  
        </span>
        <font-awesome-icon icon="trash" class="block text-1xl cursor-pointer" @click="onDelete($event, id)"  /> 
    </div>
</template>

<script src="./ListItem.js" />


<style src="./ListItem.css" scoped />

