<script setup lang="ts">
import { isSigned } from 'src/composables/useAuth'

</script>
<template>
  <q-page padding>
    write
  </q-page>
  <q-page-sticky
    v-if="isSigned"
    position="bottom-right"
    :offset="[28, 28]"
    :expand="false"
  >
    <q-btn>글쓰기</q-btn>
  </q-page-sticky>
</template>
