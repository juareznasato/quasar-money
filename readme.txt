# quasar-money

## Project

If you're looking for a Quasar component to format money values, this might be helpful.  
It supports both positive and negative numbers. 

## Links

[See Demo here](https://rzfpe.csb.app/).  
[GitHub](https://github.com/juareznasato/quasar-money).  
[npm](https://www.npmjs.com/package/quasar-money).  
[ko-fi](https://ko-fi.com/juareznasato).  

## Dependencies
```
- vue-3
- moment ($ npm install moment --save)
```

## Install

```
$ npm install quasar-money --save
```

## Global Register

1- Create a file src/boot/plugin.js:

```js
import { boot } from "quasar/wrappers";
import QuasarMoney from "quasar-money";

export default boot(({ app }) => {
  app.component("quasar-money", QuasarMoney);
});
```

2- Add plugin.js in quasar.config.js:

```js
    boot: ["plugin.js"],
```

## How to use

### - Money (quasar-money)

```vue
<template>
  <div>
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
  </div>
</template>
<script setup>
import { ref } from "vue";

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
  refQuasarMoney.value.focus();
}
function select() {
  refQuasarMoney.value.select();
}
</script>
```

## Properties (v-bind:properties)

You can pass any valid q-input prop to this component.
For a full list of available props, refer to the [q-input API](https://quasar.dev/vue-components/input#qinput-api).

Props that contain hyphens (e.g., single-line, background-color) can be used in the following ways:

```vue
quasarMoney.properties="{ singleLine: true, backgroundColor: 'red' }"

or

quasarMoney.properties="{ 'single-line': true, 'background-color': 'red' }"
```

## Events

| Event     | value         | Description                                           |
| --------- | ------------- | ----------------------------------------------------- |
| blur      | Event         | Emitted when the input is blurred                     |
| change    | any           | Emitted when the input is changed by user interaction |
| click     | MouseEvent    | Emitted when input is clicked                         |
| focus     | Event         | Emitted when component is focused                     |
| keydown   | KeyboardEvent | Emitted when any key is pressed                       |
| mousedown | MouseEvent    | Emitted when click is pressed                         |
| mouseup   | MouseEvent    | Event mouseup                                         |

## Support me
If you enjoy or benefit from my work, your support helps me keep going and creating even more.  
Please consider starring the repository and buying me a coffee. Every coffee means a lot — thank you for your support!  
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/juareznasato)
