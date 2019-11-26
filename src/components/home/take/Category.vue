<template>
  <div class="category">
    <mt-swipe :auto="0" class="swiper">
      <mt-swipe-item v-for="(cate,index) in list" :key="index">
        <a :href="c.url" class="item" v-for="(c,i) in cate" :key="i">
          <img :src="c.icon" :alt="c.name">
          <p>{{c.name}}</p>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import * as api from '@/api'
export default {
  name: 'Category',
  data () {
    return {list: []}
  },
  created () {
    this.$http({
      url: api.CATEGORIES
    }).then(res => {
      this.list = res.data
    })
  }
}
</script>
<style lang="stylus" scoped>
.category {
  height 20vh
  margin-top: 0.2415rem;
  .swiper {
    margin: 0 0.2657rem;
    height: 4.72rem;
    .item {
      float: left;
      width: 20%;
      text-align: center;
      img {
        width: 1.1916rem;
        height: 1.1916rem;
      }
      p {
        color: #666;
      }
    }
  }
}
</style>
