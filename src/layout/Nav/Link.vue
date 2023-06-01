<template>
  <a class="text-left" v-bind="$attrs" @click="handleNav"><slot></slot></a>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})
// refs
const router = useRouter()
const route = useRoute()

const handleNav = () => {
  if (route.path.includes(props.to)) return
  else router.push(props.to)
}
</script>

<style lang="scss" scoped>
.link {
}
</style>
