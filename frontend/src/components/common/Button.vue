<template>
    <button class="btn-abort" @click="$emit('clicked')">
        <span>{{title}}</span>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: ['title']
    }
</script>

<style scoped>
/********* Button *********/
button{
	background-color: #fff;
	font-size: 13px;
	border: 2px solid;
	min-width: 50px;
	border-radius: 3px;
	outline: none;
	display: inline-block;
	padding: 6px 12px;
	cursor: pointer;
	box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
}
button span{
	padding: 6px 16px;
    font-size: 14px;
    min-width: 64px;
    line-height: 23px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: bold;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
	color: white;
}
.btn-danger{
	background-color: #f34a16;
	border-color: #FF3D00;
}
.btn-danger:hover{
	background-color: #DD2C00;
	border-color: #DD2C00;
}
.btn-success{
	background-color: #00E676;
	border-color: #00E676;
}
.btn-success:hover{
	background-color: #00C853;
	border-color: #00C853;
}
.btn-upload{
	background-color: #2979FF;
	border-color: #2979FF;
}
.btn-upload:hover{
	background-color: #2962FF;
	border-color: #2962FF;
}
.btn-abort{
	background-color: #FFC400;
	border-color: #FFC400;
}
.btn-abort:hover{
	background-color: #FFAB00;
	border-color: #FFAB00;
}
</style>