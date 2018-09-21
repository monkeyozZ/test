<template>
  <div class="material-input__component" :class="computedClasses">
    <input
      v-if="type === 'email'"
      type="email"
      class="material-input"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"

      :required="required"

      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleModelInput"
    >
    <input
      v-if="type === 'url'"
      type="url"
      class="material-input"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"

      :required="required"

      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleModelInput"
    >
    <input
      v-if="type === 'number'"
      type="number"
      class="material-input"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"

      :max="max"
      :min="min"
      :step="step"
      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"

      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleModelInput"
    >
    <input
      v-if="type === 'password'"
      type="password"
      class="material-input"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"
      :maxlength="maxlength"
      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"

      :max="max"
      :min="min"
      :step="step"
      :required="required"

      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleModelInput"
    >
    <input
      v-if="type === 'tel'"
      type="tel"
      class="material-input"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"

      :required="required"
      :maxlength="maxlength"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleModelInput"
    >
    <input
      v-if="type === 'text'"
      type="text"
      class="material-input"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"

      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"

      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleModelInput"
    >

    <span class="material-input-bar"></span>

    <label class="material-label">
      <slot></slot>
    </label>

    <div v-if="errorMessages" class="material-errors">
      <div v-for="(error, index) in computedErrors" class="material-error" :key="index">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'material-input',
  computed: {
    computedErrors () {
      return typeof this.errorMessages === 'string'
        ? [this.errorMessages] : this.errorMessages
    },
    computedClasses () {
      return {
        'material--active': Boolean(this.focus || (this.errorMessages && this.errorMessages.length)),
        'material--disabled': this.disabled,
        'material--has-errors': Boolean(this.errorMessages && this.errorMessages.length),
        'material--raised': Boolean(
          this.focus ||
          this.valueCopy || // has value
          (this.placeholder && !this.valueCopy)) // has placeholder
      }
    }
  },
  data () {
    return {
      valueCopy: null,
      focus: false
    }
  },
  methods: {
    handleModelInput (event) {
      this.$emit('input', event.target.value, event)
    },
    handleFocus () {
      this.focus = true
      this.$emit('resetValidate')
    },
    handleBlur () {
      this.focus = false
      this.$emit('validateFun')
    },
    copyValue (value) {
      this.valueCopy = value
    }
  },
  watch: {
    value: {
      handler () {
        this.copyValue(this.value)
      },
      immediate: true
    }
  },
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
    },
    step: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    maxlength: {
      type: Number,
      default: null
    },
    required: {
      type: Boolean,
      default: true
    },
    autocomplete: {
      type: String,
      default: null
    },
    errorMessages: {
      type: [Array, String],
      default: null
    }
  }
}
</script>

<style  lang="less" scoped>
 .material-input__component .material-input-bar:after, .material-input__component .material-input-bar:before {
  content: "";
  height: 1px;
  width: 0;
  bottom: 0;
  position: absolute;
  transition: 0.2s ease all;
}
.material-input__component {
  position: relative;
  background: white;
  * {
    box-sizing: border-box;
  }
  .material-input {
    font-size: 16px;
    padding: 12px 0px 12px 8px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    background: none;
    color: black;
    border-bottom: 1px solid #e0e0e0;
    &:focus {
      outline: none;
      border: none;
      border-bottom: 1px solid transparent;
    }
  }
  .material-label {
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
    color: #CCCCCC;
  }
  .material-input-bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      left: 50%;
    }
    &:after {
      right: 50%;
    }
  }
  &.material--disabled {
    .material-input {
      border-bottom-style: dashed;
    }
  }
  &.material--raised {
    .material-label {
      top: -20px;
      font-size: 14px;
    }
  }
  .material-errors {
    position: absolute;
    overflow: hidden;
    bottom: 0;
    left: 0;
    transform: translate(0,100%);
    .material-error {
      font-size: 12px;
      line-height: 14px;
      overflow: hidden;
      margin-top: 0;
      padding-top: 5px;
      padding-right: 5px;
      padding-left: 0;
    }
  }
  &.material--active {
    .material-label {
      color: #2196f3;
    }
  }
  &.material--has-errors {
    &.material--active {
      .material-label {
        color: #f44336;
      }
    }
    .material-errors {
      color: #f44336;
    }
  }
}
.material-input__component.material--active .material-input-bar:before, .material-input__component.material--active .material-input-bar:after {
  width: 50%;
}
.material-input__component .material-input-bar:before, .material-input__component .material-input-bar:after {
  background: #2196f3;
}
.material-input__component.material--has-errors .material-input-bar:before, .material-input__component.material--has-errors .material-input-bar:after {
  background: #f44336;
}
</style>
