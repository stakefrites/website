<template>
  <Home :nodes="nodes" />
</template>

<script>
import Home from "./views/Home.vue";

const nodes = [
  {
    name: "Lum Network",
    status: "active",
    link: "https://ping.pub/LUM%20Network/staking/lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
    address: "lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
  },
  {
    name: "Akash",
    status: "active",
    link: "https://ping.pub/akash-network/staking/akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
    address: "akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
  },
  {
    name: "Chihuahua",
    status: "active",
    link: "https://ping.pub/chihuahua/staking/chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
    address: "chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
  },
  {
    name: "Nomic",
    status: "active",
    link: "https://ping.pub/nomic/staking/nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
    address: "nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
  },

  {
    name: "Osmosis",
    status: "unbounded",
    link: "https://www.mintscan.io/osmosis/validators/osmovaloper12l0vwef7w0xmkgktyqdzgd05jyq0lcuuqy2m8v",
    address: "osmovaloper12l0vwef7w0xmkgktyqdzgd05jyq0lcuuqy2m8v",
  },
  {
    name: "Desmos",
    status: "unbounded",
    link: "https://explorer.desmos.network/validators/desmosvaloper1gkh3fln5jpyvdetezxf494grkduclq06za2tjc",
    address: "desmosvaloper1gkh3fln5jpyvdetezxf494grkduclq06za2tjc",
  },

  { name: "Sentinel", status: "inactive", link: "", address: "" },
  { name: "Evmos", status: "inactive", link: "", address: "" },
];

export default {
  name: "App",
  components: {
    Home,
  },
  computed: {
    nodes: function () {
      return nodes;
    },
  },
};
</script>

<style></style>
