<!--
 * @Author: 程浩
 * @Date: 2020-05-25 09:14:51
 * @LastEditTime: 2020-09-24 16:19:27
 * @LastEditors: sueRimn
 * @Description: 表格抽离的二次封装组件，通过传入配置渲染表单
 * @FilePath: /aaa/src/components/customTable.vue
--> 
<template>
    <div class="table">
        <el-table :data="tableData" border ref="form" @row-dblclick="rowDblclick" @selection-change="handleSelectionChange" style="width: 100%">
            <slot name="selection"></slot>
            <el-table-column v-if="sort" align="center" label="序号" type="index" width="50"></el-table-column>
            <template v-for="(key , index) in tableInfo" >
                <template v-if="key.cusTomContent">
                    <el-table-column 
                        :key="`tabColum${index}`"
                        :prop="key.prop"
                        :label="key.label"
                        :width="key.width"
                        :fixed="key.fixed || false"
                        :show-overflow-tooltip="key.tooltip || false"
                        align="center"
                        resizable
                    >
                        <template  slot-scope="scope">
                            <slot :name="key.prop" :row="scope.row"></slot>
                        </template>
                    </el-table-column>
                    <!-- <slot :name="key.prop"></slot> -->
                </template>
                <template v-else>
                    <el-table-column 
                        :key="`tabColum${index}`"
                        :prop="key.prop"
                        :label="key.label"
                        :width="key.width"
                        :fixed="key.fixed || false"
                        :show-overflow-tooltip="key.tooltip || false"
                        align="center"
                        resizable
                    >
                    </el-table-column>
                </template>
            </template>
            <slot name="operation"></slot>
        </el-table>
        <!-- 分页 -->
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[8, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    name: 'customTable',
    props: {
        // 表格的数据集合
        tableData: {
            type: Array,
            required: true
        },
        // 表格配置的集合
        tableInfo: {
            type: Array,
            required: true
        },
        // 是否展示排序
        sort: {
            type: Boolean,
            default: false
        },
        // 是否展示分页
        isShowPagination: {
            type: Boolean,
            default: true
        },
        pageSize: {
            type: [Number , String]
        },
        page: {
            type: [Number , String]
        },
        count: {
            type: [Number , String]
        },
        // 分页的配置
        paginationOptions: {
            type: Object,
            default: function() {
                // 分页默认的配置
                return {
                    pageSize: [8, 15, 20],
                    layout: 'total, sizes, prev, pager, next, jumper'
                }
            }
        }
    },
    methods: {
        handleSizeChange(num) {
            this.$emit('handleSizeChange', num);
        },
        handleCurrentChange(num) {
            this.$emit('handleCurrentChange',num);
        },
        handleSelectionChange(val) {
            this.$emit('handleSelectionChange',val);
        },
        rowDblclick(row, column, cell, event) {
            this.$emit('rowDblclick', row, column)
        }
    },
    updated() {
        this.$nextTick(() => {
            let tooltip = document.querySelectorAll('.el-tooltip');
            tooltip.forEach(val => {
                val.style.width = '';
            })
        })
    }
}
</script>
<style lang="less">
.el-tooltip__popper.is-dark{
    max-width: 500px !important;
}
th{
    border-right: none!important;
}
td{
    border-right: none!important;
}
</style>