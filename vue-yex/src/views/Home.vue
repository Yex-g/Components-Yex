<template>
  <div class="home">
    <!-- <yx-input
      type="text"
      v-model="inputvalue"
      placeholder="请输入用户名"
      icon="icon-search"
      iconposition="right"
      label="用户名:"
      rows="3"
      resize="false"
      @iclick="handleClick"
    ></yx-input>-->
    <div>{{inputSelect}}</div>
    <yx-radio left v-model="inputSelect" label="单个">单个用单选框</yx-radio>
    <yx-radio-group v-model="radioValue">
      <yx-radio left>单选框1</yx-radio>
      <yx-radio left>单选框2</yx-radio>
      <yx-radio right>单选框3</yx-radio>
      <yx-radio right>单选框4</yx-radio>
      <yx-radio right>单选框5</yx-radio>
      <yx-radio left>单选框6</yx-radio>
    </yx-radio-group>
  </div>
</template>

<script>
// @ is an alias to /src
import YxButton from "@components/Button/index";
import YxIcon from "@components/Icon/index";
import YxLink from "@components/Link/index";
import YxInput from "@components/Input/index";
import YxRadio from "@components/Radio/index";
import YxRadioGroup from "@components/Radio/radio-group";
// 引入测试父子双向数据绑定 通过v-model
export default {
  name: "Home",
  components: {
    YxButton,
    YxIcon,
    YxLink,
    YxInput,
    YxRadio,
    YxRadioGroup
  },
  data() {
    return {
      icon: "iconfont",
      inputvalue: "33",
      src: "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
      inputSelect: "",
      radioValue: "",
      parentVal: "父子双向绑定"
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
