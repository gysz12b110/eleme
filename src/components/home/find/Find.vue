<template>
  <div class="find">
    <div class="top">
      <h1 class="title">发现</h1>
    </div>
    <table class="category">
      <tr>
        <td class="one" rowspan="2">
          <img src="/static/img/find/faxian-1.png" alt="">
        </td>
        <td class="two">
          <img src="/static/img/find/faxian-2.png" alt="">
        </td>
      </tr>
      <tr>
        <td class="three">
          <img src="/static/img/find/faxian-3.png" alt="">
        </td>
      </tr>
      <tr>
        <td class="four">
          <img src="/static/img/find/faxian-4.png" alt="">
        </td>
        <td class="five">
          <img src="/static/img/find/faxian-5.png" alt="">
        </td>
      </tr>
    </table>
    <div class="ad">
      <img src="http://imgqn.koudaitong.com/upload_files/2015/07/13/FkvY6WYvxnEUMoRi1dKBq4TutolX.jpg%21730x0.jpg" alt="">
    </div>
    <div class="wrap">
      <div class="title">
        <h1 class="name">美食热推</h1>
        <h3 class="desc">你的口味，我都懂得</h3>
      </div>
      <ul class="list cl">
        <li class="item">
          <div class="thumb">
            <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
          </div>
          <div class="name">特价，麻辣嫩牛肉！！！特价，麻辣嫩牛肉！！！</div>
          <div class="price">
            <span class="origin">&yen;23</span>
            <span class="now">&yen;43</span>
          </div>
        </li>
        <li class="item">
          <div class="thumb">
            <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
          </div>
          <div class="name">特价，麻辣嫩牛肉！！！特价，麻辣嫩牛肉！！！</div>
          <div class="price">
            <span class="origin">&yen;23</span>
            <span class="now">&yen;43</span>
          </div>
        </li>
        <li class="item">
          <div class="thumb">
            <img src="https://fuss10.elemecdn.com/f/8d/4e4da80d8712d1f190bf671414e94jpeg.jpeg?imageMogr/format/webp/thumbnail/!180x180r/gravity/Center/crop/180x180/" alt="">
          </div>
          <div class="name">特价，麻辣嫩牛肉！！！特价，麻辣嫩牛肉！！！</div>
          <div class="price">
            <span class="origin">&yen;23</span>
            <span class="now">&yen;43</span>
          </div>
        </li>
      </ul>
      <div class="more">
        <a href="">查看更多</a>
      </div>
    </div>

    <div class="wrap">
      <div class="title">
        <h1 class="name">美食热推</h1>
        <h3 class="desc">你的口味，我都懂得</h3>
      </div>
      <ul class="list cl">
        <li class="item">
          <div class="thumb">
            <img src="https://fuss10.elemecdn.com/3/40/5d96a91c722486690303ce3801517jpeg.jpeg?imageMogr/format/webp/thumbnail/!180x180r/gravity/Center/crop/180x180/" alt="">
          </div>
          <div class="name">特价，麻辣嫩牛肉！！！特价，麻辣嫩牛肉！！！</div>
          <div class="price">
            <span class="origin">&yen;23</span>
            <span class="now">&yen;43</span>
          </div>
        </li>
        <li class="item">
          <div class="thumb">
            <img src="https://fuss10.elemecdn.com/a/43/b55f80040a1c58e2ca891c2316b3ajpeg.jpeg?imageMogr/format/webp/thumbnail/!180x180r/gravity/Center/crop/180x180/" alt="">
          </div>
          <div class="name">特价，麻辣嫩牛肉！！！特价，麻辣嫩牛肉！！！</div>
          <div class="price">
            <span class="origin">&yen;23</span>
            <span class="now">&yen;43</span>
          </div>
        </li>
        <li class="item">
          <div class="thumb">
            <img src="https://fuss10.elemecdn.com/1/a6/a9d120b51d33423039e0fce59eb67jpeg.jpeg?imageMogr/format/webp/thumbnail/!180x180r/gravity/Center/crop/180x180/" alt="">
          </div>
          <div class="name">特价，麻辣嫩牛肉！！！特价，麻辣嫩牛肉！！！</div>
          <div class="price">
            <span class="origin">&yen;23</span>
            <span class="now">&yen;43</span>
          </div>
        </li>
      </ul>
      <div class="more">
        <a href="">查看更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Find'
}
</script>

<style lang="stylus" scoped>
.find {
  background: #eeeeee;
  .top {
    padding: 0 0.3623rem;
    height: 1.8519rem;
    background: #0098ff;
    .title {
      margin: 0;
      color: #fff;
      height: 1.8519rem;
      font-size: 0.4026rem;
      line-height: 1.8519rem;
    }
  }
  .category {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    .one {
      width: 50%;
      height: 4.0258rem;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .two {
      width: 50%;
      height: 2.0129rem;
      border-bottom: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .three {
      width: 50%;
      height: 2.0129rem;
      border-bottom: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .four {
      width: 50%;
      height: 2.0129rem;
      border-right: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .five {
      width: 50%;
      height: 2.0129rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ad {
    margin: 0.2415rem 0;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .wrap {
    margin-bottom: 0.4428rem;
    padding: 0 0.3623rem;
    background: #fff;
    .title {
      padding: 0.4026rem 0;
      text-align: center;
      .name {
        margin: 0;
        color: #333;
        font-size: 0.4026rem;
        font-weight: 700;
      }
      .desc {
        padding: 0.2013rem 0 0 0;
        color: #666;
        font-size: 0.3818rem;
      }
    }
    .list {
      .item {
        float: left;
        margin-right: 0.4428rem;
        width: 2.75rem;
        &:nth-child(3) {
          margin: 0;
        }
        .thumb {
          width: 100%;
          height: 2.5523rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          margin-top: 0.161rem;
          width: 100%;
          height: 0.2818rem;
          line-height: 0.2818rem;
          color: #333;
          font-size: 0.3318rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          margin-top: 0.3623rem;
          color: #333;
          font-size: 0;
          .origin {
            color: #f94843;
            font-size: 0.3415rem;
          }
          .now {
            margin-left: 0.161rem;
            color: #666;
            font-size: 0.2932rem;
            text-decoration: line-through;
          }
        }
      }
    }
    .more {
      padding: 0.6441rem 0 0.4026rem 0;
      text-align: center;
      a {
        color: #666;
        font-size: 0.2818rem;
      }
    }
  }
}
</style>
