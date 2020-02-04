<template>
  <div id="main">
    <Header title="呱呱影院"></Header>
    <div id="content">
      <div class="movie_menu ">
        <router-link tag="div"
                     to="/cinema/week"
                     class="hot_item">
          本周榜
        </router-link>
        <router-link tag="div"
                     to="europe"
                     class="hot_item">
          北美榜
        </router-link>
        <router-link tag="div"
                     to="new"
                     class="hot_item">
          新片榜
        </router-link>
      </div>
      <div class="cinema_body">
        <keep-alive>
          <router-view />
        </keep-alive>

      </div>
      <FootBar></FootBar>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import FootBar from "@/components/FootBar"
export default {
  name: "Cinema",
  components: {
    Header,
    FootBar
  },
}
</script>

<style>
/* 二级菜单样式 */
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>`