<template>
  <br />
  <div align="center">
    <q-card flat bordered style="height: calc(100vh - 800px); width: 400px">
      <br />
      <q-card-section>
        <q-scroll-area style="height: calc(100vh - 400px); max-width: 900px">
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <quasar-money
                ref="refQuasarMoney"
                v-model="value"
                v-bind:label="'Quasar Money'"
                v-bind:prefix="'R$'"
                v-bind:suffix="''"
                v-bind:disable="false"
                v-bind:negativeNumber="true"
                v-bind:properties="quasarMoney.properties"
                v-bind:options="quasarMoney.options"
              ></quasar-money>
              v-model value: {{ value }}
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
              <q-btn label="Focus" v-on:click.stop="focus()" />
              <q-btn label="Select" v-on:click.stop="select()" />
            </div>
          </div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import QuasarMoney from "src/components/QuasarMoney.vue";
const refQuasarMoney = ref("");

let value = ref(1234567890.12);

let quasarMoney = {
  properties: {
    dense: true,
    outlined: true,
    stackLabel: true,
    // ...
    // You can pass any valid "q-input" prop here
  },
  options: {
    locale: "pt-BR",
    length: 11,
    precision: 2,
    empty: null,
  },
};

function focus() {
  setTimeout(() => {
    refQuasarMoney.value.focus();
  }, 500);
}
function select() {
  setTimeout(() => {
    refQuasarMoney.value.select();
  }, 500);
}
</script>

<style></style>
