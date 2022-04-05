<template>
  <div class="main">
    <div class="text">
      <Logo />
      <h1 class="logo-name">Stake Frites (🥩 , 🍟)</h1>
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
  color: white;
  align-items: stretch;
}
.logo-name {
  margin-top: -10px;
}
.text {
  color: white;
  font-size: 2em;
  text-align: center;
}

.logo {
  width: 100px;
}
</style>
