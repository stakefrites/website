<template>
  <Header />
  <div class="validator-section">
    <h3 class="validator-headline">We validate on these networks:</h3>
    <Validator v-for="node in nodes" :key="node.address" :node="node" />
  </div>
  <Akash />
</template>

<script>
import Validator from "@/components/Validator.vue";
import Header from "@/components/Header.vue";
import Akash from "@/components/Akash.vue";

export default {
  name: "Home",
  components: { Validator, Header, Akash },
  props: {
    nodes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.validator-section {
  padding-top: 1em;
  color: white;
  margin-bottom: 5em;
}

.validator-headline {
  font-size: 2em;
  text-align: center;
  color: white;
}
</style>
