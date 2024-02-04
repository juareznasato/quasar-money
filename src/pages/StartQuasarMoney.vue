<template>
  <br />
  <quasar-money
    ref="refQuasarMoney"
    v-model="value"
    v-bind:label="'Quasar Money'"
    v-bind:prefix="'R$'"
    v-bind:properties="quasarMoney.properties"
    v-bind:options="quasarMoney.options"
    v-bind:negativeNumber="true"
  ></quasar-money>
  value: {{ value }}
</template>

<script setup>
import { ref } from "vue";
import QuasarMoney from "src/components/QuasarMoney.vue";

let value = ref(1234567890.12);

let quasarMoney = {
  properties: {
    dense: true,
    outlined: true,
    stackLabel: true,
  },
  options: {
    locale: "pt-BR",
    length: 11,
    precision: 2,
    empty: null,
  },
};
</script>

<style></style>
