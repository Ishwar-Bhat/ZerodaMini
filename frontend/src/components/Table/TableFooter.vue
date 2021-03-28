<template>
    <div class="table-bottom">
        <VgtPagination :total="totalrows" @page-changed="pageChanged" @per-page-changed="perPageChanged"/>
    </div>
</template>

ref="paginationBottom"
@page-changed="pageChanged"
@per-page-changed="perPageChanged"
:perPage="perPage"
:rtl="rtl"
:total="totalRows || totalRowCount"
:mode="paginationMode"
:nextText="nextText"
:prevText="prevText"
:rowsPerPageText="rowsPerPageText"
:perPageDropdownEnabled="paginationOptions.perPageDropdownEnabled"
:customRowsPerPageDropdown="customRowsPerPageDropdown"
:paginateDropdownAllowAll="paginateDropdownAllowAll"
:ofText="ofText"
:pageText="pageText"
:allText="allText"
:info-fn="paginationInfoFn"


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
