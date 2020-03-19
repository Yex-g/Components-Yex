<template>
    <a class="yx-link" :class="posClass">
        <yx-Icon v-if="icon" :type = "icontype" className="icon-search"></yx-Icon>
        <span><slot></slot></span>
    </a>
</template>

<script>
import YxIcon from './Icon'
export default {
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
        disabled:{
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
            if(this.iconposition =='left' ){
                return "yx-link-left"
            }
            if(this.iconposition =='right' ){
                return "yx-link-right"
            }
            if(this.iconposition =='top' ){
                return "yx-link-top"
            }
            if(this.iconposition =='bottom' ){
                return "yx-link-bottom"
            }
            return ""
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
.yx-link{
    display: flex;
    line-height: $link-line-height;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: $link-font-size;
    font-weight: $link-font-weight;
    color:$link-color;
    border:$link-bdwidth $link-bdstyle $link-bdcolor;
    background-color: $link-bgcolor;
    &:hover{
        color:$link-hover-color;
        border:$link-hover-bdwidth $link-bdstyle $link-hover-bdcolor;
        background-color: $link-hover-bgcolor;
    }
    &.yx-link-left .yx-iconfont{
        margin-right: $link-space;
    }
    &.yx-link-right .yx-iconfont{
        order: 2;
        margin-left: $link-space;
    }
    &.yx-link-top{
        flex-direction: column;
        .yx-iconfont{
            margin-bottom: $link-space;
        }
    }
     &.yx-link-bottom{
        flex-direction: column;
        .yx-iconfont{
            order:2;
            margin-top: $link-space;
        }
    }
}
</style>
