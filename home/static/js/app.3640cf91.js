(function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],g=0,d=[];g<i.length;g++)o=i[g],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1402:function(e,t,a){"use strict";a("7a1b")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t,a,r,c,o){var i=Object(n["j"])("TableView");return Object(n["f"])(),Object(n["c"])(i)}var c={className:"ctbl-layout"};function o(e,t,a,r,o,i){var s=Object(n["j"])("TableTitle"),l=Object(n["j"])("TableContent"),u=Object(n["j"])("TableFooter");return Object(n["f"])(),Object(n["c"])("div",c,[Object(n["e"])(s,{title:"Search results",onSearchName:t[1]||(t[1]=function(e){return i.handleSearch(e)}),onExportCsv:i.exportFile},null,8,["onExportCsv"]),Object(n["e"])(l,{dataRows:o.dataRows,linesPerPage:o.linesPerPage,currentPage:o.currentPage},null,8,["dataRows","linesPerPage","currentPage"]),Object(n["e"])(u,{totalrows:i.totalRows,onPageChanged:i.handlePageChange,onPerPageChanged:i.handlePerPageChange},null,8,["totalrows","onPageChanged","onPerPageChanged"])])}var i=a("2909"),s=a("1da1"),l=(a("96cf"),a("d3b7"),a("5319"),a("ac1f"),a("a15b"),a("99af"),a("b64b"),a("d81d"),a("07ac"),Object(n["q"])("data-v-202ae1ec"));Object(n["h"])("data-v-202ae1ec");var u={className:"tbl-title"},g={className:"row"},d={class:"hitem right-align"},b={class:"hitem right-align"};Object(n["g"])();var p=l((function(e,t,a,r,c,o){var i=Object(n["j"])("SearchBox"),s=Object(n["j"])("Button");return Object(n["f"])(),Object(n["c"])("div",u,[Object(n["e"])("div",g,[Object(n["e"])("h2",null,Object(n["k"])(a.title),1),Object(n["e"])("div",d,[Object(n["e"])(i,{onSearchName:t[1]||(t[1]=function(t){return e.$emit("searchName",t)})})]),Object(n["e"])("div",b,[Object(n["e"])(s,{title:"Export CSV",onClicked:t[2]||(t[2]=function(t){return e.$emit("exportCsv")})})])])])})),f=Object(n["q"])("data-v-7f2d0bb0"),h=f((function(e,t,a,r,c,o){return Object(n["f"])(),Object(n["c"])("button",{class:"btn-abort",onClick:t[1]||(t[1]=function(t){return e.$emit("clicked")})},[Object(n["e"])("span",null,Object(n["k"])(a.title),1)])})),P={name:"Button",props:["title"]};a("1402");P.render=h,P.__scopeId="data-v-7f2d0bb0";var O=P,j=Object(n["q"])("data-v-0a28a25c");Object(n["h"])("data-v-0a28a25c");var v={class:"search open"};Object(n["g"])();var m=j((function(e,t,a,r,c,o){return Object(n["f"])(),Object(n["c"])("div",v,[Object(n["n"])(Object(n["e"])("input",{type:"text",placeholder:"Search",class:"search-box","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.searchValue=e})},null,512),[[n["m"],c.searchValue]])])})),w={name:"SearchBox",data:function(){return{searchValue:""}},watch:{searchValue:function(e){this.$emit("searchName",e)}}};a("6f2c");w.render=m,w.__scopeId="data-v-0a28a25c";var x=w,_={name:"TableTitle",props:["title"],components:{Button:O,SearchBox:x}};a("b487");_.render=p,_.__scopeId="data-v-202ae1ec";var C=_,y=Object(n["q"])("data-v-656ad12d");Object(n["h"])("data-v-656ad12d");var R={className:"table-wrap"},k={className:"table table-striped table-hover"},T=Object(n["e"])("thead",null,[Object(n["e"])("tr",null,[Object(n["e"])("th",null,"CODE"),Object(n["e"])("th",null,"NAME"),Object(n["e"])("th",null,"OPEN"),Object(n["e"])("th",null,"HIGH"),Object(n["e"])("th",null,"LOW"),Object(n["e"])("th",null,"CLOSE")])],-1);Object(n["g"])();var S=y((function(e,t,a,r,c,o){return Object(n["f"])(),Object(n["c"])("div",R,[Object(n["e"])("table",k,[T,Object(n["e"])("tbody",null,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(o.currentRows||[],(function(e){return Object(n["f"])(),Object(n["c"])("tr",{key:e.code},[Object(n["e"])("td",null,Object(n["k"])(e.SC_CODE),1),Object(n["e"])("td",null,Object(n["k"])(e.SC_NAME),1),Object(n["e"])("td",null,Object(n["k"])(e.OPEN),1),Object(n["e"])("td",null,Object(n["k"])(e.HIGH),1),Object(n["e"])("td",null,Object(n["k"])(e.LOW),1),Object(n["e"])("td",null,Object(n["k"])(e.CLOSE),1)])})),128))])])])})),I={name:"TableContent",props:["dataRows","linesPerPage","currentPage"],computed:{currentRows:function(){for(var e=[],t=0;t<this.linesPerPage;t++){var a=this.currentPage*this.linesPerPage-this.linesPerPage;if(void 0===this.dataRows[a+t])break;e.push(this.dataRows[a+t])}return e}}};I.render=S,I.__scopeId="data-v-656ad12d";var N=I,A=Object(n["q"])("data-v-9a0e5a38");Object(n["h"])("data-v-9a0e5a38");var E={class:"table-bottom"};Object(n["g"])();var D=A((function(e,t,a,r,c,o){var i=Object(n["j"])("VgtPagination");return Object(n["f"])(),Object(n["c"])("div",E,[Object(n["e"])(i,{total:a.totalrows,onPageChanged:o.pageChanged,onPerPageChanged:o.perPageChanged},null,8,["total","onPageChanged","onPerPageChanged"])])})),V=Object(n["q"])("data-v-1a4646f4");Object(n["h"])("data-v-1a4646f4");var M={class:"vgt-wrap__footer vgt-clearfix"},F={key:0,class:"footer__row-count vgt-pull-left"},$={class:"footer__navigation vgt-pull-right"};Object(n["g"])();var q=V((function(e,t,a,r,c,o){var i=Object(n["j"])("pagination-page-info");return Object(n["f"])(),Object(n["c"])("div",M,[a.perPageDropdownEnabled?(Object(n["f"])(),Object(n["c"])("div",F,[Object(n["e"])("form",null,[Object(n["e"])("label",{for:c.id,class:"footer__row-count__label"},Object(n["k"])(a.rowsPerPageText)+":",9,["for"]),Object(n["n"])(Object(n["e"])("select",{id:c.id,autocomplete:"off",name:"perPageSelect",class:"footer__row-count__select","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.currentPerPage=e}),onChange:t[2]||(t[2]=function(){return o.perPageChanged&&o.perPageChanged.apply(o,arguments)}),"aria-controls":"vgt-table"},[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(c.rowsPerPageOptions,(function(e,t){return Object(n["f"])(),Object(n["c"])("option",{key:t,value:e},Object(n["k"])(e),9,["value"])})),128)),a.paginateDropdownAllowAll?(Object(n["f"])(),Object(n["c"])("option",{key:0,value:a.total},Object(n["k"])(a.allText),9,["value"])):Object(n["d"])("",!0)],40,["id"]),[[n["l"],c.currentPerPage]])])])):Object(n["d"])("",!0),Object(n["e"])("div",$,[Object(n["e"])(i,{onPageChanged:o.changePage,"total-records":a.total,"last-page":o.pagesCount,"current-page":c.currentPage,"current-per-page":c.currentPerPage,"of-text":a.ofText,"page-text":a.pageText,"info-fn":a.infoFn,mode:a.mode},null,8,["onPageChanged","total-records","last-page","current-page","current-per-page","of-text","page-text","info-fn","mode"]),Object(n["e"])("button",{type:"button","aria-controls":"vgt-table",class:["footer__navigation__page-btn",{disabled:!o.prevIsPossible}],onClick:t[3]||(t[3]=Object(n["p"])((function(){return o.previousPage&&o.previousPage.apply(o,arguments)}),["prevent","stop"]))},[Object(n["e"])("span",{"aria-hidden":"true",class:["chevron",{left:!a.rtl,right:a.rtl}]},null,2),Object(n["e"])("span",null,Object(n["k"])(a.prevText),1)],2),Object(n["e"])("button",{type:"button","aria-controls":"vgt-table",class:["footer__navigation__page-btn",{disabled:!o.nextIsPossible}],onClick:t[4]||(t[4]=Object(n["p"])((function(){return o.nextPage&&o.nextPage.apply(o,arguments)}),["prevent","stop"]))},[Object(n["e"])("span",null,Object(n["k"])(a.nextText),1),Object(n["e"])("span",{"aria-hidden":"true",class:["chevron",{right:!a.rtl,left:a.rtl}]},null,2)],2)])])})),B=Object(n["q"])("data-v-8e58098c");Object(n["h"])("data-v-8e58098c");var J={class:"footer__navigation__page-info"},L={key:0},H=Object(n["e"])("span",{id:"change-page-hint",style:{display:"none"}}," Type a page number and press Enter to change the page. ",-1),U={key:2};Object(n["g"])();var G=B((function(e,t,a,r,c,o){return Object(n["f"])(),Object(n["c"])("div",J,[a.infoFn?(Object(n["f"])(),Object(n["c"])("div",L,Object(n["k"])(a.infoFn(o.infoParams)),1)):"pages"===a.mode?(Object(n["f"])(),Object(n["c"])("form",{key:1,onSubmit:t[2]||(t[2]=Object(n["p"])((function(){}),["prevent"]))},[Object(n["e"])("label",{for:c.id,class:"page-info__label"},[Object(n["e"])("span",null,Object(n["k"])(a.pageText),1),Object(n["e"])("input",{id:c.id,"aria-describedby":"change-page-hint","aria-controls":"vgb-table",class:"footer__navigation__page-info__current-entry",type:"text",onKeyup:t[1]||(t[1]=Object(n["o"])(Object(n["p"])((function(){return o.changePage&&o.changePage.apply(o,arguments)}),["stop"]),["enter"])),value:a.currentPage},null,40,["id","value"]),Object(n["e"])("span",null,Object(n["k"])(o.pageInfo),1)],8,["for"]),H],32)):(Object(n["f"])(),Object(n["c"])("div",U,Object(n["k"])(o.recordInfo),1))])})),W=(a("9129"),a("a9e3"),{Pages:"pages",Records:"records"}),K=[10,20,30,40,50],z={name:"VgtPaginationPageInfo",props:{currentPage:{default:1},lastPage:{default:1},totalRecords:{default:0},ofText:{default:"of",type:String},pageText:{default:"page",type:String},currentPerPage:{},mode:{default:W.Records},infoFn:{default:null}},data:function(){return{id:this.getId()}},computed:{pageInfo:function(){return"".concat(this.ofText," ").concat(this.lastPage)},firstRecordOnPage:function(){return(this.currentPage-1)*this.currentPerPage+1},lastRecordOnPage:function(){return Math.min(this.totalRecords,this.currentPage*this.currentPerPage)},recordInfo:function(){var e=this.firstRecordOnPage,t=this.lastRecordOnPage;return 0===t&&(e=0),"".concat(e," - ").concat(t," ").concat(this.ofText," ").concat(this.totalRecords)},infoParams:function(){return{firstRecordOnPage:this.firstRecordOnPage,lastRecordOnPage:this.lastRecordOnPage,totalRecords:this.totalRecords,currentPage:this.currentPage,totalPages:this.lastPage}}},methods:{getId:function(){return"vgt-page-input-".concat(Math.floor(Math.random()*Date.now()))},changePage:function(e){var t=parseInt(e.target.value,10);//! invalid number
if(Number.isNaN(t)||t>this.lastPage||t<1)return e.target.value=this.currentPage,!1;e.target.value=t,this.$emit("page-changed",t)}},mounted:function(){},components:{}};a("f450");z.render=G,z.__scopeId="data-v-8e58098c";var Q=z,X={name:"VgtPagination",props:{styleClass:{default:"table table-bordered"},total:{default:null},perPage:{},rtl:{default:!1},perPageDropdownEnabled:{default:!0},customRowsPerPageDropdown:{default:function(){return[]}},paginateDropdownAllowAll:{default:!0},mode:{default:W.Pages},nextText:{default:"Next"},prevText:{default:"Prev"},rowsPerPageText:{default:"Rows per page"},ofText:{default:"of"},pageText:{default:"page"},allText:{default:"All"},infoFn:{default:null}},data:function(){return{id:this.getId(),currentPage:1,prevPage:0,currentPerPage:10,rowsPerPageOptions:[]}},watch:{perPage:{handler:function(e,t){this.handlePerPage(),this.perPageChanged(t)},immediate:!0},customRowsPerPageDropdown:function(){this.handlePerPage()},total:{handler:function(e){-1===this.rowsPerPageOptions.indexOf(this.currentPerPage)&&(this.currentPerPage=e)}}},computed:{pagesCount:function(){var e=Math.floor(this.total/this.currentPerPage),t=this.total%this.currentPerPage;return 0===t?e:e+1},nextIsPossible:function(){return this.currentPage<this.pagesCount},prevIsPossible:function(){return this.currentPage>1}},methods:{getId:function(){return"vgt-select-rpp-".concat(Math.floor(Math.random()*Date.now()))},changePage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e>0&&this.total>this.currentPerPage*(e-1)&&(this.prevPage=this.currentPage,this.currentPage=e,t&&this.pageChanged())},nextPage:function(){this.nextIsPossible&&(this.prevPage=this.currentPage,++this.currentPage,this.pageChanged())},previousPage:function(){this.prevIsPossible&&(this.prevPage=this.currentPage,--this.currentPage,this.pageChanged())},pageChanged:function(){this.$emit("page-changed",{currentPage:this.currentPage,prevPage:this.prevPage})},perPageChanged:function(e){e&&this.$emit("per-page-changed",{currentPerPage:this.currentPerPage}),this.changePage(1,!0)},handlePerPage:function(){if(null!==this.customRowsPerPageDropdown&&Array.isArray(this.customRowsPerPageDropdown)&&0!==this.customRowsPerPageDropdown.length?this.rowsPerPageOptions=JSON.parse(JSON.stringify(this.customRowsPerPageDropdown)):this.rowsPerPageOptions=JSON.parse(JSON.stringify(K)),this.perPage){this.currentPerPage=this.perPage;for(var e=!1,t=0;t<this.rowsPerPageOptions.length;t++)this.rowsPerPageOptions[t]===this.perPage&&(e=!0);e||-1===this.perPage||this.rowsPerPageOptions.unshift(this.perPage)}else this.currentPerPage=10}},mounted:function(){},components:{"pagination-page-info":Q}},Y=(a("7056"),a("6afe")),Z=a.n(Y);X.render=q,X.__scopeId="data-v-1a4646f4","function"===typeof Z.a&&Z()(X);var ee=X,te={name:"TableFooter",components:{VgtPagination:ee},props:["totalrows"],methods:{pageChanged:function(e){this.$emit("pageChanged",e.currentPage)},perPageChanged:function(e){this.$emit("perPageChanged",e.currentPerPage)}}};te.render=D,te.__scopeId="data-v-9a0e5a38";var ae=te,ne={name:"TableView",components:{TableTitle:C,TableContent:N,TableFooter:ae},methods:{handlePageChange:function(e){this.currentPage=e},handlePerPageChange:function(e){this.linesPerPage=e},handleSearch:function(e){this.dataRows=this.callSearchAPI(e)},callSearchAPI:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://127.0.0.1:8000/api/search?q=".concat(e.toLowerCase()));case 2:if(n=a.sent,200!==n.status){a.next=10;break}return a.next=6,n.json();case 6:r=a.sent,t.dataRows=r,a.next=11;break;case 10:t.dataRows=[];case 11:case"end":return a.stop()}}),a)})))()},exportFile:function(){var e="data:text/csv;charset=utf-8,";e+=[Object.keys(this.dataRows[0]).join(",")].concat(Object(i["a"])(this.dataRows.map((function(e){return Object.values(e).join(",")})))).join("\n").replace(/(^\[)|(\]$)/gm,"");var t=encodeURI(e),a=document.createElement("a");a.setAttribute("href",t),a.setAttribute("download","export.csv"),a.click()}},data:function(){return{dataRows:[],linesPerPage:10,currentPage:1}},computed:{totalRows:function(){return this.dataRows.length}},mounted:function(){this.callSearchAPI("")}};ne.render=o;var re=ne,ce={name:"App",components:{TableView:re}};a("645f");ce.render=r;var oe=ce;Object(n["b"])(oe).mount("#app")},6329:function(e,t,a){},"645f":function(e,t,a){"use strict";a("bb8d")},"6afe":function(e,t){},"6f2c":function(e,t,a){"use strict";a("7fdc")},7056:function(e,t,a){"use strict";a("6329")},"7a1b":function(e,t,a){},"7fdc":function(e,t,a){},b487:function(e,t,a){"use strict";a("c1b5")},bb8d:function(e,t,a){},c1b5:function(e,t,a){},dcbc:function(e,t,a){},f450:function(e,t,a){"use strict";a("dcbc")}});
//# sourceMappingURL=app.3640cf91.js.map