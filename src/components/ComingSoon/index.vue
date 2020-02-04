<template>
  <div class="movie_body">
    <ul>
      <li v-for="(moive,index ) in movies  "
          :key="index">
        <div class="pic_show"><img :src="moive.img"></div>
        <div class="info_list">
          <h2>{{moive.title}}</h2>
          <p><span class="person">{{moive.collect_count}}</span> 人想看</p>
          <p>主演: {{moive.stars}}</p>
          <p>{{moive.pubdates}}上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'comingSoon',
  data () {
    return {
      movies: []
    }

  },
  mounted () {
    this.$axios.get("/v2/movie/coming_soon").then((res) => {
      var comingSoonMovies = res.data.subjects;
      var ms = new Array();
      for (var i = 0; i < comingSoonMovies.length; i++) {
        //片名
        ms[i] = ({ title: comingSoonMovies[i].title });
        //主演明星
        var cast = comingSoonMovies[i].casts;
        var stars = "";
        for (var j = 0; j < cast.length; j++) {
          if (j != cast.length - 1) {
            stars = stars + cast[j].name + ",";
          } else {
            stars += cast[j].name;
          }

        }
        ms[i]['stars'] = stars;
        //上映时间
        ms[i]['pubdates'] = comingSoonMovies[i].pubdates[comingSoonMovies[i].pubdates.length - 1];
        //多少人想看
        ms[i]['collect_count'] = comingSoonMovies[i].collect_count;
        //图片
        ms[i]['img'] = 'https://images.weserv.nl/?url=' + comingSoonMovies[i].images.small.substr(comingSoonMovies[i].images.small.indexOf("//"));
      }
      this.movies = ms;
    })
  }
}
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>