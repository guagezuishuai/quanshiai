import cusTomTable from '../components/cusTomTable.vue';
import axios from '../api/index'
const mixins = {
  components: {
    cusTomTable
  },
  data() {
    return {
      count: 0,
      page: 1,
      pageSize: 8,
      tableData: []
    }
  },
  methods: {
    search() {
      this.page = 1;
      this.init();
    },
    handleSizeChange(num) {
      this.page = 1;
      this.pageSize = num;
      this.init()
    },
    handleCurrentChange(num) {
      this.page = num;
      this.init()
    }
  }
}
export default mixins