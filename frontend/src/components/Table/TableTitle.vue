<template>
 <div className="tbl-title">
  <div className="row">
      <div>
            <h2> {{title}} </h2>
            <span class="download-info">
                Last file download at: {{last_download}}
            </span>
            <a @click="reDownload"><i class="fa fa-refresh"></i></a>
      </div>
   <div class="hitem right-align">
    <SearchBox @searchName="data => $emit('searchName', data)"/>
   </div>
   <div class="hitem right-align">
    <Button title="Export CSV" @clicked="$emit('exportCsv')" />
   </div>
  </div>
 </div>
</template>

<script>
    import Button from './../common/Button.vue'
    import SearchBox from './../common/SearchBox.vue'
    import { ApiCalls } from './../utils/utilities.js'

    export default {
        name: 'TableTitle',
        props: ['title'],
        data() {
            return {
                'last_download': "Not available"
            };
        },
        methods: {
            reDownload() {
                const res = confirm("Are you sure to re-download the Equity file and update the data store?")
                if (res) ApiCalls('api/download_again', this.emitRefresh);
            },
            emitRefresh(data) {
                this.updateLastUpdateText(data);
                this.$emit("refreshList", "");
            },
            updateLastUpdateText(data) {
                this.last_download = data.last_download;
            }
        },
        components: {
            Button,
            SearchBox
        },
        mounted() {
            ApiCalls('api/last_update', this.updateLastUpdateText);
        }
    }
</script>

<style scoped>
    .hitem {
        margin: 0 10px;
    }
    span.download-info {
        color: white;
        font-size: 12px;
        margin-right: 10px;
    }
    button.refresh-now {
        background: none;
        color: rgb(223, 213, 219);
        border: none;
        padding: 0;
        font-size: 12px;
        cursor: pointer;
        outline: none;
    }
    a{
        cursor: pointer;
    }
    i{
        font-size: 13px;
        color: white;
    }
</style>
