<template>
  <section class="login-section">
    <div class="content">
      <div class="title">Welcome to</div>
      <div class="title">Gemini Chat</div>
    </div>
    <div class="login-form">
      <h2 class="text-center py-6">Login</h2>
      <el-form class="form-box" :model="form" label-width="auto">
        <el-form-item label="Email">
          <el-input v-model="form.email" type="email" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" type="password" show-password />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.remember">Remember me</el-checkbox>
          <el-link type="primary" href="#" class="forgot-password"> Forgot Password? </el-link>
        </el-form-item>
        <!-- <el-form-item> -->
        <el-button type="primary" class="login-btn" @click="onSubmit">Login</el-button>
        <!-- </el-form-item> -->
        <el-form-item label-position="top">
          <div class="register">
            Don't have an account? <el-link type="primary" href="#">Register</el-link>
          </div>
        </el-form-item>
      </el-form>
      <div class="login-with">
        <div class="or">OR</div>
        <el-button type="primary" class="google" icon="el-icon-google">
          Login with Google
        </el-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
.login-section {
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;

  .content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .login-form {
    flex: 1;
    width: 100%;
    min-width: 31.25rem;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 3rem;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: $gmiColor;
    }
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    color: $gmiColor;
  }

  .login-with {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

    .google {
      background-color: $helpColor;
      color: #fff;
    }

    .facebook {
      background-color: $priceColor;
      color: #fff;
    }
  }

  .or {
    font-size: 0.8rem;
    color: #606266;
    margin: 1rem 0;
    text-align: center;
  }

  .forgot-password {
    margin-left: auto;
  }

  .register {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: #606266;
    margin-top: 1rem;
  }
  .login-btn {
    width: 60%;
    margin: auto;
    display: flex;
  }
}
</style>
