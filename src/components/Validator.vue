<template>
  <div class="validator" v-if="node.status != 'inactive'">
    <div class="val-name">
      {{ node.name
      }}<a
        class="node-link"
        v-if="node.link != ''"
        :href="node.link"
        target="__blank__"
      >
        <ExternalLink />
      </a>
    </div>
    <div class="val-status">
      <p :class="node.status">{{ node.status }}</p>
    </div>
    <div class="val-price">USD${{ price }}</div>
    <div class="val-vp">Voting Power: {{ vp }}</div>
  </div>
</template>

<script>
import ExternalLink from "@/components/ExtenalLink.vue";
import axios from "axios";
import {
  setupStakingExtension,
  QueryClient,
  setupBankExtension,
  setupDistributionExtension,
  setupMintExtension,
  setupGovExtension,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
export default {
  name: "Validator",
  components: {
    ExternalLink,
  },
  data() {
    return {
      price: (0.0).toFixed(4),
      vp: 0,
    };
  },
  async created() {
    this.$data.price = await this.getPrice(this.$props.node.coingecko_id);
    this.$data.vp = await this.getPosition(
      this.$props.node.rpc,
      this.$props.node.address,
      this.$props.node.decimals
    );
  },
  methods: {
    async getPosition(rpc, address, decimals) {
      const tmClient = await Tendermint34Client.connect(rpc);
      let newtmClient = QueryClient.withExtensions(
        tmClient,
        setupStakingExtension,
        setupBankExtension,
        setupDistributionExtension,
        setupMintExtension,
        setupGovExtension
      );
      let validator = await newtmClient.staking.validator(address);
      return (validator.validator.tokens / 10 ** decimals).toFixed(0);
    },
    getPrice(id) {
      return axios
        .get("https://api.coingecko.com/api/v3/simple/price", {
          params: {
            ids: id,
            vs_currencies: "usd",
          },
        })
        .then((data) => {
          if (data.data[id].usd) {
            return data.data[id].usd.toFixed(4);
          } else {
            return (0.0).toFixed(4);
          }
        });
    },
  },
  props: {
    node: {
      type: Object,
      default: () => {
        return {
          name: "",
          status: "",
          link: "",
          address: "",
          coingecko_id: "",
        };
      },
    },
  },
};
</script>

<style scoped>
.active {
  color: #2edf69;
  display: flex;
  justify-self: end;
}
.unbounded {
  color: #bc2edf;
  display: flex;
  justify-self: end;
}
.inactive {
  color: #d11a32;
  display: flex;
  justify-self: end;
}
a {
  color: inherit;
  text-decoration: none;
}
h3 {
  font-size: 2em;
}

.validator {
  border-style: solid;
  display: grid;
  padding: 1em;
  border-radius: 1em;
  margin: 1em;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr auto auto;
}
.val-name {
  grid-column: 1;
  font-size: 2.4em;
  display: flex;
  flex-direction: row;
}
.val-status {
  grid-column: 2;
  grid-row: 1/4;
  font-size: 2em;
  display: flex;
  align-items: center;
}
.val-price {
  grid-column: 1;
  grid-row: 2;
}
.val-vp {
  grid-column: 1;
  grid-row: 3;
}

.node-link {
  font-size: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
