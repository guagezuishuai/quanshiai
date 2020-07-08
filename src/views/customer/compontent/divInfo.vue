<template>
  <el-form label-width="110px" :model="divInfo" :rules="disRules" inline>
          <tableGroup :groupInfo="disgroupInfo[0]">
            <!-- 身体参数 -->
            <div class="rowContent" slot="身体参数">
              <el-form-item label="身高" prop="height" class="item">
                <el-input size="small"  v-model="divInfo.height">
                  <template slot="append"> CM </template>
                </el-input>
              </el-form-item>
              <el-form-item label="体重" peop="" class="item">
                <el-input size="small" v-model="divInfo.weight">
                  <template slot="append"> KG </template>
                </el-input>
              </el-form-item>
              <el-form-item label="腰围" prop="waist" class="item">
                <el-input size="small" v-model="divInfo.waist">
                  <template slot="append"> CM </template>
                </el-input>
              </el-form-item>
              <div slot="right">
                <el-button size="small">计算发病危险</el-button>
              </div>
            </div>
            <!-- 身体指数/发病危险 -->
            <div class="rowContent" style="display: flex;" slot="身体指数/发病危险">
              <div style="display: flex;">
                <el-form-item label="BMI指数" prop="BMI" class="item">
                  <el-input size="small"  v-model="divInfo.height"></el-input>
                </el-form-item>
                <el-form-item label="肥胖程度" peop="weightState" class="item">
                  <el-input size="small" v-model="divInfo.weight">
                    <template slot="append"> KG </template>
                  </el-input>
                </el-form-item>
                <el-form-item label="发病危险" prop="disDenger" class="item">
                  <el-input size="small" v-model="divInfo.waist">
                    <template slot="append"> CM </template>
                  </el-input>
                </el-form-item>
              </div>
              <div slot="right" style="flex: 1;">
                <BMI></BMI>
              </div>
            </div>
          </tableGroup>
          <tableGroup :groupInfo="disgroupInfo[1]">
            <div class="rowContent" slot="血型">
              <el-form-item label="血型" prop="BMI" class="item">
                <el-select size="small" v-model="divInfo.bloodType">
                    <el-option value="0" label="A型"></el-option>
                    <el-option value="1" label="B型"></el-option>
                    <el-option value="2" label="O型"></el-option>
                    <el-option value="3" label="AB型"></el-option>
                    <el-option value="4" label="不详"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="RH阴性" prop="BMI" class="item">
                <el-select size="small" v-model="divInfo.RH">
                    <el-option value="0" label="是"></el-option>
                    <el-option value="1" label="否"></el-option>
                    <el-option value="2" label="不详"></el-option>
                  </el-select>
              </el-form-item>
            </div>
          </tableGroup>
          <tableGroup :groupInfo="disgroupInfo[2]">
            <div class="rowContent" slot="药物过敏史">
              <!-- <el-form-item> -->
                <div style="display: flex; align-items: center;">
                  <el-checkbox-group v-model="divInfo.allergy">
                    <el-checkbox value="0" label="无"></el-checkbox>
                    <el-checkbox value="1" label="青霉素"></el-checkbox>
                    <el-checkbox value="2" label="磺胺"></el-checkbox>
                    <el-checkbox value="3" label="链霉素"></el-checkbox>
                    <el-checkbox value="4" label="其他"></el-checkbox>
                  </el-checkbox-group>
                  <el-input style="flex: 1; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.allergyDetail"></el-input>
                </div>
              <!-- </el-form-item> -->
            </div>
            <div class="rowContent" slot="疾病">
                <div class="checkBoxItem">
                  <div class="left">
                    <el-checkbox-group class="checkbox-group" v-model="divInfo.disObj.left.val">
                      <div class="checkBox">
                        <el-checkbox value="0" label="无"></el-checkbox>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="1" label="高血压"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.left.time[0]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="2" label="冠心病"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.left.time[1]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="3" label="脑卒中"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.left.time[2]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="4" label="重性精神疾病"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.left.time[3]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="5" label="肝炎"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.left.time[4]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                    </el-checkbox-group>
                  </div>
                  <div class="right">
                    <el-checkbox-group class="checkbox-group" v-model="divInfo.disObj.right.val">
                      <div class="checkBox">
                        <el-checkbox value="0" label="无"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.right.time[0]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="1" label="高血压"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.right.time[1]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="2" label="冠心病"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.right.time[2]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="3" label="脑卒中"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.right.time[3]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="4" label="重性精神疾病"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.right.time[4]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="checkBox">
                        <el-checkbox value="5" label="肝炎"></el-checkbox>
                        <div class="time">
                          <el-date-picker
                            v-model="divInfo.disObj.right.time[5]"
                            type="date"
                            size="small"
                            placeholder="选择确诊日期">
                          </el-date-picker>
                        </div>
                      </div>
                    </el-checkbox-group>
                  </div>
                </div>
            </div>
            <div class="rowContent" slot="手术">
              <div class="operationItem" v-for="(key, index) in divInfo.operationList" :key="`operationList${index}`">
                <el-form-item label="手术名称">
                  <el-input v-model="key.name"></el-input>
                </el-form-item>
                <el-form-item label="执行时间">
                  <el-date-picker
                    v-model="key.startTime"
                    type="date"
                    size="small">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="痊愈时间">
                  <el-date-picker
                    v-model="key.goodTime"
                    type="date"
                    size="small">
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="addOperation">
                <el-button class="mainbgcolor" @click="divInfo.operationList.push({name: '',startTime: '',goodTime: ''})" size="small" icon="el-icon-circle-plus-outline">新增手术</el-button>
              </div>
            </div>
            <div class="rowContent" slot="外伤">
              <div class="operationItem" v-for="(key, index) in divInfo.trauma" :key="`operationList${index}`">
                <el-form-item label="手术名称">
                  <el-input v-model="key.name"></el-input>
                </el-form-item>
                <el-form-item label="执行时间">
                  <el-date-picker
                    v-model="key.startTime"
                    type="date"
                    size="small">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="痊愈时间">
                  <el-date-picker
                    v-model="key.goodTime"
                    type="date"
                    size="small">
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="addOperation">
                <el-button class="mainbgcolor" @click="divInfo.operationList.push({name: '',startTime: '',goodTime: ''})" size="small" icon="el-icon-circle-plus-outline">新增外伤</el-button>
              </div>
            </div>
            <div class="rowContent" slot="输血">
              <div class="operationItem" v-for="(key, index) in divInfo.blood" :key="`operationList${index}`">
                <el-form-item label="手术名称">
                  <el-input v-model="key.name"></el-input>
                </el-form-item>
                <el-form-item label="执行时间">
                  <el-date-picker
                    v-model="key.startTime"
                    type="date"
                    size="small">
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="addOperation">
                <el-button class="mainbgcolor" @click="divInfo.operationList.push({name: '',startTime: ''})" size="small" icon="el-icon-circle-plus-outline">新增输血</el-button>
              </div>
            </div>
            <div class="rowContent" slot="父亲">
              <div style="display: flex; align-items: center;">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.prente.value">
                  <template v-for="(key, index) in divInfo.prente.options">
                    <el-checkbox :key="`prente${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.prente.detail"></el-input>
                </el-checkbox-group>
              </div>
            </div>
            <div class="rowContent" slot="母亲">
              <div style="display: flex; align-items: center;">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.mother.value">
                  <template v-for="(key, index) in divInfo.mother.options">
                    <el-checkbox :key="`mother${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.mother.detail"></el-input>
                </el-checkbox-group>
              </div>
            </div>
            <div class="rowContent" slot="兄弟姐妹">
              <div style="display: flex; align-items: center;">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.silibing.value">
                  <template v-for="(key, index) in divInfo.silibing.options">
                    <el-checkbox :key="`silibing${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.silibing.detail"></el-input>
                </el-checkbox-group>
              </div>
            </div>
            <div class="rowContent" slot="子女">
              <div style="display: flex; align-items: center;">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.child.value">
                  <template v-for="(key, index) in divInfo.child.options">
                    <el-checkbox :key="`child${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.child.detail"></el-input>
                </el-checkbox-group>
              </div>
            </div>
            <div class="rowContent" slot="遗传病史">
              <el-radio-group v-model="divInfo.inheritance.value">
                <el-form-item>
                  <el-radio :label="0">无</el-radio>
                </el-form-item>
                <el-form-item>
                  <el-radio :label="1">有：</el-radio>
                </el-form-item>
                <el-form-item label="疾病名称">
                  <el-input v-model="divInfo.inheritance.detail" size="small"></el-input>
                </el-form-item>
              </el-radio-group>
            </div>
            <div class="rowContent" slot="残疾情况">
              <div style="display: flex; align-items: center;">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.disability.value">
                  <template v-for="(key, index) in divInfo.disability.options">
                    <el-checkbox :key="`disability${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.disability.detail"></el-input>
                </el-checkbox-group>
              </div>
            </div>
          </tableGroup>
          <tableGroup :groupInfo="disgroupInfo[3]">
            <div class="rowContent" slot="吸烟史">
              <el-form-item label="是否吸烟" class="item">
                <el-select size="small" v-model="divInfo.isSmoke.value">
                  <el-option v-for="(key, index) in divInfo.isSmoke.options" :label="key.lable" :value="key.value" :key="`isSmoke${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开始吸烟年龄" class="item">
                <el-input size="small" v-model="divInfo.smokeAge">
                  <template slot="append">岁</template>
                </el-input>
              </el-form-item>
              <el-form-item label="日吸烟量" class="item">
                <el-select size="small" v-model="divInfo.smokeNum.value">
                  <el-option v-for="(key, index) in divInfo.smokeNum.options" :label="key.label" :value="key.value" :key="`smokeNum${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开始戒烟年龄" class="item">
                <el-input size="small" v-model="divInfo.quitSmokeAge">
                  <template slot="append">岁</template>
                </el-input>
              </el-form-item>
              <el-form-item label="戒烟前日吸烟量" class="item">
                <el-select size="small" v-model="divInfo.smokeNum.value">
                  <el-option v-for="(key, index) in divInfo.smokeNum.options" :label="key.label" :value="key.value" :key="`smokeNum${index}`"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="rowContent" slot="饮酒史">
              <el-form-item label="是否饮酒" class="item">
                <el-select size="small" v-model="divInfo.isDrink.value">
                  <el-option v-for="(key, index) in divInfo.isDrink.options" :label="key.lable" :value="key.value" :key="`isDrink${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开始饮酒年龄" class="item">
                <el-input size="small" v-model="divInfo.drinkAge">
                  <template slot="append">岁</template>
                </el-input>
              </el-form-item>
              <el-form-item label="开始戒酒年龄" class="item">
                <el-input size="small" v-model="divInfo.quitDrinkAge">
                  <template slot="append">岁</template>
                </el-input>
              </el-form-item>
              <el-form-item label="饮酒频次" class="item">
                <el-select size="small" v-model="divInfo.drinkNum.value">
                  <el-option v-for="(key, index) in divInfo.drinkNum.options" :label="key.lable" :value="key.value" :key="`drinkNum${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="常饮酒类" class="item">
                <el-select size="small" v-model="divInfo.drinkList.value">
                  <el-option v-for="(key, index) in divInfo.drinkList.options" :label="key.lable" :value="key.value" :key="`drinkList${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="饮酒量" class="item">
                <el-input size="small" v-model="divInfo.drinkMl">
                  <template slot="append">两/次</template>
                </el-input>
              </el-form-item>
              <el-form-item label="戒前饮酒频次" class="item">
                <el-select size="small" v-model="divInfo.quitDrinkNum.value">
                  <el-option v-for="(key, index) in divInfo.quitDrinkNum.options" :label="key.lable" :value="key.value" :key="`quitDrinkNum${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="戒前常饮酒类" class="item">
                <el-select size="small" v-model="divInfo.quitDrinkList.value">
                  <el-option v-for="(key, index) in divInfo.quitDrinkList.options" :label="key.lable" :value="key.value" :key="`quitDrinkList${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="戒前饮酒量" class="item">
                <el-input size="small" v-model="divInfo.quitDrinkMl">
                  <template slot="append">两/次</template>
                </el-input>
              </el-form-item>
            </div>
            <div class="rowContent" slot="饮食习惯">
              <div style="display: flex; align-items: center;">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.diet.value">
                  <template v-for="(key, index) in divInfo.diet.options">
                    <el-checkbox :key="`diet${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.diet.detail"></el-input>
                </el-checkbox-group>
              </div>
            </div>
            <div class="rowContent" slot="口腔卫生">
              <el-form-item label="每日刷牙频次" class="item">
                <el-select size="small" v-model="divInfo.brush.value">
                  <el-option v-for="(key, index) in divInfo.brush.options" :label="key.label" :value="key.value" :key="`brush${index}`"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="rowContent" slot="体育锻炼">
              <el-form-item label="煅炼频次" class="item">
                <el-select size="small" v-model="divInfo.motionTiming.value">
                  <el-option v-for="(key, index) in divInfo.motionTiming.options" :label="key.label" :value="key.value" :key="`motionTiming${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="每天运动时间" class="item">
                <el-select size="small" v-model="divInfo.brush.value">
                  <el-option v-for="(key, index) in divInfo.brush.options" :label="key.label" :value="key.value" :key="`brush${index}`"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开始运动年龄" class="item">
                <el-input size="small" v-model="divInfo.motionAge">
                  <template slot="append">岁</template>
                </el-input>
              </el-form-item>
              <el-form-item label="运动类型：" class="item">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.motionType.value">
                  <template v-for="(key, index) in divInfo.motionType.options">
                    <el-checkbox :key="`motionType${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.diet.detail"></el-input>
                </el-checkbox-group>
              </el-form-item>
            </div>
            <div class="rowContent" slot="休闲爱好">
              <el-form-item class="item">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.relaxed.value">
                  <template v-for="(key, index) in divInfo.relaxed.options">
                    <el-checkbox :key="`relaxed${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.diet.detail"></el-input>
                </el-checkbox-group>
              </el-form-item>
            </div>
            <div class="rowContent" slot="特长">
              <el-form-item label="特长" style="width: 100%;" class="item">
                <el-input size="small" placeholder="请填写特长名称" v-model="divInfo.specialty"></el-input>
              </el-form-item>
            </div>
            <div class="rowContent" slot="主要负性、生活事件">
              <el-form-item class="item">
                <el-checkbox-group style="line-height: 25px;" v-model="divInfo.negative.value">
                  <template v-for="(key, index) in divInfo.negative.options">
                    <el-checkbox :key="`negative${index}`" :value="key.value" :label="key.lable"></el-checkbox>
                  </template>
                  <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="divInfo.diet.detail"></el-input>
                </el-checkbox-group>
              </el-form-item>
            </div>
          </tableGroup>
        </el-form>
</template>

<script>
import tableGroup from '@/components/tableGroup';
import BMI from '@/components/BMI.vue';
export default {
  components: {
    tableGroup,
    BMI
  },
  data() {
    return {
      // 新增病史习惯
      disgroupInfo: [
        {
          title: '身体指数',
          info: ['身体参数', '身体指数/发病危险']
        },
        {
          title: '血型',
          info: ['血型']
        },
        {
          title: '病史',
          info: ['药物过敏史', {title: '既往病史', subInfo: ['疾病', '手术', '外伤', '输血']}, {title: '家族史', subInfo: ['父亲', '母亲', '兄弟姐妹', '子女'] }, '遗传病史', '残疾情况']
        },
        {
          title: '生活习惯',
          info: ['吸烟史', '饮酒史', '饮食习惯', '口腔卫生', '体育锻炼', '休闲爱好', '特长', '主要负性、生活事件']
        }
      ],
      divInfo: {
        height: '',
        weight: '',
        waist: '',
        bloodType: '',
        RH: '',
        allergy: [],
        allergyDetail: '',
        disObj: {
          left: {
            val: [],
            time: ['', '', '', '', '']
          },
          right: {
            val: [],
            time: ['', '', '', '', '', '']
          }
        },
        operationList: [
          {
            name: '',
            startTime: '',
            goodTime: ''
          }
        ],
        trauma: [
          {
            name: '',
            startTime: '',
            goodTime: ''
          }
        ],
        blood: [
          {
            name: '',
            startTime: ''
          }
        ],
        prente: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '高血压'
            },
            {
              value: 2,
              lable: '糖尿病'
            },
            {
              value: 3,
              lable: '冠心病'
            },
            {
              value: 4,
              lable: '恶性肿瘤'
            },
            {
              value: 5,
              lable: '慢性阻塞性肺疾病'
            },
            {
              value: 6,
              lable: '脑卒中'
            },
            {
              value: 7,
              lable: '重性精神疾病'
            },
            {
              value: 8,
              lable: '结核病'
            },
            {
              value: 9,
              lable: '肝炎'
            },
            {
              value: 10,
              lable: '先天畸形'
            },
            {
              value: 11,
              lable: '其他'
            }
          ]
        },
        mother: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '高血压'
            },
            {
              value: 2,
              lable: '糖尿病'
            },
            {
              value: 3,
              lable: '冠心病'
            },
            {
              value: 4,
              lable: '恶性肿瘤'
            },
            {
              value: 5,
              lable: '慢性阻塞性肺疾病'
            },
            {
              value: 6,
              lable: '脑卒中'
            },
            {
              value: 7,
              lable: '重性精神疾病'
            },
            {
              value: 8,
              lable: '结核病'
            },
            {
              value: 9,
              lable: '肝炎'
            },
            {
              value: 10,
              lable: '先天畸形'
            },
            {
              value: 11,
              lable: '其他'
            }
          ]
        },
        silibing: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '高血压'
            },
            {
              value: 2,
              lable: '糖尿病'
            },
            {
              value: 3,
              lable: '冠心病'
            },
            {
              value: 4,
              lable: '恶性肿瘤'
            },
            {
              value: 5,
              lable: '慢性阻塞性肺疾病'
            },
            {
              value: 6,
              lable: '脑卒中'
            },
            {
              value: 7,
              lable: '重性精神疾病'
            },
            {
              value: 8,
              lable: '结核病'
            },
            {
              value: 9,
              lable: '肝炎'
            },
            {
              value: 10,
              lable: '先天畸形'
            },
            {
              value: 11,
              lable: '其他'
            }
          ]
        },
        child: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '高血压'
            },
            {
              value: 2,
              lable: '糖尿病'
            },
            {
              value: 3,
              lable: '冠心病'
            },
            {
              value: 4,
              lable: '恶性肿瘤'
            },
            {
              value: 5,
              lable: '慢性阻塞性肺疾病'
            },
            {
              value: 6,
              lable: '脑卒中'
            },
            {
              value: 7,
              lable: '重性精神疾病'
            },
            {
              value: 8,
              lable: '结核病'
            },
            {
              value: 9,
              lable: '肝炎'
            },
            {
              value: 10,
              lable: '先天畸形'
            },
            {
              value: 11,
              lable: '其他'
            }
          ]
        },
        inheritance: {
          value: '',
          detail: ''
        },
        disability: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '视力残疾'
            },
            {
              value: 2,
              lable: '听力残疾'
            },
            {
              value: 3,
              lable: '语言残疾'
            },
            {
              value: 4,
              lable: '肢体残疾'
            },
            {
              value: 5,
              lable: '智力残疾'
            },
            {
              value: 6,
              lable: '精神残疾'
            },
            {
              value: 7,
              lable: '其它残疾'
            }
          ]
        },
        isSmoke: {
          value: '',
          options: [
            {
              lable: '从不吸烟',
              value: '0'
            },
            {
              lable: '过去吸烟，已戒烟',
              value: '1'
            },
            {
              lable: '吸烟',
              value: '2'
            },
            {
              lable: '从确定',
              value: '3'
            }
          ]
        },
        smokeAge: '',
        smokeNum: {
          value: '',
          options: [
            {
              value: '0',
              label: '平均5只以内'
            },
            {
              value: '1',
              label: '平均6-10只'
            },
            {
              value: '2',
              label: '平均11-20只'
            },
            {
              value: '3',
              label: '平均21-30只'
            },
            {
              value: '4',
              label: '平均31-40只'
            },
            {
              value: '5',
              label: '平均40只以上'
            },
            {
              value: '6',
              label: '不确定'
            }
          ]
        },
        quitSmokeAge: '',
        quitSmokenUM: {
          value: '',
          options: [
            {
              value: '0',
              label: '平均5只以内'
            },
            {
              value: '1',
              label: '平均6-10只'
            },
            {
              value: '2',
              label: '平均11-20只'
            },
            {
              value: '3',
              label: '平均21-30只'
            },
            {
              value: '4',
              label: '平均31-40只'
            },
            {
              value: '5',
              label: '平均40只以上'
            },
            {
              value: '6',
              label: '不确定'
            }
          ]
        },
        isDrink: {
          value: '',
          options: [
            {
              value: '0',
              lable: '从不饮酒'
            },
            {
              value: '1',
              lable: '过去饮，已戒酒'
            },
            {
              value: '2',
              lable: '饮酒'
            },
            {
              value: '3',
              lable: '不确定'
            }
          ]
        },
        drinkAge: '',
        quitDrinkAge: '',
        drinkNum: {
          value: '',
          options: [
            {
              value: '0',
              lable: '偶尔'
            },
            {
              value: '1',
              lable: '经常'
            },
            {
              value: '2',
              lable: '每天'
            },
            {
              value: '3',
              lable: '不确定'
            }
          ]
        },
        drinkList: {
          value: '',
          options: [
            {
              value: '0',
              lable: '白酒'
            },
            {
              value: '1',
              lable: '啤酒'
            },
            {
              value: '2',
              lable: '黄酒'
            },
            {
              value: '3',
              lable: '红酒'
            },
            {
              value: '4',
              lable: '其他'
            },
            {
              value: '5',
              lable: '不确定'
            }
          ]
        },
        drinkMl: '',
        quitDrinkNum: {
          value: '',
          options: [
            {
              value: '0',
              lable: '偶尔'
            },
            {
              value: '1',
              lable: '经常'
            },
            {
              value: '2',
              lable: '每天'
            },
            {
              value: '3',
              lable: '不确定'
            }
          ]
        },
        quitDrinkList: {
          value: '',
          options: [
            {
              value: '0',
              lable: '白酒'
            },
            {
              value: '1',
              lable: '啤酒'
            },
            {
              value: '2',
              lable: '黄酒'
            },
            {
              value: '3',
              lable: '红酒'
            },
            {
              value: '4',
              lable: '其他'
            },
            {
              value: '5',
              lable: '不确定'
            }
          ]
        },
        quitDrinkMl: '',
        diet: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '荤素均衡'
            },
            {
              value: 1,
              lable: '荤食为主'
            },
            {
              value: 2,
              lable: '素食为主'
            },
            {
              value: 3,
              lable: '嗜盐'
            },
            {
              value: 4,
              lable: '嗜油'
            },
            {
              value: 5,
              lable: '嗜糖'
            },
            {
              value: 6,
              lable: '其他'
            }
          ]
        },
        brush: {
          value: '',
          options: [
            {
              value: '0',
              label: '不刷牙'
            },
            {
              value: '1',
              label: '1次'
            },
            {
              value: '2',
              label: '2次'
            },
            {
              value: '3',
              label: '2次以上'
            },
            {
              value: '4',
              label: '不确定'
            }
          ]
        },
        Bodybuilding: {
          value: '',
          options: [
            {
              value: '0',
              label: '不锻炼'
            },
            {
              value: '1',
              label: '偶尔'
            },
            {
              value: '2',
              label: '每周<3次'
            },
            {
              value: '3',
              label: '每周3次及以上'
            },
            {
              value: '4',
              label: '不确定'
            }
          ]
        },
        motionTiming: {
          value: '',
          options: [
            {
              value: '0',
              label: '<20分钟/天'
            },
            {
              value: '1',
              label: '20-40分钟/天'
            },
            {
              value: '2',
              label: '40-60分钟/天'
            },
            {
              value: '3',
              label: '60分钟以上/天'
            }
          ]
        },
        motionAge: '',
        motionType: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '快步走'
            },
            {
              value: 1,
              lable: '跑步'
            },
            {
              value: 2,
              lable: '登山'
            },
            {
              value: 3,
              lable: '跳舞'
            },
            {
              value: 4,
              lable: '打拳'
            },
            {
              value: 5,
              lable: '其他'
            }
          ]
        },
        relaxed: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '棋牌'
            },
            {
              value: 2,
              lable: '书法'
            },
            {
              value: 3,
              lable: '绘画'
            },
            {
              value: 4,
              lable: '旅游'
            },
            {
              value: 5,
              lable: '歌舞'
            },
            {
              value: 6,
              lable: '戏曲'
            },
            {
              value: 7,
              lable: '打球'
            },
            {
              value: 8,
              lable: '打拳'
            },
            {
              value: 9,
              lable: '其他'
            }
          ]
        },
        specialty: '',
        negative: {
          value: [],
          detail: '',
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '丧偶（两年之内）'
            },
            {
              value: 2,
              lable: '目前独居'
            },
            {
              value: 3,
              lable: '一年之内住院治疗'
            },
            {
              value: 4,
              lable: '子女分家生活'
            },
            {
              value: 5,
              lable: '失去亲人'
            },
            {
              value: 6,
              lable: '其他'
            }
          ]
        },
      },
      disRules: {
        height: [
          { required: true, message: '请输入身高', trigger: 'blur' },
        ],
        weight: [
          { required: true, message: '请输入体重', trigger: 'blur' },
        ],
        waist: [
          { required: true, message: '请输入腰围', trigger: 'blur' },
        ],
        bloodType: [
          { required: true, message: '请选择血型', trigger: 'blur' },
        ],
      },
      
    }
  }
}
</script>

<style lang="scss" scoped>
.mainbgcolor{
  font-size: 14px;
}
.operationItem{
  width: 100%;
}
</style>