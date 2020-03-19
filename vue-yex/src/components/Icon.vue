<template>
    <svg class="yx-iconfont" v-if=" type == 'svg'">
        <use v-bind:xlink:href="'#'+className"></use>
    </svg>
    <i v-else class="yx-iconfont iconfont" :class= 'className'></i>
</template>

<script>
export default {
    name:'yx-icon',
    props: {
        type:{
            default:'icon',
            type:String
        },
        className:{
            default:'',
            type:String
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

    },
};
</script>

<style lang="scss" scoped>
.yx-iconfont{
    font-size:$icon-font-size;
    width:$icon-font-size ;
    height: $icon-font-size;
}
</style>
