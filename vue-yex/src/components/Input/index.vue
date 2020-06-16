<template>
  <div :class="['yx-input', type === 'textarea' ? 'yx-textarea' : '',]">
    <label :for="inputId" class="yx-label" v-if="label!= '' ">{{label}}</label>
    <div :class="['yx-input-warpper',posClass]">
      <input
        class="yx-input-inner"
        :id="inputId"
        :name="inputId"
        :type="type"
        :placeholder ="placeholder"
        v-if="type!='textarea'"
        :disabled="disabled"
        :readonly="readonly"
        @click="handleClick"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        ref="textarea"
      />
      <textarea
        v-else
        :class="['yx-input-inner',resize==true?'':'yx-input-noresize' ]"
        :rows="rows"
        :id="inputId"
        :name="inputId"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        @click="handleClick"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        ref="input"
      ></textarea>
      <yx-Icon
        v-if="icon && type!='textarea'"
        type="icontype"
        :className="iconClass"
        @click="handleIconClick"
      ></yx-Icon>
    </div>
  </div>
</template>

<script>
import YxIcon from "@components/Icon/index";
export default {
  name:'YxInput',
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    iconposition: {
      default: "left",
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String
    },
    maxlength: {
      type: Number
    },
    minlength: {
      type: Number
    },
    rows: {
      type: [Number, String],
      default: 2
    },
    resize: {
      type: [Boolean, String],
      default: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  components: {
    YxIcon
  },
  data() {
    return {};
  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    }
  },
  computed: {
    posClass() {
      return this.iconposition == "left" ? "yx-input-left" : "yx-input-right";
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
    inputId() {
      return this.label != null
        ? "yx-input-" +
            parseInt(
              new Date()
                .getTime()
                .toString()
                .slice(5) * Math.random()
            )
        : "";
    },
    iconClass(){
      if(this.clearable){
        return 'icon-close'
      }
      return this.icon
    }
  },
  created() {},
  mounted() {
    this.setNativeInputValue();
  },
  methods: {
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleClick(event) {
      this.$emit("click", event);
    },
    handleChange(event) {
      this.$emit("change", event);
    },
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    handleClear(event) {
      const input = this.getInput();
      input.value = "";
      this.$emit("input", input.value);
    },
    handleSearch() {
      this.$emit('search',this.nativeInputValue)
    },
    iconClick(){
      this.$emit('iclick',this.nativeInputValue)
    },
    handleIconClick() {
      if (this.clearable) {
        this.handleClear();
      } else if (this.$listeners.search) {
        this.handleSearch()
      } else {
        this.iconClick()
      }
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    }
  }
};
</script>
<style lang="scss" scoped>
.yx-input {
  display: inline-flex;
  height: $input-height;
  align-items: center;
  &.yx-textarea {
    height: auto;
    align-items: flex-start;
  }
  .yx-label {
    display: block;
    line-height: $label-line-height;
    padding: $label-padding-vertical $label-padding-horizontal
      $label-padding-vertical 0;
    font-size: $label-font-size;
    color: $label-color;
  }
  .yx-input-inner {
    height: 100%;
    box-sizing: border-box;
    line-height: $input-line-height;
    padding: 0 $input-padding-horizontal;
    font-size: $input-font-size;
    color: $input-color;
    border-radius: $input-radius;
    &.yx-input-noresize {
      resize: none;
    }
    &::placeholder {
      color: $input-placeholder-color;
      font-size:$input-placeholder-size;
    }
    &:focus {
      outline: $input-outline;
    }
  }
  textarea.yx-input-inner {
    padding-top: $input-padding-vertical;
    padding-bottom: $input-padding-vertical;
  }
  .yx-input-warpper {
    height: 100%;
    position: relative;
    .yx-iconfont {
      position: absolute;
      height: 100%;
      line-height: $input-height;
    }
    &.yx-input-left {
      .yx-iconfont {
        left: 4px;
      }
      .yx-input-inner {
        padding-left: $input-padding-horizontal + 1em;
      }
    }
    &.yx-input-right {
      .yx-iconfont {
        right: 0.5em;
      }
      .yx-input-inner {
        padding-right: $input-padding-horizontal + 1em;
      }
    }
  }
}
</style>
