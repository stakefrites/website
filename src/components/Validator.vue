<template>
  <div v-if="node.status != 'inactive'" class="parent">
    <div class="validator-container">
      <div class="row-in">
        <div class="node-name">{{ node.name }}</div>
        <a
          class="node-link"
          v-if="node.link != ''"
          :href="node.link"
          target="__blank__"
        >
          <ExternalLink />
        </a>
      </div>
      <div :class="node.status">{{ node.status }}</div>
    </div>
  </div>
</template>

<script>
import ExternalLink from "@/components/ExtenalLink.vue";
export default {
  name: "Validator",
  components: {
    ExternalLink,
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
.row-in {
  display: flex;
  justify-content: space-between;
}
.validator-container {
  flex-grow: 1;
  font-size: 1.5em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: white;
}
.parent {
  padding-top: 0.5em;
}

.node-name {
  margin-right: 0.5em;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: rgb(61, 212, 137);
  text-decoration: underline;
}

.node-link {
  font-size: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
