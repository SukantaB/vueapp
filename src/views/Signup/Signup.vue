<template>
    <div class="h-full w-full flex justify-center">
        <div class="flex flex-col mt-20 shadow-2xl p-10 max-h-96 ">
            <h1 class="text-3xl text-center"> Signup </h1>
            <br/>
            <label> Email: </label>
            <Input :value="email" :onChange="_email"/>
            <br/>
            <label> Password:</label>
            <Input :value="password" :onChange="_password" />
            <br/>
            <Button text="Submit" :onSubmit="_onSubmit"  />
            <router-link to="/login"> <span class="block mt-2 text-center text-sm"> Back to login </span></router-link>
        </div>
    </div>
</template>

<script src="./Signup.js" />

<style src="./Signup.css" scoped />
