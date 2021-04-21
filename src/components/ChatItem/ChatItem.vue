<template>
    <div class="mt-2  mb-1 flex justify-end w-full" v-if="position == 'me'" >
        <div >
            <span class="block text-sm font-bold text-right mr-2"  >  Me </span>
            <span class="block text-sm chat-text shadow-xl"> {{chat.message}} </span>
        </div>
    </div>
    <div  class="mt-2 mb-1" v-if="position == 'other'">
        <div>
            <span class="block text-sm font-bold ml-2"   > {{chat.sendername}} </span>
            <span class="block text-sm chat-text shadow-xl"> {{chat.message}}</span>
        </div>
    </div>
</template>

<script src="./ChatItem.js" />


<style src="./ChatItem.css" scoped />
