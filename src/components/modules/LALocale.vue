<template lang="html">
  <v-menu offset-y left>
    <template v-slot:activator="{ on }">
      <v-btn text icon class="d-none d-sm-inline-flex" v-on="on">
        <v-icon>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list nav dense>
      <v-list-item v-for="item in availableLocales" :key="item.code" @click="changeLocale(item.code)">
        <v-list-item-avatar tile width="24" height="24" min-width="24">
          <v-img width="24" height="24" contain :src="getImgUrl(item.code)" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'LocaleMenu',
  data() {
    return {
      availableLocales: [
        { code: 'id', name: 'Indonesia' },
        { code: 'en', name: 'English' }
      ]
    }
  },
  methods: {
    getImgUrl(img) {
      const images = require.context('@/static/images/flags/', false, /\.png$/)
      return images('./' + img + '.png')
    },
    changeLocale(locale) {
      this.$i18n.locale = locale
      Cookies.set(process.env.VUE_APP_COOKIE_KEY + '_Locale', locale, { expires: 1 })
    }
  }
}
</script>
