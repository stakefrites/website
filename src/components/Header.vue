<template>
  <div class="main">
    <div class="text">
      <Logo />
      <h2>PoS validators & web3 developpers.</h2>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "Header",
  components: {
    Logo,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  align-items: stretch;
}
.text {
  color: black;
  font-size: 2em;
  text-align: center;
}

.logo {
  width: 75vw;
}
</style>
