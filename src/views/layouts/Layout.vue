<template>
  <v-app>
    <div class="fill-height">
      <!-- <Loading /> -->
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </v-app>
</template>

<script>
// import Loading from '@/components/Loading'
export default {
  name: 'App'
  // components: {
  //   Loading
  // }
}
</script>
