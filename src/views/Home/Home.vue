<template>
<div class="home">
    <div class="add-task">
        <Input placeholder="Enter new task to add" classname="input-home"   
            :onChange="setTaskName"
            :value="taskname"
        />
        <Button text="Add Task" classname="button-home" :onAddTask="onAddTask" />
    </div>
    <div>
        <List :newtasks="newtasks" :completedtasks="completedtasks"/>
    </div>  
</div>
</template>

<script src="./Home.js" /> 

<style scoped src="./Home.css" />


