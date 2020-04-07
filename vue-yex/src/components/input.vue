<template>
  <div :class="['yx-input', type === 'textarea' ? 'yx-textarea' : '',]">
    <label :for="inputId" class="yx-label" v-if="label!= '' ">{{label}}</label>
    <input
      class="yx-input-inner"
      :id = "inputId"
      :name = "inputId"
      :type="type"
      v-if="type!='textarea'"
      v-bind="$attrs"
      :disabled = "disabled"
      :readonly = "readonly"
      @click="handleClick"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @clear="handleClear"
      ref="input"
    />
    <textarea v-else
      :class="['yx-input-inner',resize==true?'':'yx-input-noresize' ]"
      :rows ="rows"
      :id = "inputId"
      :name = "inputId"
      :type="type"
      :disabled = "disabled"
      :readonly = "readonly"
      @click="handleClick"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @clear="handleClear"
      ref="input"
    ></textarea>
  </div>
</template>

<script>
export default {
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
    rows:{
        type:Number,
        default:2
    },
    resize: {
      type: Boolean,
      default:true
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
  components: {},
  data() {
    return {};
  },
  watch: {
      nativeInputValue() {
        this.setNativeInputValue();
      },
  },
  computed: {
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      },
      inputId(){
          return this.label != null ?'yx-input-'+ parseInt( new Date().getTime().toString().slice(5,)*Math.random() ):''
      }
  },
  created() {},
  mounted() {
    this.setNativeInputValue();
  },
  methods: {
    handleBlur(event) {
      this.$emit("blur",event);
    },
    handleFocus(event) {
      this.$emit("focus",event);
    },
    handleClick(event) {
      this.$emit("click",event);
    },
    handleChange(event) {
      this.$emit("change",event);
    },
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    handleClear(event) {
      this.$emit("clear",event);
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
.yx-input{
    display: inline-flex;
    height: $input-height;
    align-items: center;
    &.yx-textarea{
        height: auto;
        align-items: flex-start;
    }
    .yx-label{
        display: block;
        line-height: $label-line-height;
        padding: $label-padding-vertical $label-padding-horizontal $label-padding-vertical 0;
        font-size:$label-font-size;
        color:$label-color
    }
    .yx-input-inner{
        height: 100%;
        box-sizing: border-box;
        line-height: $input-line-height;
        padding:0 $input-padding-horizontal;
        font-size:$input-font-size;
        color:$input-color;
        &.yx-input-noresize{
            resize: none;
        }
        ::placeholder{
            color:$input-placeholder-color;
        }
    }
    textarea.yx-input-inner{
        padding-top:$input-padding-vertical;
        padding-bottom:$input-padding-vertical;
    }
}
</style>
