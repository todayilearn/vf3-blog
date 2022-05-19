<script setup lang="ts">
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebaseConfig'
import { getAuth, connectAuthEmulator, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// :firebase 초기화
initializeApp(firebaseConfig)

// :에뮬레이터 설정
const auth = getAuth()
auth.useDeviceLanguage()
connectAuthEmulator(auth, 'http://localhost:9099')

// :구글 로그인 인증
const provider = new GoogleAuthProvider()

</script>
<template>
  <q-btn round color="info" @click="signInWithPopup(auth, provider)">
    <q-avatar
      icon="mdi-login"
      size="32px"
    />
  </q-btn>
</template>
