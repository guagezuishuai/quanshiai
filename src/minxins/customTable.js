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
      pageSize: 10,
      initUrl: '',
    }
  },
  methods: {
    async init(params) {
      const obj = {
        page: this.page,
        pageSize: this.pageSize
      }
      params && Object.assign(obj, params)
      const res = await axios.post(this.initUrl, obj);
      return res;
    },
    handleSizeChange(num) {
      this.page = 1;
      this.pageSize = num;
      this.init()
    },
    handleCurrentChange(num) {
      this.page = num;
      this.init()
    },
    see(rowInfo) {

    },
    edit(rowInfo) {

    },
    refresh(rowInfo) {

    },
    del(rowInfo) {

    },
    // 绑定设备
    binding(rowInfo, path) {
      this.$router.push({
        path
      })
    },
    unbundling(rowInfo) {

    },
    activation(rowInfo) {

    },
    thaw(rowInfo) {

    }
  }
}
export default mixins