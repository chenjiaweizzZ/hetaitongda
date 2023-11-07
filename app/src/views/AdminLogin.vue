<template>
    <div class="admin-login">
        <div class="menu-logo">
            <img src="@/assets/images/logo1.jpg" />
        </div>
        <div class="form-box">
            <div class="form">
                <p class="form-title">菏海通大后台管理系统</p>
                <div class="input-container">
                    <input type="email" placeholder="请输入账号" v-model="username">
                    <span>
                    </span>
                </div>
                <div class="input-container">
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <button  class="submit" @click="logina()">
                    登录
                </button>

                <p class="signup-link">
                    没有账号?
                    <a class="ghaga" @click="register()">注册</a>
                </p>
            </div>
        </div>

    </div>
</template>
  
<script>
import { Dialog } from 'vant';
export default {
    name: 'adminLogin',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        logina() {
            this.$router.push({
                name: 'homea'
            })
        },  
        register() {
            Dialog.alert({
                title: '注册',
                message: '请联系管理员进行注册',
                confirmButtonColor: '#056DE8'
            }).then(() => {
                // on close
            });
        }
    }
}
</script>
<style scoped>
.menu-logo img {
    width: 200px;
    height: 80px;
}
.menu-logo {
    display: flex;
    justify-content: center;
}
.admin-login {
    /* margin-top: 90px; */
}

.admin-login img {
    width: 200px;
    height: 80px;
}

.form-box {
    display: flex;
    justify-content: center;
}

.form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 350px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #000;
}

.input-container {
    position: relative;
}

.input-container input,
.form button {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
}

.input-container input {
    background-color: #fff;
    padding: 1rem;
    padding-right: 3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #056DE8;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
}

.signup-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
}

.ghaga {
    color: #056DE8;
    cursor: pointer;
}

.signup-link a {
    text-decoration: underline;
}
</style>