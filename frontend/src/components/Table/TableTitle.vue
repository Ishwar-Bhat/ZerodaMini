<template>
 <div className="tbl-title">
  <div className="row">
   <h2> {{title}} </h2>
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
    export default {
        name: 'TableTitle',
        props: ['title'],
        components: {
            Button,
            SearchBox
        }
    }
</script>

<style scoped>
    .hitem {
        margin: 0 10px;
    }
</style>
