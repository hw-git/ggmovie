<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li v-for="hotCity in hotCityList"
              :key="hotCity.id">{{hotCity.nm}}</li>

        </ul>
      </div>
      <div class="city_sort"
           ref="city_sort">
        <div v-for="(cityIdx) in cityList"
             :key="cityIdx.idx">
          <h2>{{cityIdx.idx}}</h2>
          <ul>
            <li v-for="city in cityIdx.cities"
                :key="city.id">{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <!-- touchstart 移动端触摸时间 -->
        <li v-for="(alp ,index) in alphabet"
            :key="index"
            @touchstart="handleToAlp(index)">{{alp}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "city",
  //定义绑定的数据
  data () {
    return {
      cityList: [],
      alphabet: [],
      hotCityList: []
    }
  },
  mounted () {
    //请求城市数据
    this.$axios.get("/lib/city-list@0.0.3/city_list.json").then((res) => {
      if (res.statusText === "OK") {
        this.cityList = res.data.cityList;
        this.alphabet = res.data.alphabet;
      }
    });
    //请求热门城市数据
    this.$axios.get("/api/cityList").then((res) => {
      if (res.data.msg === "ok") {
        var cities = res.data.data.cities;
        for (var i = 0; i < cities.length; i++) {
          if (cities[i].isHot === 1) {
            this.hotCityList.push(res.data.data.cities[i]);
          }
        }
      }
    })
  },
  methods: {
    // 点击侧边字母 定位到相应的字母开头的城市
    handleToAlp (index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
    }
  }


}
</script>

<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>