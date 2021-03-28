<template>
<div class="footer__navigation__page-info">
  <div v-if="infoFn">
    {{infoFn(infoParams)}}
  </div>
  <form v-else-if="mode === 'pages'" @submit.prevent>
    <label :for="id" class="page-info__label">
      <span>{{pageText}}</span>
      <input
        :id="id"
        aria-describedby="change-page-hint"
        aria-controls="vgb-table"
        class="footer__navigation__page-info__current-entry"
        type="text"
        @keyup.enter.stop="changePage"
        :value="currentPage"> 
      <span>{{pageInfo}}</span>
    </label>
    <span id="change-page-hint" style="display: none;">
      Type a page number and press Enter to change the page.
    </span>
  </form>
  <div v-else>
    {{recordInfo}}
  </div>
</div>
</template>

<script>
import {
  PAGINATION_MODES,
} from '../utils/constants';

export default {
  name: 'VgtPaginationPageInfo',
  props: {
    currentPage: {
      default: 1,
    },
    lastPage: {
      default: 1,
    },
    totalRecords: {
      default: 0,
    },
    ofText: {
      default: 'of',
      type: String,
    },
    pageText: {
      default: 'page',
      type: String,
    },
    currentPerPage: {},
    mode: {
      default: PAGINATION_MODES.Records,
    },
    infoFn: { default: null },
  },
  data() {
    return {
      id: this.getId(),
    };
  },
  computed: {
    pageInfo() {
      return `${this.ofText} ${this.lastPage}`;
    },
    firstRecordOnPage() {
      return ((this.currentPage - 1) * this.currentPerPage) + 1;
    },
    lastRecordOnPage() {
      return Math.min(this.totalRecords, this.currentPage * this.currentPerPage);
    },
    recordInfo() {
      let first = this.firstRecordOnPage;
      const last = this.lastRecordOnPage;

      if (last === 0) {
        first = 0;
      }

      return `${first} - ${last} ${this.ofText} ${this.totalRecords}`;
    },
    infoParams() {
      return {
        firstRecordOnPage: this.firstRecordOnPage,
        lastRecordOnPage: this.lastRecordOnPage,
        totalRecords: this.totalRecords,
        currentPage: this.currentPage,
        totalPages: this.lastPage,
      };
    },
  },
  methods: {
    getId() {
      return `vgt-page-input-${Math.floor(Math.random() * Date.now())}`;
    },
    changePage(event) {
      const value = parseInt(event.target.value, 10);

      //! invalid number
      if (Number.isNaN(value)
        || value > this.lastPage
        || value < 1) {
        event.target.value = this.currentPage;
        return false;
      }

      //* valid number
      event.target.value = value;
      this.$emit('page-changed', value);
    },
  },
  mounted() {
  },
  components: {
  },
};
</script>
<style scoped>.vgt-wrap__footer .footer__row-count{position:relative;padding-right:3px}.vgt-wrap__footer .footer__row-count__label,.vgt-wrap__footer .footer__row-count__select{display:inline-block;vertical-align:middle}.vgt-wrap__footer .footer__row-count__label{font-size:1.1rem}.vgt-wrap__footer .footer__row-count__select{font-size:1.1rem;background-color:transparent;width:auto;padding:0;border:0;border-radius:0;height:auto;margin-left:8px;color:#606266;font-weight:700;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:15px;padding-left:5px}.vgt-wrap__footer .footer__row-count__select::-ms-expand{display:none}.vgt-wrap__footer .footer__row-count__select:focus{outline:0;border-color:#409eff}.vgt-wrap__footer .footer__row-count::after{content:"";display:block;position:absolute;height:0;width:0;right:6px;top:50%;margin-top:-1px;border-top:6px solid #606266;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:none;pointer-events:none}.vgt-wrap__footer .footer__navigation{font-size:1.1rem}.vgt-wrap__footer .footer__navigation>button:first-of-type{margin-right:16px}.vgt-wrap__footer .footer__navigation__info,.vgt-wrap__footer .footer__navigation__page-btn,.vgt-wrap__footer .footer__navigation__page-info{display:inline-block;vertical-align:middle;color:#909399}.vgt-wrap__footer .footer__navigation__page-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:none;text-decoration:none;color:#606266;font-weight:700;white-space:nowrap;vertical-align:middle}.vgt-wrap__footer .footer__navigation__page-btn:hover{cursor:pointer}.vgt-wrap__footer .footer__navigation__page-btn.disabled,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover{opacity:.5;cursor:not-allowed}.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#606266}.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#606266}.vgt-wrap__footer .footer__navigation__page-btn span{display:inline-block;vertical-align:middle;font-size:1.1rem}.vgt-wrap__footer .footer__navigation__page-btn .chevron{width:24px;height:24px;border-radius:15%;position:relative;margin:0;display:inline-block;vertical-align:middle}.vgt-wrap__footer .footer__navigation__page-btn .chevron:after{content:"";position:absolute;display:block;left:50%;top:50%;margin-top:-6px;border-top:6px solid transparent;border-bottom:6px solid transparent}.vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after{border-right:6px solid #409eff;margin-left:-3px}.vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after{border-left:6px solid #409eff;margin-left:-3px}.vgt-wrap__footer .footer__navigation__info,.vgt-wrap__footer .footer__navigation__page-info{display:inline-block;margin:0 16px}.vgt-wrap__footer .footer__navigation__page-info span{display:inline-block;vertical-align:middle}.vgt-wrap__footer .footer__navigation__page-info__current-entry{width:30px;text-align:center;vertical-align:middle;display:inline-block;margin:0 10px;font-weight:700}@media only screen and (max-width:750px){.vgt-wrap__footer .footer__navigation__info{display:none}.vgt-wrap__footer .footer__navigation__page-btn{margin-left:16px}}.vgt-table.nocturnal{border:1px solid #435169;background-color:#324057}.vgt-table.nocturnal tr.clickable:hover{background-color:#445168}.vgt-table.nocturnal td{border-bottom:1px solid #435169;color:#c7ced8}.vgt-table.nocturnal th.line-numbers,.vgt-table.nocturnal th.vgt-checkbox-col{color:#c7ced8;border-right:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-table.nocturnal thead th{color:#c7ced8;border-bottom:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-table.nocturnal thead th.sortable:before{border-top-color:#3e5170}.vgt-table.nocturnal thead th.sortable:after{border-bottom-color:#3e5170}.vgt-table.nocturnal thead th.sortable.sorting-asc{color:#fff}.vgt-table.nocturnal thead th.sortable.sorting-asc:after{border-bottom-color:#409eff}.vgt-table.nocturnal thead th.sortable.sorting-desc{color:#fff}.vgt-table.nocturnal thead th.sortable.sorting-desc:before{border-top-color:#409eff}.vgt-table.nocturnal.bordered td,.vgt-table.nocturnal.bordered th{border:1px solid #435169}.vgt-table.nocturnal .vgt-input,.vgt-table.nocturnal .vgt-select{color:#c7ced8;background-color:#232d3f;border:1px solid #435169}.vgt-table.nocturnal .vgt-input::placeholder,.vgt-table.nocturnal .vgt-select::placeholder{color:#c7ced8;opacity:.3}.vgt-wrap.nocturnal .vgt-wrap__footer{color:#c7ced8;border:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count{position:relative}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label{color:#8290a7}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select{color:#c7ced8;background:#232d3f;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:15px;padding-left:10px;border-radius:3px;text-align:center}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus{border-color:#409eff}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after{content:"";display:block;position:absolute;height:0;width:0;right:6px;top:50%;margin-top:-1px;border-top:6px solid #c7ced8;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:none;pointer-events:none}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn{color:#c7ced8}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#c7ced8}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#c7ced8}.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info,.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info{color:#8290a7}.vgt-wrap.nocturnal .vgt-global-search{border:1px solid #435169;background:linear-gradient(#2c394f,#2c394f)}.vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass{border:2px solid #3f4c63}.vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before{background:#3f4c63}.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input,.vgt-wrap.nocturnal .vgt-global-search__input .vgt-select{color:#c7ced8;background-color:#232d3f;border:1px solid #435169}.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder,.vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder{color:#c7ced8;opacity:.3}.vgt-table.black-rhino{border:1px solid #435169;background-color:#dfe5ee}.vgt-table.black-rhino tr.clickable:hover{background-color:#fff}.vgt-table.black-rhino td{border-bottom:1px solid #bbc5d6;color:#49515e}.vgt-table.black-rhino th.line-numbers,.vgt-table.black-rhino th.vgt-checkbox-col{color:#dae2f0;border-right:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-table.black-rhino thead th{color:#dae2f0;text-shadow:1px 1px #3e5170;border-bottom:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-table.black-rhino thead th.sortable:before{border-top-color:#607498}.vgt-table.black-rhino thead th.sortable:after{border-bottom-color:#607498}.vgt-table.black-rhino thead th.sortable.sorting-asc{color:#fff}.vgt-table.black-rhino thead th.sortable.sorting-asc:after{border-bottom-color:#409eff}.vgt-table.black-rhino thead th.sortable.sorting-desc:before{border-top-color:#409eff}.vgt-table.black-rhino.bordered td{border:1px solid #bbc5d6}.vgt-table.black-rhino.bordered th{border:1px solid #435169}.vgt-table.black-rhino .vgt-input,.vgt-table.black-rhino .vgt-select{color:#dae2f0;background-color:#34445f;border:1px solid transparent}.vgt-table.black-rhino .vgt-input::placeholder,.vgt-table.black-rhino .vgt-select::placeholder{color:#dae2f0;opacity:.3}.vgt-wrap.black-rhino .vgt-wrap__footer{color:#dae2f0;border:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count{position:relative;padding-right:3px}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label{color:#98a5b9}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select{color:#49515e;background:#34445f;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:15px;padding-left:5px;border-radius:3px}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand{display:none}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus{border-color:#409eff}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after{content:"";display:block;position:absolute;height:0;width:0;right:6px;top:50%;margin-top:-1px;border-top:6px solid #49515e;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:none;pointer-events:none}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn{color:#dae2f0}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#dae2f0}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#dae2f0}.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info,.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info{color:#dae2f0}.vgt-wrap.black-rhino .vgt-global-search{border:1px solid #435169;background:linear-gradient(#4c5c79,#4e5d7c)}.vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass{border:2px solid #3f4c63}.vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before{background:#3f4c63}.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input,.vgt-wrap.black-rhino .vgt-global-search__input .vgt-select{color:#dae2f0;background-color:#44516c;border:1px solid transparent}.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder,.vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder{color:#dae2f0;opacity:.3}.vgt-inner-wrap{border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(50,50,93,.1),0 1px 2px 0 rgba(50,50,93,.06)}.vgt-table.polar-bear{border-spacing:0;border-collapse:separate;font-size:1rem;background-color:#fff;border:1px solid #e3e8ee;border-bottom:none;border-radius:.25rem}.vgt-table.polar-bear td{padding:1em .75em 1em .75em;border-bottom:1px solid #e4ebf3;color:#525f7f}.vgt-table.polar-bear td.vgt-right-align{text-align:right}.vgt-table.polar-bear th.line-numbers,.vgt-table.polar-bear th.vgt-checkbox-col{color:#394567;border-right:1px solid #e3e8ee;background:#f7fafc}.vgt-table.polar-bear thead th{color:#667b94;font-weight:600;border-bottom:1px solid #e3e8ee;background:#f7fafc}.vgt-table.polar-bear thead th.sorting-asc,.vgt-table.polar-bear thead th.sorting-desc{color:#5e72e4}.vgt-table.polar-bear thead th.sorting-desc:before{border-top:5px solid #7485e8}.vgt-table.polar-bear thead th.sorting-asc:after{border-bottom:5px solid #7485e8}.vgt-table.polar-bear thead th .vgt-input,.vgt-table.polar-bear thead th .vgt-select{height:2.75em;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);border:1px solid #e4ebf3}.vgt-table.polar-bear thead th .vgt-input:focus,.vgt-table.polar-bear thead th .vgt-select:focus{outline:0;border-color:#cae0fe}.vgt-table.polar-bear thead tr:first-child th:first-child{border-top-left-radius:.25rem}.vgt-table.polar-bear thead tr:first-child th:last-child{border-top-right-radius:.25rem}.vgt-table.polar-bear.bordered td{border:1px solid #e3e8ee;background:#fff}.vgt-table.polar-bear.bordered th{border:1px solid #e3e8ee}.vgt-wrap.polar-bear .vgt-wrap__footer{color:#394567;border:1px solid #e3e8ee;border-bottom:0;border-top:0;background:linear-gradient(#f7fafc,#f7fafc)}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count{position:relative;padding-right:3px}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label{color:#98a5b9}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select{text-align:center;color:#525f7f;background:#fff;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:5px;padding-right:30px;border-radius:3px;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);border:1px solid #e4ebf3}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand{display:none}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus{border-color:#5e72e4}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after{content:"";display:block;position:absolute;height:0;width:0;right:15px;top:50%;margin-top:-3px;border-top:6px solid #525f7f;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:none;pointer-events:none}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn{color:#394567}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after{border-right-color:#394567}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{border-left-color:#394567}.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info,.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info{color:#394567}.vgt-wrap.polar-bear .vgt-global-search{border:1px solid #e3e8ee;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;background:#f7fafc}.vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass{border:2px solid #dde3ea}.vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before{background:#dde3ea}.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input,.vgt-wrap.polar-bear .vgt-global-search__input .vgt-select{height:2.75em;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);border:1px solid #e4ebf3}.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder,.vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder{color:#394567;opacity:.3}
</style>