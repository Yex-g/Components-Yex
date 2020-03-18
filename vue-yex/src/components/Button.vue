<template>
    <button @click="handleClick" class="yx-btn">
        <i :class="icon" v-if="icon"></i>
        <span><slot></slot></span>
    </button>
</template>

<script>
export default {
    name:'yx-button',
    props: {
        icon:{
            type:String
        },
        autofocus:{
            default:false,
            type:Boolean
        },
        disabled:{
            default:false,
            type:Boolean
        },
        loading:{
            default:false,
            type:Boolean
        }
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
        handleClick(){
            this.$emit('click')
        }
    },
};
</script>
<style lang="scss" scoped>
.yx-btn{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: $btn-bgcolor;
    border: 0.063em solid $btn-bdcolor;
    color: $btn-color;
    -webkit-appearance: none;
    text-align: $btn-text-center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: $btn-font-size;
    font-weight: $btn-font-weight;
    padding: $btn-padding;
    border-radius: $btn-border-radius;
    &:hover,&:focus{
        color: $btn-hover-color;
        border-color: $btn-hover-bgcolor;
        background-color: $btn-hover-bdcolor
    }
}
</style>
