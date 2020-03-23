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
    <yx-input type = 'text' v-model="inputvalue"></yx-input>
    <input type="text" v-model ='inputvalue'>
    <div>{{inputvalue}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import YxButton from '@components/Button'
import YxIcon from '@components/Icon'
import YxLink from '@components/Link'
import YxInput from '@components/Input'
export default {
  name: 'Home',
  components: {
    YxButton,
    YxIcon,
    YxLink,
    YxInput
  },
  data () {
    return {
      icon:'iconfont',
      inputvalue:''
    }
  },
  methods: {
    handleClick(n){
      console.log(n)
    }
  }
}
</script>
