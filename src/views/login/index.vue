<template>
    <div class="login">
        <div class="imgBox">
            <el-image class="logoAndName" :src="logoAndName"></el-image>
            <el-image class="logo" :src="logo"></el-image>
        </div>
        <section class="container">
            <!-- 登录窗口的标题的部分 -->
            <div class="titleBox">
                <div class="title">全世爱健康监护平台</div>
                <div class="subTitle">{{ subTitle.toUpperCase() }}</div>
            </div>
            <div class="content">
                <div class="tabs">
                    <div class="staff tabItem" :class="activeETab === 0 ? 'tabActive' : 'tabNormal'" @click="tabChange(0)">机构员工登录</div>
                    <div class="administrators tabItem" :class="activeETab === 1 ? 'tabActive' : 'tabNormal'"  @click="tabChange(1)">机构管理员登录</div>
                </div>
                <el-form>
                    <el-form-item label="用户名">
                        <el-input prefix-icon="el-icon-user" clearable v-model="account" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input prefix-icon="el-icon-lock" clearable show-password v-model="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                        <el-input v-model="checkCode" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                </el-form>
                <div class="passControl">
                    <el-checkbox v-model="radio">记住密码</el-checkbox>
                    <span style="font-size: 14px;">忘记密码</span>
                </div>
                <el-button @click="login" class="mainbgcolor">登录</el-button>
            </div>
        </section>
        <footer>
            <!-- <span>技术支持：全世爱</span>
            <span>沪ICP（备）xxxxxxx号</span>
            <span>Copyright@全世爱</span> -->
            <span>技术支持：全世爱              沪ICP（备）xxxxxxx号             Copyright@全世爱</span>
        </footer>
    </div>
</template>

<script>
import logo from '@/assets/imgs/login/LOGO@2x.png';
import logoAndName from '@/assets/imgs/login/logo&name.png';
export default {
    name: 'login',
    data() {
        return {
            subTitle: 'Health monitoring platform',
            activeETab: 0, // 0 机构员工登录 1 机构管理员登录
            logo,
            logoAndName,
            radio: '',
            account: '',
            password: '',
            checkCode: ''
        }
    },
    methods: {
        // 切换tab的事件
        tabChange(tabNum) {
            this.activeETab = tabNum;
        },
        login() {
            this.$router.push('/monitorHome/index')
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100vh;
    background: url('../../assets/imgs/login/loginbg.png');
    background-size: 100% 100%;
    position: relative;
    .imgBox{
        position: absolute;
        top: 0;
        left: 0;
        .logoAndName{
            width: 15.94%;
            margin: 8.7% 3.54% 0 6.2%;
        }
        .logo{
            width: 16.2%;
        }
    }
    .container{
        position: absolute;
        top: 10.26%;
        right: 8.13%;
        width: 31.25rem;
        height: auto;
        .titleBox{
            color: #273359;
            .title{
                font-size: 55px;
            }
            .subTitle{
                font-size: 26px;
                letter-spacing: 2.5px;
            }
        }
        .content{
            background-color: rgba(226, 246, 255, .3);
            box-shadow:0px 7px 38px 0px rgba(96,96,96,0.16);
            width: 31.25rem;
            padding: 2.5rem 2.25rem;
            box-sizing: border-box;
            margin-top: 2.8125rem;
            .tabs{
                display: flex;
                justify-content: center;
                align-items: center;
                .tabItem{
                    flex: 1;
                    padding: .75rem 0;
                    text-align: center;
                }
                .tabItem:hover{
                    cursor: pointer;
                }
                .tabActive{
                    background: url('../../assets/imgs/login/矩形 2@2x.png');
                    background-size: cover;
                }
                .tabNormal{
                    background: url('../../assets/imgs/login/矩形 2 拷贝@2x.png');
                    background-size: cover;
                }
            }
        }
        .passControl{
            display: flex;
            justify-content: space-around;
        }
        .mainbgcolor{
            outline: none;
            border: none;
            width: 100%;
            color: #fff;
            font-size: 1.125rem;
            margin-top: 20px;
            :hover{
                cursor: pointer;
            }
        }
    }
    footer{
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        bottom: 3.125rem;
        color: #fff;
        text-align: center;
        width: 100%;
    }
}
</style>