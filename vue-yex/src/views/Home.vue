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
    <yx-input type = 'text' :value="inputvalue"></yx-input>
    <input type="text" v-model ='inputvalue'>
    <div>{{inputvalue}}</div>
    <p class="mask">
        SS mask遮罩属性的历史非常久远了，远到比CSS3 border-radius等属性还要久远，最早是出现在Safari浏览器上的，差不多可以追溯到09年。
        不过那个时候，遮罩只能作为实验性的属性，做一些特效使用。毕竟那个年代还是IE浏览器的时代，属性虽好，但价值有限。
        但是如今情况却大有变化，除了IE和Edge浏览器不支持，Firefox，Chrome以及移动端等都已经全线支持，其实际应用价值已不可同日而语。尤其Firefox浏览器，从版本55开始，已经全面支持了CSS3 mask属性。并且mask属性规范已经进入候选推荐规范之列，会说以后进入既定规范标准已经是板上钉钉的事情，大家可以放心学习，将来必有用处。
        mask-image遮罩所支持的图片类型非常的广泛，可以是url()静态图片资源，格式包括JPG，PNG以及SVG等都是支持的；也可以是动态生成的图片，例如使用各种CSS3渐变绘制的图片。语法上支持CSS3各类渐变，以及url()功能符，image()功能符，甚至element()功能符。同时还支持多背景，因此理论上，使用mask-image我们可以遮罩出任意我们想要的图形，非常强大。
        从上面这个最基本的案例，我们可以看出，所谓遮罩，就是原始图片只显示遮罩图片非透明的部分。因此，我们很少使用jpg图片来作为遮罩图片的，因为jpg图片一定是完全不透明的，最终的效果就是原图什么也看不到。

        另外，如果Xia.png加载失败，则Firefox，Chrome浏览器下直接原始图不显示
    </p>
    <img src="../../public/Img/banner.png" class="mask" width="200" height="200">
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
