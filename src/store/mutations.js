import * as type from './mutation-type'
import Vue from 'vue'
export default {
  [type.SAVE_SELLER] (state, seller) {
    state.seller = seller
  },
  [type.ADD_SHOPCART] (state, { sellerId, goods }) {
    // 拿商家ID去购物车里查看，之前是否已经有商品了
    let products = state.shopcart[sellerId]
    if (products) {
      let sign = false
      // 如果这个商家之前已经在我们的购物车里了
      for (let i in products) {
        if (products[i].title === goods.title) {
          // 如果我们这次点的菜，之前已经点过了，那么就在数量上 +1
          products[i].count++
          sign = true
          break
        }
      }
      // 我们这次点的菜，之前没点过，添加上去，count为1
      if (!sign) {
        products.push(goods)
      }
    } else {
      // 这个商家之前没在购物车里:就用这个菜作为该商家数组里的第一件商品
      Vue.set(state.shopcart, sellerId, [goods])
    }
    sessionStorage.setItem('shopcart', JSON.stringify(state.shopcart))
  },
  [type.DEL_SHOPCART] (state, { sellerId, goods }) {
    // 取出这个商家的所有商品
    let products = state.shopcart[sellerId]
    for (let i in products) {
      if (products[i].title === goods.title) {
        products[i].count--
        if (products[i].count === 0) {
          products.splice(parseInt(i), 1)
        }
        break
      }
    }
    sessionStorage.setItem('shopcart', JSON.stringify(state.shopcart))
  }
}
