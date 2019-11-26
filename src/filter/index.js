import Vue from 'vue'
Vue.filter('RMB', function (money) {
  // 1.将数字转换为字符串
  money = money.toString()
  if (money.length === 0) {
    money = '0'
  }
  // 2.将整数与小数分割开
  let int = money.split('.')[0]
  let float = money.split('.')[1] ? '.' + money.split('.')[1] : '.00'
  // 3.整数部分转换为数组并且reverse
  let list = int.split('').reverse()
  // 4.将数组进行遍历(迭代、循环)
  for (let i = 0; i < list.length; i++) {
    // 5.加逗号
    if (i % 3 === 0) {
      list[i] = list[i] + ','
    }
  }
  // 5.准备一个最终结果字符串
  let result = list.reverse().join('')
  result = '￥' + result.substring(0, result.length - 1) + float
  return result
})
Vue.filter('Phone', function (phone) {
  phone += ''
  return phone.substring(0, 4) + '****' + phone.substring(8)
})
