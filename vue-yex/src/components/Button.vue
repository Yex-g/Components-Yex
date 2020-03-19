<template>
    <button @click="handleClick" class="yx-btn" :class="posClass">
        <!-- <i :class="icon" v-if="icon"></i> -->
        <yx-Icon v-if="icon" :type = "icontype" :className="icon"></yx-Icon>
        <span><slot></slot></span>
    </button>
</template>

<script>
import YxIcon from './Icon'
export default {
    name:'yx-button',
    props: {
        icon:{
            type:String
        },
        iconposition:{
            default:'left',
            type:String
        },
        icontype:{
            default:'',
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
        YxIcon
    },
    data() {
        return {
        };
    },
    watch: {

    },
    computed: {
        posClass(){
            return this.iconposition == 'left'? "yx-btn-left":"yx-btn-right"
        }
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
    display: flex;
    align-items: center;
    line-height: $btn-line-height;
    white-space: nowrap;
    cursor: pointer;
    background-color: $btn-bgcolor;
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
        background-color: $btn-hover-bdcolor;
        .yx-iconfont{
            fill:$btn-hover-color
        }
    }
    &.yx-btn-left .yx-iconfont{
        margin-right:$btn-space;
    }
    &.yx-btn-right .yx-iconfont{
        order: 2;
        margin-left:$btn-space;
    }
}
</style>
