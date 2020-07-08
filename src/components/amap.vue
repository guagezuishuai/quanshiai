<template>
  <div class="map">
     <el-slider
      v-model="circleValue"
      :max="5000"
      @change="circleValueChange"
      show-input>
    </el-slider>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {},
      circleValue: 1000,
      marker: {},
      circle: {}
    };
  },
  mounted() {
    this.$nextTick(() => this.init())
  },
  methods: {
    // 通过浏览器定位获取中心点的经纬度
    init() {
      let that = this;
      window.AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new window.AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          // buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,     
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        window.AMap.event.addListener(geolocation, 'complete', onComplete)
        window.AMap.event.addListener(geolocation, 'error', onError)

        function onComplete (data) {
          // data是具体的定位信息
          that.map = new window.AMap.Map("container",{
            zoom:13,//级别
            center: [data.position.lng , data.position.lat]
          });
          that.mapAddSome(data.position.lng , data.position.lat);
          that.map.on('click', function(ev) {
            that.map.setZoomAndCenter(13, [ev.lnglat.lng, ev.lnglat.lat]);
            that.map.clearMap();
            that.mapAddSome(ev.lnglat.lng , ev.lnglat.lat);
          });
        }
        function onError (data) {
          // 定位出错
          console.log('定位出错',data)
          
        }
      })
    },
    mapAddSome(lng , lat) {
      // 构造点标记
      this.marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [lng, lat]
      });
      // 圆形覆盖物
      this.circle = new window.AMap.Circle({
            center: new window.AMap.LngLat(lng, lat), // 圆心位置
            radius: this.circleValue,  //半径
            strokeColor: "#F33",  //线颜色
            strokeOpacity: 1,  //线透明度
            strokeWeight: 3,  //线粗细度
            fillColor: "#ee2200",  //填充颜色
            fillOpacity: 0.35 //填充透明度
          });
      // 十字架覆盖物
      //  let path = [
      //     [116.362209, 39.887487],
      //     [116.362209, 39.878002],
      // ];
      // let polyline = new window.AMap.Polyline({
      //     path: path,
      //     isOutline: true,
      //     outlineColor: '#ffeeff',
      //     borderWeight: 3,
      //     strokeColor: "#3366FF", 
      //     strokeOpacity: 1,
      //     strokeWeight: 6,
      //     // 折线样式还支持 'dashed'
      //     strokeStyle: "solid",
      //     // strokeStyle是dashed时有效
      //     strokeDasharray: [10, 5],
      //     lineJoin: 'round',
      //     lineCap: 'round',
      //     zIndex: 50,
      // })
      this.map.add([this.marker,this.circle])
    },
    // 滑块的值改变触发的方法
    circleValueChange() {
      this.map.clearMap();
      this.mapAddSome();
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 680px;
}
</style>