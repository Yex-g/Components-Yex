<template>
  <div class="home">
    <div>{{inputSelect}}</div>
    <yx-radio v-model="inputSelect" label="单个1">单个用单选框1</yx-radio>
    <div>{{radioValue}}</div>
    <yx-radio-group v-model="radioValue">
      <yx-radio label="单个1">单选组1</yx-radio>
      <yx-radio label="单个2" right>单选组2</yx-radio>
      <yx-radio label="单个3">单选组3</yx-radio>
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
