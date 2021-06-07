<template>
    <div  class="signin-container">
        <div class="signin-card">
            <span class="sign-in-heading">
                Sign in to your account
            </span>
            <form @submit.prevent="signIn" class="signin-form">
                <div class="input-container">
                    <input type="email" v-model.trim="email" placeholder="Email ID*">
                </div>
                <div class="input-container">
                    <input type="password" v-model="password" placeholder="Password*">
                </div>
                <span @click="forgotPassword" class="reset-password">Forgot Password?</span>
                <button type="submit" class="sign-in-btn"> Sign In </button>
            </form>
        </div>
    </div>
</template>

<script>

import  firebase from 'firebase/app'
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            email: '',
            password: '',
        }
    },
    computed:{
        ...mapGetters(["isAuth"])
    },
    watch: {
        isAuth(val){
            if(val){
                return this.$router.replace('/portals');
            }
        }
    },
    methods: {
        signIn(){
            if(this.checkInputValues()){
                 firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then( res => {
                        this.$router.push({path: '/portals'})
                    })
                    .catch(e => {
                        this.$swal({
                            icon: 'error',
                            text: e.message
                        })
                    })
            }
        },
        checkInputValues(){
            if(!this.email){
                this.$swal('Email address cannot be empty!')
                return false;
            }
            else if(!this.password){
                this.$swal('Password cannot be empty!')
                return false;
            }
            return true;
        },
        forgotPassword(){
            if(!this.email){
                this.$swal('Enter email address');
            }
            else{
                firebase
                    .auth()
                    .sendPasswordResetEmail(this.email)
                    .then(res => {
                        this.$swal('Reset email sent successfully');
                    })
                    .catch(e => {
                        this.$swal({
                            icon: 'error',
                            text: e.message
                        })
                    })
            }

        }
    }
}
</script>
<style lang="scss">
.signin-container{
    padding: 80px 112px;
    background-image: url('../assets/static/auth/signin.svg') ;
    background-size: 35%;
    background-repeat: no-repeat;
    background-position: 100px 80px;
    display: flex;
    flex-direction: row-reverse;
    .signin-card{
        width: 500px;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.16);
        position: relative;
        border-radius: 4px;
        padding: 35px;
        &::before{
            content: "";
            height: 100%;
            background-color: #ffd858;
            width: 25px;
            position: absolute;
            left: -20px;
            top: 0;
            box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.16);
            z-index: -1;
            border-radius: 4px;
        }
        .sign-in-heading{
            font-size: 24px;
            font-weight: 500;
            color: #404040;
            text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            margin-bottom: 25px;
        }
        .signin-form{
            margin-top: 25px;
            .input-container{
                background-color: #ffd858;
                padding-left: 10px;
                width: 30px;
                height: 50px;
                margin-bottom: 18px;
                border-radius: 4px;
                input{
                    border: none;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    height: 50px;
                    width: 405px;
                    display: block;
                    padding: 0 20px;
                    position: relative;
                    border-radius: 4px;
                    font-size: 18px;
                }
            }
            .data-under-sign-in{
                font-size: 13px;
                color: #000000;
                opacity: 0.7;
                display: block;
            }
            .reset-password{
                float: right;
                margin-bottom: 15px;
                margin-right: 19px;
                color: #414bd2;
                cursor: pointer;
            }
            .sign-in-btn{
                width: 415px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                border: none;
                border-radius: 4px;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                background-color: #74c687;
                color: #ffffff;
                font-weight: bold;
                font-size: 15px;
                cursor: pointer;
            }
        }
    }
}
</style>