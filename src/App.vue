<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="piano-home">Piano</router-link>
        <router-link to="about">About</router-link>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
    .margin-top-100{margin-top:100px;}
    a{
        display:inline-block;
        padding:0 10px;
        text-decoration: none;
        color:blue;
    }
</style>