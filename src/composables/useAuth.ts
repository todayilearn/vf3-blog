import { ref, computed } from 'vue'
import { auth } from 'boot/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'

// :사용자 데이터 담기
export const firebaseUser = ref<User | null>(null) // 로그인시 User, 비로그인시 null 세팅
export const isSigned = computed(() => firebaseUser.value !== null)

// :인증 상태 관찰자 설정 및 사용자 데이터 가져오기(UserImpl)
export const useAuth = () => {
  onAuthStateChanged(auth, (user) => {
    firebaseUser.value = user
  })
}
