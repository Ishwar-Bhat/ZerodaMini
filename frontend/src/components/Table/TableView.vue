<template>
    <div className="ctbl-layout">
        <TableTitle title="Search results" @searchName="sk => handleSearch(sk)" @exportCsv="exportFile"/>
        <TableContent :dataRows="dataRows" :linesPerPage="linesPerPage" :currentPage="currentPage"/>
        <TableFooter :totalrows="totalRows" @pageChanged="handlePageChange" @perPageChanged="handlePerPageChange"/>
    </div>
</template>

<script>
import TableTitle from './TableTitle.vue'
import TableContent from './TableContent.vue'
import TableFooter from './TableFooter.vue'

export default {
    name: 'TableView',
    components: {
        TableTitle,
        TableContent,
        TableFooter
    },
    methods: {
        handlePageChange(currentPage) {
            this.currentPage = currentPage;
        },
        handlePerPageChange(currentPerPage) {
            this.linesPerPage = currentPerPage;
        },
        handleSearch(searchKey) {
            this.callSearchAPI(searchKey);
        },
        async callSearchAPI(searchKey) {
            const res= await fetch(`http://127.0.0.1:8000/api/search?q=${searchKey.toLowerCase()}`)
            if (res.status === 200) {
                const data = await res.json();
                this.dataRows = data;
            } else {
                this.dataRows = [];
            }
        },
        exportFile() {
            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += [
                Object.keys(this.dataRows[0]).join(","),
                ...this.dataRows.map(item => Object.values(item).join(","))
            ]
                .join("\n")
                .replace(/(^\[)|(\]$)/gm, "");

            const data = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", data);
            link.setAttribute("download", "export.csv");
            link.click();
        }
    },
    data() {
        return {
            dataRows: [],
            linesPerPage: 10,
            currentPage: 1
        };
    },
    computed: {
        totalRows() {
            return this.dataRows.length;
        }
    },
    mounted() {
        this.callSearchAPI("");
    }
}
</script>