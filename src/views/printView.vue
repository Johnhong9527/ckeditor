<template>
  <div class="w-printer">
    <!-- <iframe
      :src="getprintPreview()"
      type="application/x-google-chrome-pdf"
      style="width:100%;height:100%;border:none;padding:0;margin:0;"
    >
    </iframe> -->
    <!-- <a-button @click="$refs.myPdfComponent.print()">print</a-button> -->
    <div class="btn-wrapper">
      <div><button @click="back" type="link">返回</button></div>
      <div>
        <button type="primary" @click="$refs.myPdfComponent.print()">
          打印
        </button>
      </div>
    </div>
    <div class="w-pdf-style">
      <vue-pdf :src="pdfUrl" ref="myPdfComponent"></vue-pdf>
    </div>
  </div>
</template>
<script>
// import { printPreview } from '@/api/print';
// import vuePdf from "@/components/vue-pdf/vuePdfSss.vue";
import vuePdf from "vue-pdf";
import CMapReaderFactory from "vue-pdf/src/CMapReaderFactory.js";

export default {
  created() {
    // this.pdfUrl = "http://127.0.0.1:9999/test.pdf";
    this.pdfUrl =
      "https://tengnat.yiyuntong.net:40051/mes-print-service/print/preview?code=6100000081&configCode=transaction";
    // this.pdfUrl = vuePdf.createLoadingTask({
    //   url: "http://127.0.0.1:9999/test.pdf",
    //   CMapReaderFactory
    // });
  },
  data() {
    return {
      pdfUrl: "",
      path: ""
    };
  },
  components: {
    "vue-pdf": vuePdf
  },
  methods: {
    // async getprintPreview() {
    //   const res = await printPreview({ code: 'T9700000859', configCode: 'transaction' });
    //   console.log(res, 'res');
    //   return res.data;
    //   // const res = await printPreview();
    // },
    back() {
      this.$router.go(-1);
      // this.$router.push({ path: this.path });
    }
  }
};
</script>

<style lang="less" scoped>
.w-printer {
  // display: flex;
  height: 100%;
  width: 100%;

  .btn-wrapper {
    width: 900px;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
  }
  .w-pdf-style {
    border: 1px solid #d3d3d3;
    // display: block;
    width: 900px;
    // padding: 0 30px;
    margin: 0 auto;
    // display: inline-block;
    // width: 80%;
    // height: 80%;
    // border: 1px solid #ccc;
  }
}
</style>
