<!--
 * @Author: your name
 * @Date: 2020-06-06 12:49:54
 * @LastEditTime: 2020-06-06 16:03:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /world-love/src/components/ztree.vue
--> 
<template>
  <div id="ztree"></div>
</template>

<script>
export default {
  name: 'ztree',
  data() {
    return {
      zNodes: [
        {
          name: '节点1',
          id: 1,
          isParent: true
        },
        {
          name: '节点2',
          id: 2,
          isParent: true
        },
        {
          name: '节点1的子节点',
          id: 10,
          pId: 1,
        }
      ],
      setting: {
        // async: {
        //   enable: true,
        //   url: getUrl
        // },
        check: {
          enable: true
        },
        data: {
          simpleData: {
            enable: true
          }
        },
        view: {
          expandSpeed: ""
        },
        callback: {
          // beforeExpand: beforeExpand,
          // onAsyncSuccess: onAsyncSuccess,
          // onAsyncError: onAsyncError
        }
      }
    }
  },
}
</script>