<template lang="html">
  <div v-if="getLoadingPageState" class="loading-page">
    <v-progress-circular :size="50" color="primary" indeterminate />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getLoadingPageState'])
  }
}
</script>
