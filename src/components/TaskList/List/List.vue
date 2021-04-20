<template>
    <div class="flex justify-around m-10">
        <div  @drop="onDrop($event, 'new')"  @dragenter.prevent @dragover.prevent class="shadow-inner p-5 w-1/3 bg-gray-100 max-h-1/2 rounded-lg">
            <span class="block mb-5 text-lg"> To do </span>
            <ListItem v-for="(item, index) in newtasks" :key="index" :id="item.id" :name="item.name" :index="index+1" />
        </div>
        <div  @drop="onDrop($event, 'completed')" @dragenter.prevent @dragover.prevent class="shadow-inner p-5 w-1/3 bg-gray-100 max-h-1/2 rounded-lg">
            <span class="block mb-5 text-lg"> Completed </span>
            <ListItem v-for="(item, index) in completedtasks" :key="index" :id="item.id" :name="item.name" :index="index+1" />
        </div>
    </div>
</template>

<script src="./List.js" />

<style  src="./List.css" />

