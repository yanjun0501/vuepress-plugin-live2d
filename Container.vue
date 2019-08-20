<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanjun
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: yanjun
 * @LastEditTime: 2019-08-19 09:46:57
 -->
<style scoped>
  .container {
    position: fixed;
    right: 50px;
    bottom: 100px;
    color: #00adb5;
  }
  .container #live2d {
    position: fixed;
    /* opacity: 1; */
    right: 0px;
    bottom: 20px;
    z-index: 99999;
    pointer-events: none;
  }
</style>

<template>
  <div class="container" v-show="isLoaded">
    <canvas
      id="live2d"
      :width="style.width"
      :height="style.height"
      class="live2d"
    ></canvas>
  </div>
</template>

<script>
  import live2dJSString from "./live2d";

  export default {
    name: "Container",
    data() {
      return {
        isLoaded: true,
        model: {
          'z16': "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-z16/assets/z16.model.json",
          'Epsilon2.1': "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json",
          'izumi': "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-izumi/assets/izumi.model.json",
          'koharu': "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-koharu/assets/koharu.model.json",
          'shizuku': "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json",
          'miku': "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-miku/assets/miku.model.json",
        },
        style: {
          width: 280,
          height: 250
        }
      };
    },
    mounted() {
      this.init();

      this.$router.afterEach((to, from) => {
        if (to.path !== from.path) {
          this.init();
        }
      });
    },
    methods: {
      init() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? true
          : false;
        if (isMobile) {
          this.isLoaded = false;
          return console.log("mobile do not load model");
        }

        if (!window.loadlive2d) {
          const script = document.createElement("script");
          script.innerHTML = live2dJSString;
          document.body.appendChild(script);
        }

        this.style = {
          width: (150 / 1424) * document.body.clientWidth,
          height: ((150 / 1424) * document.body.clientWidth) / 0.8
        };
        let live2d = MODEL_NAME ? this.model[MODEL_NAME] : (Math.random() > 0.5 ? this.model['z16'] : this.model['Epsilon2.1']);
        setTimeout(() => {
          window.loadlive2d("live2d", live2d);
        });
      }
    }
  };
</script>
