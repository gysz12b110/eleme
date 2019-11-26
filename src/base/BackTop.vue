<template>
  <div class="back" v-show="isShow" @click="go">
    UP
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {isShow: false}
  },
  created () {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop
      const height = document.documentElement.clientHeight
      if (top >= height) {
        this.isShow = true
      } else if (top === 0) {
        this.isShow = false
      }
    })
  },
  methods: {
    go () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="stylus" scoped>
.back
  width: 80px;
  height: 80px;
  line-height: 80px;
  position: fixed;
  right: 20px;
  bottom: 150px;
  border: 2px solid #ccc;
  background: #fff;
  text-align: center;
  z-index: 99;
</style>
