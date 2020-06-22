<template>
  <div class="yx-radio-group">
    <input type="hidden" v-model="value">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YxRadioGroup",
  componentName:'YxRadioGroup',
  props: {
    value:{}
  },
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleInput(val){
        this.value = val
    }
  }
};
</script>

<style>
</style>
