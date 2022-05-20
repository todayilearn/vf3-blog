
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import {
  getAuth,
  connectAuthEmulator
} from 'firebase/auth'

// :firebase 초기화
initializeApp(firebaseConfig)

// :에뮬레이터 설정
const auth = getAuth()
auth.useDeviceLanguage()
connectAuthEmulator(auth, 'http://localhost:9099')

export { auth }
