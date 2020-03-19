<template>
  <div class="home">
    <yx-button icon="icon-search" iconposition='left'  @click='handleClick(8)'>
      按钮
    </yx-button>
    <yx-icon className = "icon-account"></yx-icon>
    <br>
    <yx-link href='https:www.baidu.com' icon="icon-search" iconposition='bottom'>
      默认链接
    </yx-link>
  </div>
</template>

<script>
// @ is an alias to /src
import YxButton from '@components/Button'
import YxIcon from '@components/Icon'
import YxLink from '@components/Link'
export default {
  name: 'Home',
  components: {
    YxButton,
    YxIcon,
    YxLink
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
