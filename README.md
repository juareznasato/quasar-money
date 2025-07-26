# quasar-money

## Project

If you're looking for a Quasar component to format currency values, this might be helpful.

## Links

[See Demo here](https://rzfpe.csb.app/).  
[GitHub](https://github.com/juareznasato/quasar-money).  
[npm](https://www.npmjs.com/package/quasar-money).

## Dependencies

- vue3
- moment ($ npm install moment --save)

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

2- Add in quasar.config.js:

```js
    boot: ["plugin.js"],
```

## Properties (v-bind:properties)

You can pass any valid q-input prop to this component.
For a full list of available props, refer to the [q-input API](https://quasar.dev/vue-components/input#qinput-api).

Props that contain hyphens (e.g., single-line, background-color) can be used this way:

```vue
v-bind:properties="{ 'single-line': true, 'background-color': 'red' }"
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

## How to use

### - Money (quasar-money)

```vue
<template>
  <div>
    <quasar-money
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: 'R$',
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: ' ',
        ...here you can add others q-input properties...
      }"
      v-bind:options="{
        locale: 'pt-BR',
        length: 11,
        precision: 6,
        empty: null,
      }"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "123456789.00", // 123456789.00 or "123456789.00" or "" or null
    label: "Money",
    disabled: false,
  }),
};
</script>
```
