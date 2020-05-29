<template>
  <div class="yx-radio" :class="[!!right?'yx-radio-right':'',isChecked?'yx-radio-check':'']">
    <template v-if="!!right">
      <input type="radio" :name="label" id class="yx-radio-input"/>
      <span class="yx-radio-inner"></span>
      <label class="yx-radio-label" :for="label">
        <slot></slot>
      </label>
    </template>
    <template v-else>
      <label class="yx-radio-label" :for="label">
        <slot></slot>
      </label>
      <input type="radio" :name="label" id class="yx-radio-input" />
      <span class="yx-radio-inner"></span>
    </template>
  </div>
</template>

<script>
export default {
  name: "YxRadio",
  props: {
    label: {
      default: "",
      type: [String, Number, Boolean]
    },
    left: {
      default: false,
      type: Boolean
    },
    right: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    value:{
      default: "",
      type: [String, Number, Boolean]
    }
  },
  components: {},
  data() {
    return {
      isChecked: false
    };
  },
  watch: {
    value(){
      console.log(value)
    }
  },
  computed: {
    model(){
      return this.value
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleInputSelect(ev) {
      this.isChecked = ev.target.checked;
      this.change();
    },
    change() {
      this.$emit("change");
    }
  }
};
</script>

<style lang="scss" scoped>
.yx-radio {
  line-height: $radio-line-height;
  position: relative;
  .yx-radio-label {
    font-size: $radio-font-size;
    color: $radio-color;
    margin-right: $radio-label-space;
  }
  .yx-radio-input {
    position: absolute;
    width: $radio-font-size;
    top: 0;
    height: 100%;
    opacity: 0;
  }
  .yx-radio-inner {
    display: inline-block;
    width: $radio-font-size;
    height: $radio-font-size;
    border: $radio-border-width solid $radio-border-color;
    box-sizing: border-box;
    border-radius: 50%;
    vertical-align: middle;
  }
  .yx-radio-input:checked + .yx-radio-inner {
    border: $radio-select-border-width solid $radio-select-color;
  }
  &.yx-radio-right {
    .yx-radio-label {
      margin-left: $radio-label-space;
    }
  }
}
</style>
