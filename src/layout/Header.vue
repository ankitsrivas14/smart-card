<template>
    <div class="header">
        <div class="app-logo">
            <img :src="require('@/assets/static/header/logo.svg')" alt="App Logo">
        </div>
        <div class="header-menu">
            <router-link to="/">Home</router-link>
            <template v-if="!isAuth">
                <router-link to="/signin">Sign In</router-link> | 
                <router-link to="/signup">Sign Up</router-link>
            </template>
            <template v-else>
                 <router-link to="/portals">Portals</router-link>
                <span @click="logout" class="signout-btn">Sign Out</span> 
            </template>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed:{
        ...mapGetters(["isAuth"])
    },
    methods: {
        ...mapActions(["logout"])
    }
    
}
</script>
<style lang="scss">
.header{
    width: 100vw;
    height: 58px;
    background-color: #ffd858;
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .app-logo{
        margin-top: 8px;
        img{
            width: 248px;
            height: 54px;
        }
    }
    .header-menu{
        a,
        .signout-btn{
            text-decoration: none;
            color: #404040;
            width: 113px;
            height: 47px;
            padding: 10px 15px; 
            font-size: 14px;
            font-weight: 500;
            border-radius: 4px;
        }
        .signout-btn{
            cursor: pointer;
        }
        .router-link-exact-active{
            background-color: #f5f5f5;
        }
    }
}
</style>