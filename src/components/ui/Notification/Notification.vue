<template>
    <div class="alert" v-if="show">
        <span class="closebtn" @click="closenotificaiton">&times;</span> 
        <strong>Info!</strong> {{info}}
    </div>
</template>

<script src="./Notificaiton.js" />
<style src="./Notification.css" scoped />

