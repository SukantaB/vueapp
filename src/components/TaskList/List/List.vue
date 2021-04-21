<template>
    <div class="flex flex-col md:flex-row md:justify-around m-10">
        <div  @drop="onDrop($event, 'new')"  @dragenter.prevent @dragover.prevent class="customScroll overflow-auto shadow-inner p-5 md:w-1/3 bg-gray-100 h-64 md:h-96  rounded-lg">
            <span class="block mb-5 text-lg"> To do </span>
            <ListItem v-for="(item, index) in newtasks" :key="index" :id="item.id" :name="item.name" :index="index+1" :onCheck="onCheck" :status="item.status"/>
        </div>
        <div  @drop="onDrop($event, 'completed')" @dragenter.prevent @dragover.prevent class="customScroll overflow-auto shadow-inner p-5 mt-5 md:mt-0 md:w-1/3 bg-gray-100 h-64 md:h-96 rounded-lg">
            <span class="block mb-5 text-lg"> Completed </span>
            <ListItem v-for="(item, index) in completedtasks" :key="index" :id="item.id" :name="item.name" :index="index+1"  :status="item.status" :onCheck="onCheck"/>
        </div>
    </div>
</template>

<script src="./List.js" />

<style  src="./List.css" />

