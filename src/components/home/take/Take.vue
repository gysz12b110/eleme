<template>
  <div class="take">
    <Top></Top>
    <Category></Category>
    <Ad></Ad>
    <Recommend></Recommend>
    <Seller-list></Seller-list>
    <Back-top></Back-top>
  </div>
</template>
<script>
import Top from './Top'
import Category from './Category'
import Recommend from './Recommend'
import Ad from './Ad'
import SellerList from './SellerList'
import BackTop from '@/base/BackTop'
export default {
  name: 'Take',
  components: {
    Top, Category, Ad, Recommend, SellerList, BackTop
  }
}
</script>
<style lang="stylus" scoped>

</style>
