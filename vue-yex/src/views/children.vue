<template>
    <div>
        <div :value="value" @input="changeVal">{{value}}</div>
    </div>
</template>

<script>
export default {
    props: ["value"
    ],
    components: {

    },
    data() {
        return {
            model:this.value
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
        changeVal(){
            this.$emit('input', this.model)
        }
    },
};
</script>

<style>

</style>
