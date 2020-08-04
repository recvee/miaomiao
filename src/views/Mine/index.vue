<template>
        <div id="main">  
        <Header/> 
        <Login/>
        <Tabbar/> 
    </div>
</template>

<script>
    import Header from '@/components/header'
    import Tabbar from '@/components/tabbar'
    import Login from '@/components/Login'
    export default {
        name : 'Mine',
        components :{
            Header,
            Tabbar,
            Login
        }

    }
</script>


<style>


</style>
