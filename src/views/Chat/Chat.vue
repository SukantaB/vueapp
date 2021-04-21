<template>
    <div class="flex justify-center">
        <div  class="shadow-inner w-11/12 md:w-1/4 bg-gray-100 rounded-lg ">
            <div class=" overflow-auto customScroll m-4 mb-5 mr-0 pr-4 chat-container"> 
                <ChatItem v-for="(chat,index) in chats" :key="index" :chat="chat" />
                <div id="last-div"/>
            </div>
            <div class="bottom-box">
                <Input classname="chatbox" :onChange="_text" :value="text"/>
                <Button text="Send" classname="sendbutton" :onSubmit="_onSubmit" />
            </div>
        </div>
    </div>
</template>

<script src="./Chat.js" />

<style src="./Chat.css" scoped />
