<template>
  <el-rate v-model="value" show-score :disabled="readOnly" :allow-half="true"></el-rate>
</template>
<script>
export default {
  props: {
    readOnly: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 5
    }
  }
}
</script>
<style lang="stylus" scoped></style>
