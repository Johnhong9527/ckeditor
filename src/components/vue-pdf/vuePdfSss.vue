<style src="./annotationLayer.css"></style>
<script>
/*eslint-disable*/
import componentFactory from "./componentFactory";
import pdfjsWrapper from "./pdfjsWrapper";

const PDFJS = require("pdfjs-dist");

if (process.env.VUE_ENV !== "server") {
  if (typeof window !== "undefined" && "Worker" in window) {
    const PdfjsWorker = require("worker-loader!pdfjs-dist/build/pdf.worker.js");
    PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker();
  }
}
const component = componentFactory(pdfjsWrapper(PDFJS));
component.PDFJS = PDFJS;

export default component;
</script>
