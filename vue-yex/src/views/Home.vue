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
    <yx-input type = 'text' v-model="inputvalue" placeholder="请输入用户名" icon="icon-search" iconposition='right' label = "用户名:"  rows=3  resize=false  @iclick='handleClick'></yx-input>
    <div>{{inputvalue}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import YxButton from '@components/Button/index'
import YxIcon from '@components/Icon/index'
import YxLink from '@components/Link/index'
import YxInput from '@components/Input/index'
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
      inputvalue:'',
      src:"http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
    }
  },
  methods: {
    handleClick(n){
      this.inputvalue = '86'
    }
  }
}
</script>
