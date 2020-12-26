<template>
  <div class="imageUpload">
    <!-- 单张图片上传 -->
    <div v-if="isUploadOne" class="uploadOne">
      <el-upload
        action="#"
        class="avatar-uploader"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imgUrl || imageUrl" :src="imgUrl || imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <!-- 多文件上传 -->
    <div v-else class="mutiplayer">
      <el-upload
        action="#"
        list-type="picture-card"
        :before-upload="beforeAvatarUpload"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        multiple
      >
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { upload } from "@/api/common";
export default {
  name: "imageUpload",
  props: {
    // 是否是单文件上传
    isUploadOne: {
      type: Boolean,
      default: true
    },
    // 详情见readme
    businessType: {
      type: Number,
      default: 0
    },
    // 详情见readme
    businessTwoType: {
      type: Number,
      default: 0
    },
    imgUrl: {
      type: [String, Array]
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: '',
      imageUrl: '',
      fileList: [],
    };
  },
  mounted() {
    this.imageUrl = this.imgUrl;
  },
  methods: {
    async beforeAvatarUpload(file) {
      // 预览图片的逻辑
      if(file instanceof Array) {
        this.fileList = file;
        file.forEach(async val => {
          await this.showImage(val);
        })
      } else {
        this.fileList = file;
        this.showImage(file);
      }
    },
    async showImage(file) {
      let data;
      const that = this;
      let reader = new FileReader();
      await new Promise(( resolve, reject ) => {
          reader.onload = (e) => {
              data = e.target.result;
              that.imageUrl = data;
          }
          reader.readAsDataURL(file);
          resolve()
      })
    },
    handlePictureCardPreview() {

    },
    handleRemove() {

    },
    handleAvatarSuccess() {

    },
    fileUpload(id, callback) {
      const path = this.$route.path;
      console.log(path)
      const businessTypeObj = {
        '/sysControl/mechanismAdd': 0
      }
      const businessTwoTypeObj = {
        '/sysControl/mechanismAdd': 0
      }
      let formData = new FormData();
      formData.append('uploadFile', this.fileList);
      formData.append('businessId', id);
      formData.append('businessType', businessTypeObj[path]);
      formData.append('businessTwoType', businessTwoTypeObj[path]);
      formData.append('fileOrder', '0');
      debugger
      upload(formData).then(res => {
        console.log(res);
        callback()
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid #ccc;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>