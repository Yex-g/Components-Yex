<template>
  <div class="home">
    <yx-button icon="icon" @click='handleClick(8)'>
      按钮
    </yx-button>
  </div>
</template>

<script>
// @ is an alias to /src
import YxButton from '@/components/Button'
export default {
  name: 'Home',
  components: {
    YxButton
  },
  data () {
    return {
      icon:'iconfont'
    }
  },
  methods: {
    handleClick(n){
      console.log(n)
    }
  }
}
</script>
