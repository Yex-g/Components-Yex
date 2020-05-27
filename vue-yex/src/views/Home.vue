<template>
  <div class="home">
    <yx-button icon="icon-search" iconposition="left" @click="handleClick(8)">按钮</yx-button>
    <yx-icon class="icon-account"></yx-icon>
    <br />
    <yx-link href="https:www.baidu.com" icon="icon-search" iconposition="bottom">默认链接</yx-link>
    <yx-input
      type="text"
      v-model="inputvalue"
      placeholder="请输入用户名"
      icon="icon-search"
      iconposition="right"
      label="用户名:"
      rows="3"
      resize="false"
      @iclick="handleClick"
    ></yx-input>
    <div>{{inputvalue}}</div>
    <div>
      <yx-radio label="radio" left>单选框1</yx-radio>
      <yx-radio label="radio" left>单选框2</yx-radio>
      <yx-radio label="radio" right>单选框3</yx-radio>
      <yx-radio label="radio" right>单选框4</yx-radio>
      <yx-radio label="radio" right>单选框5</yx-radio>
      <yx-radio label="radio" left>单选框6</yx-radio>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import YxButton from "@components/Button/index";
import YxIcon from "@components/Icon/index";
import YxLink from "@components/Link/index";
import YxInput from "@components/Input/index";
import YxRadio from "@components/Radio/index";

export default {
  name: "Home",
  components: {
    YxButton,
    YxIcon,
    YxLink,
    YxInput,
    YxRadio
  },
  data() {
    return {
      icon: "iconfont",
      inputvalue: "",
      src: "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
    };
  },
  created() {},
  methods: {
    handleClick(n) {
      this.inputvalue = "86";
    }
  }
};
</script>
