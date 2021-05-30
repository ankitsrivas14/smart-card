<template>
    <div  class="signup-container">
        <div class="signup-card">
            <span class="sign-up-heading">
                Creating account is fast and easy!
            </span>
            <form @submit.prevent="signUp" class="signup-form">
                <div class="input-container">
                    <input type="text" v-model="name" placeholder="Full Name* (as per Aadhaar)">
                </div>
                <div class="input-container">
                    <input type="email" v-model.trim="email" placeholder="Email ID*">
                </div>
                <div class="input-container">
                    <input type="password" v-model="password" placeholder="Password*">
                </div>
                <div class="input-container">
                    <input type="text" v-model.number="mobile" placeholder="Mobile Number*">
                </div>
                <span class="data-under-sign-up">Smart Card uses Aadhaar to verify identity of the user and also enable authentic document access.</span>
                <button type="submit" class="sign-up-btn"> Sign Up </button>
            </form>
        </div>
        <!-- <div class="sign-up-image">
            <img :src="require('@/assets/static/auth/signup.svg')" />
        </div> -->
    </div>
</template>

<script>

import  firebase from 'firebase/app'
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            name: '',
            email: '',
            password: '',
            mobile: '',
        }
    },
    computed:{
        ...mapGetters(["isAuth"])
    },
    watch: {
        isAuth(val){
            if(val){
                this.$router.replace('/portals');
            }
        }
    },
    methods: {
        signUp(){
            if(this.checkInputValues()){
                 firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then( res => {
                        return res.user.updateProfile({
                            displayName: this.name,
                            phoneNumber: this.mobile
                        })
                        .then( res => {
                            this.$router.push({path: '/portals'})
                        })
                        .catch(e => {
                            this.$swal({
                            icon: 'error',
                            text: e.message
                        })
                        })
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
            else if(!this.name){
                this.$swal('Name cannot be empty!')
                return false;
            }
            else if(!this.mobile){
                this.$swal('Mobile number cannot be empty!')
                return false;
            }
            else if(isNaN(this.mobile)){
                this.$swal('Mobile number cannot be empty!')
                return false;
            }
            return true;
        }
    }
}
</script>
<style lang="scss">
.signup-container{
    padding: 80px 112px;
    background-image: url('../assets/static/auth/signup.svg') ;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 550px 100px;
    .signup-card{
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
        .sign-up-heading{
            font-size: 24px;
            font-weight: 500;
            color: #404040;
            text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            margin-bottom: 25px;
        }
        .signup-form{
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
            .data-under-sign-up{
                font-size: 13px;
                color: #000000;
                opacity: 0.7;
                display: block;
            }
            .sign-up-btn{
                width: 415px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                border: none;
                border-radius: 4px;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                background-color: #5aaaff;
                color: #ffffff;
                font-weight: bold;
                font-size: 15px;
                cursor: pointer;
            }
        }
    }
}
</style>