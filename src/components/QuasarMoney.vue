<template>
  <div>
    <q-input
      ref="refInput"
      v-model="compModel"
      v-bind:label="label"
      v-bind:disable="disable"
      v-bind="properties"
      v-bind:maxlength="
        options.length + options.precision + Math.floor(options.length / 3) + 1
      "
      v-bind:prefix="signal + ' ' + prefix"
      v-bind:suffix="suffix"
      v-on:keypress="keyPress"
      v-on:blur="$emit('blur')"
      v-on:change="$emit('change')"
      v-on:click="$emit('click')"
      v-on:focus="$emit('focus')"
      v-on:keydown="$emit('keydown')"
      v-on:mousedown="$emit('mousedown')"
      v-on:mouseup="$emit('mouseup')"
    >
      <template v-slot:append v-if="props.negativeNumber">
        <q-icon name="exposure" v-on:click.stop="changeSignal()" />
      </template>
    </q-input>
  </div>
</template>

<script setup>
// Componente que aplica mascara decimal em valores digitados. Valores positivos e negativos.
import { ref, computed } from "vue";

const emit = defineEmits([
  "update:modelValue",
  "blur",
  "change",
  "click",
  "focus",
  "keydown",
  "mousedown",
  "mouseup",
]);
const refInput = ref("");
const POSITIVE = "";
const NEGATIVE = "-";
let signal = ref(POSITIVE);

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  prefix: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
  disable: {
    type: Boolean,
    default: false,
  },
  negativeNumber: {
    type: Boolean,
    default: false,
  },
  properties: {
    type: Object,
    default: () => ({}),
  },
  options: {
    type: Object,
    default: function () {
      return {
        locale: "pt-BR",
        length: 11,
        precision: 2,
        empty: null,
      };
    },
  },
});

const compModel = computed({
  get() {
    return humanFormat(props.modelValue);
  },
  set(newValue) {
    emit("update:modelValue", machineFormat(newValue));
  },
});

function humanFormat(value) {
  if (value || value === 0) {
    value = polarityCheck(value);
    value = Number(value).toLocaleString(props.options.locale, {
      maximumFractionDigits: props.options.precision,
      minimumFractionDigits: props.options.precision,
    });
  } else {
    value = props.options.empty;
  }
  return value;
}

function machineFormat(value) {
  if (value) {
    value = clearNumber(value);
    // Ajustar quantidade de zeros à esquerda
    value = value.padStart(parseInt(props.options.precision) + 1, "0");
    // Incluir ponto na casa correta, conforme a precisão configurada
    value =
      value.substring(0, value.length - parseInt(props.options.precision)) +
      "." +
      value.substring(
        value.length - parseInt(props.options.precision),
        value.length
      );
    if (value === "") {
      value = props.options.empty;
    }
  } else {
    value = props.options.empty;
  }
  return Number(value) === 0 ? value : signal.value + value;
}

// Retira todos os caracteres não numéricos e zeros à esquerda
function clearNumber(value) {
  let result = "";
  if (value) {
    let flag = false;
    let arrayValue = value.toString().split("");
    for (var i = 0; i < arrayValue.length; i++) {
      if (isInteger(arrayValue[i])) {
        if (!flag) {
          // Retirar zeros à esquerda
          if (arrayValue[i] !== "0") {
            result = result + arrayValue[i];
            flag = true;
          } else {
            // Permitir zero quando valor igual a zero - Tipo 3 (Money or Percent)
            if (Number(value) === 0) {
              result = result + arrayValue[i];
            }
          }
        } else {
          result = result + arrayValue[i];
        }
      }
    }
  }
  return result;
}

function isInteger(value) {
  let result = false;
  if (Number.isInteger(parseInt(value))) {
    result = true;
  }
  return result;
}

/** Verificar se o valor é positivo ou negativo */
function polarityCheck(value) {
  if (value < 0) {
    signal.value = NEGATIVE;
    value = value * -1;
  } else {
    signal.value = POSITIVE;
  }
  return value;
}

function changeSignal() {
  emit("update:modelValue", props.modelValue * -1);
}

function keyPress($event) {
  // console.log($event.keyCode); //keyCodes value
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  // if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
  if (keyCode < 48 || keyCode > 57) {
    // 46 is dot
    $event.preventDefault();
  }
}

function focus() {
  setTimeout(() => {
    refInput.value.focus();
  }, 500);
}
</script>
