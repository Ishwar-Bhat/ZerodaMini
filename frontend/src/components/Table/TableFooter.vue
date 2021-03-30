<template>
    <div class="table-bottom">
        <VgtPagination :total="totalrows" @page-changed="pageChanged" @per-page-changed="perPageChanged"/>
    </div>
</template>


<script>
    import VgtPagination from './vue-tab.vue'
    export default {
        name: "TableFooter",
        components: {
            VgtPagination
        },
        props: ['totalrows'],
        methods: {
            pageChanged(inp) {
                this.$emit("pageChanged", inp.currentPage);
            },
            perPageChanged(inp) {
                this.$emit("perPageChanged", inp.currentPerPage);
            }
        }
    }
</script>


<style scoped>
</style>
