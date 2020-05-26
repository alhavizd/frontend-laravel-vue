<template lang="html">
  <div class="">
    <v-progress-circular :size="50" color="primary" indeterminate />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>
