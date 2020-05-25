<template lang="html">
  <ValidationProvider v-slot="{ errors, valid }" name="phone" :rules="{ required: true, phoneNumber: { countryCode }}">
    <div class="v-input__control">
      <div class="phone-number-input-wrapper">
        <vue-phone-number-input v-model="phone" :translations="translations" default-country-code="ID" :preferred-countries="['ID', 'SG', 'MY']" color="#00CA96" no-example class="mb-1" @update="onUpdatePhoneNumber" />
      </div>
      <div class="v-text-field__details detail_custom">
        <div class="v-messages theme--light error--text" role="alert">
          <div class="v-messages__wrapper">
            <div class="v-messages__message">
              {{ errors[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'LAPhoneNumber',
  components: {
    ValidationProvider
  },
  props: {
    value: {
      default: '',
      type: [Number, String]
    }
  },
  data() {
    return {
      dataPhone: {},
      countryCode: 'ID',
      translations: {
        countrySelectorLabel: '',
        countrySelectorError: '',
        phoneNumberLabel: '',
        example: ''
      }
    }
  },
  computed: {
    'phone': {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    'dataPhone'(newItem, oldItem) {
      if (newItem.isValid === true) {
        this.phone = newItem.e164
      }
    }
  },
  methods: {
    onUpdatePhoneNumber(payload) {
      this.countryCode = payload.countryCode
      this.dataPhone = { ...payload }
    }
  }
}
</script>
