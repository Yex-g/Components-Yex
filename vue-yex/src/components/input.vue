<template>
    <div>
        <label v-if= "label!= '' ">{{label}}</label>
        <input :type="type" v-if="type!='textarea'" />
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
        maxlength:{
            type:Number,
        },
        minlenght:{
            type:Number
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

    },
};
</script>

<style>

</style>
