<template>
  <section class="login-section">
    <div class="content">
      <div class="title">欢迎来到</div>
      <div class="title">Gemini Chat</div>
    </div>
    <div class="login-form">
      <div class="login-box">
        <h2 class="text-center py-6">登录</h2>
        <el-form class="form-box" :rules="rules" ref="formRef" :model="form" label-width="auto">
          <el-form-item label="邮箱">
            <el-input v-model="form.email" type="email" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" show-password />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.remember">记住我</el-checkbox>
            <el-link type="primary" href="#" class="forgot-password">忘记密码？</el-link>
          </el-form-item>
          <el-button type="primary" class="login-btn" @click="onSubmit(formRef)">登录</el-button>
          <el-form-item label-position="top">
            <div class="register">没有账户？<el-link type="primary" href="#">注册</el-link></div>
          </el-form-item>
        </el-form>
        <div class="login-with">
          <div class="or">或</div>
          <el-button type="primary" class="google" icon="el-icon-google">
            使用 Google 登录
          </el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import router from '@/router'

interface RuleForm {
  email: string
  password: string
  remember: boolean
}

const form = reactive<RuleForm>({
  email: '',
  password: '',
  remember: false,
})

const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: '请填写邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },
  ],
  password: [{ required: true, message: '请填写密码', trigger: 'blur' }],
})

const formRef = ref<FormInstance>()

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const data = await useUserStore().getUserInfo({ email: form.email, password: form.password })
      ElMessage({ type: 'success', message: '登录成功' })
      // router.replace('/')
      console.log('提交成功！', data)
    } else {
      console.log('提交失败！', fields)
    }
  })
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
    .login-box {
      padding-top: 5rem;
    }
    .el-form {
      width: 80%;
      margin: auto;
    }
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
      color: #409eff;
    }
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    color: #409eff;
  }

  .login-with {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

    .google {
      background-color: #db4437;
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
