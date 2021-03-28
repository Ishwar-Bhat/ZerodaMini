<template>
  <TableView />
</template>

<script>
import TableView from './components/Table/TableView.vue'

export default {
  name: 'App',
  components: {
    TableView
  }
}
</script>

<style>
*{
	box-sizing: border-box;    
	color: #757575;
	font-family: Roboto,Arial,Helvetica,sans-serif;
    font-size: 16px;
}
body {
	margin: 0;
}

.content{
	width: 100%;
	height: 100%;
	padding: 48px 0px 0px;
}

/* Table with pagination */
.ctbl-layout{
	background: #fff;
	padding: 20px 25px;
	margin: 20px;
	border-radius: 3px;
	box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
/* 1. Title */
.ctbl-layout .tbl-title{
	padding-bottom: 15px;
	background: #1e88e5;
	padding: 16px 30px;
	margin: -20px -25px 10px;
	border-radius: 3px 3px 0 0;
}
.ctbl-layout .tbl-title .row {
	height: 40px;
}
.ctbl-layout .tbl-title .row h2{
	display: inline-block;
}
.ctbl-layout .tbl-title .row .right-align{
	float: right;
}
.ctbl-layout .tbl-title h2{
	margin: 5px 0 0;
	color: #fff;
	font-size: 24px;
}
.table-header-icon {
	display: inline-block;
	height: 40px;
	margin: 0 0 0 10px;
	overflow: hidden;
}
/* End 1 Title */
/* 2. Body */
.table-wrap{
	width: 100%;
	overflow: auto;
}
.table{
	width: 100%;
    margin-bottom: 20px;
	border-spacing: 0;
    border-collapse: collapse;
}
.table tr th{
	text-align: left;
}
.table tr th:last-child{
	text-align: center;
}
.table tr th, .table tr td {
	border-color: #e9e9e9;
	padding: 12px 15px;
	vertical-align: middle;
	border-bottom: 1px solid #ddd;
}
.table-striped tbody tr:nth-of-type(odd) {
	background-color: #fcfcfc;
}
.table-striped.table-hover tbody tr:hover {
	background: #f5f5f5;
}
.table td:last-child i{
	opacity: 0.9;
	font-size: 18px;
	margin: 0 5px;
	cursor: pointer;
}
.table td a.edit i{
	color: #FFC107;
}
.table td a.view i{
	color: #5656d6;
}
.table td a.delete i{
	color: #F44336;
}
/* Table bottom */
.table-bottom{
	margin-top: 10px;
}
.pagination {
	float: right;
	margin: 0 0 5px;
}
.pagination .page-item{
	display: inline;
}
.pagination li{
    width: 30px;
    height: 30px;
}
.pagination li a {
	border: none;
	text-decoration: none;
    font-size: 13px;
    color: #999;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
	padding: 6px 10px;
	cursor: pointer;
}
.pagination li a:hover {
	color: #666;
}	
.pagination li.active a{
	background: #03A9F4;
	color: white;
}
.pagination li.active a:hover {        
	background: #0397d6;
}
.pagination li.disabled a{
	color: #ccc;
	cursor: not-allowed;
}
.hint-text {
	float: left;
	margin-top: 10px;
	font-size: 13px;
}    
/* Custom checkbox */
.custom-checkbox {
	position: relative;
}
.custom-checkbox input[type="checkbox"] {    
	opacity: 0;
	position: absolute;
	margin: 5px 0 0 3px;
	z-index: 9;
}
.custom-checkbox label:before{
	width: 18px;
	height: 18px;
}
.custom-checkbox label:before {
	content: '';
	margin-right: 10px;
	display: inline-block;
	vertical-align: text-top;
	background: white;
	border: 1px solid #bbb;
	border-radius: 2px;
	z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	content: '';
	position: absolute;
	left: 7px;
	top: 3px;
	width: 3px;
	height: 8px;
	border: solid #000;
	border-width: 0 3px 3px 0;
	z-index: 3;
	transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
	border-color: #03A9F4;
	background: #03A9F4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	border-color: #fff;
}
/* Clearfix */
.ctbl-layout .tbl-title .row:before, .ctbl-layout .tbl-title .row:after, .table-bottom:after, .table-bottom:before{
	display: table;
	content: "";
	clear: both;
}
/* End 2 Body */
/* End table pagination */
</style>
