import { createStore } from "vuex";

export default createStore({
  state: {
    node: [
      {
        name: "Akash",
        status: "active",
        link: "https://ping.pub/akash-network/staking/akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
        address: "akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
        coingecko_id: "akash-network",
        rpc: "https://rpc.akash.forbole.com:443",
        decimals: 6,
      },
      {
        name: "Cerberus",
        status: "active",
        link: "https://www.mintscan.io/cerberus/validators/cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
        address: "cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
        coingecko_id: "cerberus-2",
        rpc: "https://rpc.cerberus.zone:26657",
        decimals: 6,
      },
      {
        name: "Chihuahua",
        status: "active",
        link: "https://ping.pub/chihuahua/staking/chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
        address: "chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
        coingecko_id: "chihuahua-token",
        rpc: "https://rpc.chihuahua.wtf/",
        decimals: 6,
      },
      {
        name: "Evmos",
        status: "active",
        link: "https://www.mintscan.io/evmos/validators/evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
        address: "evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
        coingecko_id: "evmos",
        rpc: "https://tendermint.bd.evmos.org:26657",
        decimals: 18,
      },
      {
        name: "Nomic",
        status: "active",
        link: "https://nomic.zenscan.io/validator.php?addr=nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
        address: "nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
        coingecko_id: "nomic",
        rpc: "http://138.197.71.46:26657",
        decimals: 6,
      },
      {
        name: "Lum Network",
        status: "active",
        link: "https://ping.pub/lum-network/staking/lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
        address: "lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
        coingecko_id: "lum-network",
        rpc: "https://node0.mainnet.lum.network/rpc",
        decimals: 6,
      },
      {
        name: "Sifchain",
        status: "active",
        link: "https://www.mintscan.io/sifchain/validators/sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
        address: "sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
        coingecko_id: "sifchain",
        rpc: "https://rpc.sifchain.finance:443",
        decimals: 18,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
