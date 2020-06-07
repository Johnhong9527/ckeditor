<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="test">test</button>
    {{ a }}
  </div>
</template>

<script>
export default {
  created() {},
  methods: {
    test() {
      console.log(13);

      console.log(aa, bbbb);
    }
  }
};
</script>
