<template>
    <div class="search open">
        <input type="text" placeholder="Search" class="search-box" v-model="searchValue"/>
    </div>
</template>

<script>
    export default {
        name: "SearchBox",
        data() {
            return {
                searchValue: ""
            };
        },
        watch: {
            searchValue(newV) {
                this.$emit("searchName", newV);
            } 
        }
    }
</script>

<style scoped>
.search {
    width: 40px;
    height: 40px;
    margin: 0 auto;
	border-radius: 3px;
    background-color: #242628;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
}

.search:before {
    content: '';
    display: block;
    width: 3px;
    height: 100%;
    position: relative;
    background-color: #00fede;
    transition: all 0.5s ease;
}

.search.open {
    width: 200px;
}

.search.open:before {
    height: 20px;
    margin: 10px;
    position: absolute;
}

.search-box {
    width: 100%;
    height: 100%;
    box-shadow: none;
    border: none;
    background: transparent;
    color: #fff;
    padding: 12px 25px 12px 17px;
    font-size: 16px;
}

.search-box:focus {
    outline: none;
}

.search-button {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px 14px;
    font-size: 20px;
    cursor: pointer;
}

.search.open .search-button {
    padding: 8px 20px;
}

.search-button span {
    color: #00fede;
}

.search-button span:before {
    content: "\f002";
    font-family: FontAwesome;
    transition: all 2s ease;
}

.search.open .search-button span:before {
    content: "\f00d";
    font-family: FontAwesome;
    transition: all 2s ;
}

</style>