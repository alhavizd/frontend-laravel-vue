<template>
  <v-app>
    <div class="fill-height">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
