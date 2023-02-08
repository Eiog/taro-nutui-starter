<script>
import { reactive, toRefs } from 'vue'
import { Dongdong } from '@nutui/icons-vue-taro'
export default {
  name: 'Index',
  components: {
    Dongdong,
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
    })

    const handleClick = (type, msg, cover = false) => {
      state.show = true
      state.msg2 = msg
      state.type = type
      state.cover = cover
    }
    const themeVars = {
      rangeBgColor: 'rgba(25,137,250,0.15)',
      rangeBarBgColor: '#0289fa',
      rangeBarBtnBorder: '10px solid #0289fa',
    }

    return {
      ...toRefs(state),
      themeVars,
      handleClick,
    }
  },
}
</script>

<template>
  <view class="index">
    <view>
      <img src="" alt="">
      <text text="2xl gray6">
        gray
      </text>
    </view>
    {{ msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">
        点我
      </nut-button>
    </view>
    <nut-toast v-model:visible="show" :msg="msg2" :type="type" :cover="cover" />
  </view>
  <nut-config-provider :theme-vars="themeVars">
    <nut-form>
      <nut-form-item label="滑块">
        <nut-range hidden-tag />
      </nut-form-item>
    </nut-form>
  </nut-config-provider>
</template>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
