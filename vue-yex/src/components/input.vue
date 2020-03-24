<template>
    <div>
        <label v-if= "label!= '' ">{{label}}</label>
        <input :type="type" v-if="type!='textarea'"
            :value="value"
            @click="handleClick"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            @clear ="handleClear"
        />
        <textarea v-else></textarea>
    </div>
</template>

<script>
export default {
    props: {
        label:{
            type:String
        },
        icon:{
            type:String
        },
        iconposition:{
            default:'left',
            type:String
        },
        type:{
            type:String,
            default:'text'
        },
        value:{
            type:String,
        },
        maxlength:{
            type:Number,
        },
        minlength:{
            type:Number
        },
        resize:{
            type:String
        },
        placeholder:{
            type:String,
            default:''
        },
        clearable:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false,
        },
    },
    components: {

    },
    data() {
        return {

        };
    },
    watch: {

    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleBlur(){
            this.$emit('blur')
        },
        handleFocus(){
            this.$emit('focus')
        },
        handleClick(){
            this.$emit('click')
        },
        handleChange(){
            this.$emit('change')
        },
        handleInput(){
            this.$emit('input')
        },
        handleClear(){
            this.$emit('clear')
        }
    },
};
</script>

<style>

</style>
