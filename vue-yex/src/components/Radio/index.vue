<template>
  <div class="yx-radio" :class="[!!right?'yx-radio-right':'',isChecked?'yx-radio-check':'']">
    <template v-if="!!right">
      <input type="radio" class="yx-radio-input" :value="label" v-model="model" ref="radio" />
      <span class="yx-radio-inner"></span>
      <label class="yx-radio-label" @click="handleChange(label)">
        <slot></slot>
      </label>
    </template>
    <template v-else>
      <label class="yx-radio-label" @click="handleChange(label)">
        <slot></slot>
      </label>
      <input
        type="radio"
        class="yx-radio-input"
        :value="label"
        v-model="model"
        ref="radio"
      />
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
    value: {
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
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "YxRadioGroup") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        this.handleChange(val)
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(val) {
      if (this.isGroup) {
          // 调动父级
          this._radioGroup.$emit("input", val);
        } else {
          this.$emit("input", val);
        }
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
