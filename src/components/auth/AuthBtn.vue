<script setup lang="ts">
import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebaseConfig'
import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
  signOut
} from 'firebase/auth'

// :firebase 초기화
initializeApp(firebaseConfig)

// :에뮬레이터 설정
const auth = getAuth()
auth.useDeviceLanguage()
connectAuthEmulator(auth, 'http://localhost:9099')

// :구글 로그인 인증
const provider = new GoogleAuthProvider()

// :사용자 데이터 담기
const firebaseUser = ref<User | null>(null) // 로그인시 User, 비로그인시 null 세팅

// :인증 상태 관찰자 설정 및 사용자 데이터 가져오기(UserImpl)
onAuthStateChanged(auth, (user) => {
  firebaseUser.value = user
  console.log('user : ', user)
  console.log('firebaseUser : ', firebaseUser)
})
</script>
<template>
  <!-- 로그인시 -->
  <q-btn v-if="firebaseUser" round color="info">
    <q-avatar size="32px">
        <img :src="firebaseUser.photoURL || ''">
        <q-menu>
          <q-card>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-account" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>이름</q-item-label>
                  <q-item-label caption>
                    {{ firebaseUser.displayName }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-email" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>이메일</q-item-label>
                  <q-item-label caption>
                    {{ firebaseUser.email }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-card-actions align="right">
              <q-btn icon="mdi-logout" label="로그아웃" flat color="primary" @click="signOut(auth)"/>
            </q-card-actions>
          </q-card>
        </q-menu>
    </q-avatar>
  </q-btn>

  <!-- 비로그인시 -->
  <q-btn v-else round color="info" @click="signInWithPopup(auth, provider)">
    <q-avatar icon="mdi-login" size="32px"/>
  </q-btn>
</template>
