<template>
  <section class="login-section flex">
    <!-- 表单盒子 -->
    <div class="login-left"></div>
    <div class="login-right">
      <div class="login-form">
        <!-- <h2>登录</h2>
        <el-form>
          <el-form-item label="用户名">
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form> -->
      </div>
    </div>
  </section>
</template>

<script name="Login" setup lang="ts"></script>

<style lang="scss" scoped>
.login-section {
  // 占满整个视口
  height: 100vh; // 修改为视口高度单位
  display: flex;
  background-color: #f4f4f4;

  .login-left {
    flex: 2;
  }

  .login-right {
    position: relative;
    flex: 1;

    .login-form {
      width: 500px;
      height: 100%;
      background: #fff;
      position: absolute;
      right: 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
