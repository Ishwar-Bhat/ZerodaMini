<template>
    <div className="table-wrap">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>CODE</th>
                    <th>NAME</th>
                    <th>OPEN</th>
                    <th>HIGH</th>
                    <th>LOW</th>
                    <th>CLOSE</th>
                </tr>
            </thead>
            <tbody v-if="currentRows.length !== 0">
                <tr v-for="i in currentRows || []" :key="i.code">
                    <td>{{i.SC_CODE}}</td>
                    <td>{{i.SC_NAME}}</td>
                    <td>{{i.OPEN}}</td>
                    <td>{{i.HIGH}}</td>
                    <td>{{i.LOW}}</td>
                    <td>{{i.CLOSE}}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="6">No Data found</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TableContent",
        props: ["dataRows", "linesPerPage", "currentPage"],
        computed: {
            currentRows: function() {
                const cr = [];
                for (let i=0; i<this.linesPerPage; i++) {
                    let a = (this.currentPage * this.linesPerPage) - this.linesPerPage;
                    if (this.dataRows[a + i] === undefined) break;
                    cr.push(this.dataRows[a + i]);
                }
                return cr;
            }
        }
    }
</script>


<style scoped>
</style>
