<template>
  <div class="order">
    <div class="container">
      <div class="top cl">
        <span class="name">订单</span>
        <span class="meals">早餐</span>
      </div>
      <div class="no-rate cl">
        <i class="fl icon-take icon-guanbi"></i>
        <span>尚有
          <span class="number">5</span>单未评价，立即评价最多可获得
          <span class="number">716</span>积分</span>
      </div>
      <div class="wrap">
        <div class="title cl">
          <span class="fl mine">我的订单</span>
          <span class="fr all">全部订单
            <i class="icon-take icon-jiantou3"></i>
          </span>
        </div>
        <ul class="list">
          <li class="item" v-for="(order) in orders" :key="order.id">
            <div class="logo">
              <img :src="'/'+order.img">
            </div>
            <div class="content">
              <div class="detail cl">
                <span class="name">{{order.seller}}<i class="icon-take icon-jiantou3"></i></span>
                <span class="fr state">{{order.state}}</span>
              </div>
              <div class="date">22小时16分钟前</div>
              <div class="desc">{{order.title}}</div>
              <div class="price">&yen;{{order.money}}</div>
              <div class="control">
                <a href="" class="btn btn-again">再来一单</a>
                <a href="" class="btn btn-rate">评价晒图得164积分</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="more">
      <span>查看更多
        <i class="icon-take icon-jiantou-down"></i>
      </span>
    </div>
  </div>
</template>

<script>
import * as api from '@/api'
export default {
  name: 'Order',
  data () {
    return {
      data: []
    }
  },
  computed: {
    orders () {
      return this.data.filter(value => value.userId === this.$store.getters.user.id)
    }
  },
  created () {
    this.$http({
      url: api.ORDERS
    }).then((res) => {
      this.data = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.order {
  background: #f5f5f5;
  overflow: auto;
  .container {
    background: #fff;
    .top {
      padding: 0 0.3623rem;
      height: 1.8519rem;
      color: #fff;
      line-height: 1.8519rem;
      font-size: 0.4026rem;
      background: #019dff;
      .name {
        float: left;
      }
      .meals {
        float: right;
      }
    }
    .no-rate {
      margin: 0.161rem;
      padding: 0.3221rem 0.2415rem;
      text-align: center;
      color: #666666;
      font-size: 0;
      border: 1px solid #ccc;
      border-radius: 1rem;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      i {
        font-size: 0.3221rem;
      }
      span {
        display: inline-block;
        font-size: 0.2815rem;
        line-height: 0.3221rem;
        .number {
          margin: 0 0.0805rem;
          color: #ff5339;
        }
      }
    }
    .wrap {
      padding: 0 0.3623rem;
      .title {
        margin: 0.6844rem 0 0 0;
        height: 50px;
        line-height: 0.3623rem;
        .mine {
          color: #333;
          font-size: 0.3623rem;
        }
        .all {
          margin-top: 0.03rem;
          color: #2395ff;
          font-size: 0.2818rem;
          i {
            font-size: 0.2818rem;
          }
        }
      }
      .list {
        .item {
          padding-top: 0.2415rem;
          display: flex;
          border-bottom: 1px solid #ccc;
          .logo {
            flex: 1;
            img {
              width: 1.333333rem /* 100/75 */
              height: 1.333333rem /* 100/75 */
            }
          }
          .content {
            flex: 4;
            overflow: hidden;
            .detail {
              .name {
                display: inline-block;
                width: 100%;
                color: #333;
                font-size: 0.4026rem;
                font-weight: 700;
                white-space: wrap;
              }
              i {
                color: #999;
                font-size: 0.3026rem;
                font-weight:lighter;
              }
              .state {
                margin-top: 0.0644rem;
                color: #333;
                font-size: 0.2899rem;
                font-weight: 600;
                vertical-align: bottom;
              }
            }
            .date {
              color: #999;
              font-size: 0.2976rem;
            }
            .desc {
              margin-top: 0.4026rem;
              color: #666;
              font-size: 0.4026rem;
            }
            .price {
              margin-top: 0.2415rem;
              color: #333;
              font-size: 0.3176rem;
              font-weight: 600;
            }
            .control {
              margin: 0.4831rem 0;
              text-align: right;
              font-size: 0;
              .btn {
                display: inline-block;
                padding: 0.2013rem 0.3221rem;
                font-size: 0.3221rem;
                border-radius: 0.0805rem;
              }
              .btn-again {
                color: #019dff;
                border: 0.0161rem solid #019dff;
              }
              .btn-rate {
                margin-left: 0.2415rem;
                color: #ff5339;
                border: 0.0161rem solid #ff5339;
              }
            }
          }
        }
      }
    }
  }
  .more {
    padding: 0.4026rem 0;
    color: #666;
    font-size: 0.3221rem;
    font-weight: 600;
    text-align: center;
    background: #fff;
    i {
      font-size: 0.3221rem;
    }
  }
}
</style>
