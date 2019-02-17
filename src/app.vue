<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main>
      <nav-tabbar></nav-tabbar>
    </f7-view>

  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'
import NavigationTabBar from './pages/components/navigationTabBar.vue'

export default {
  components: {
    [NavigationTabBar.name]: NavigationTabBar
  },
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.myrom.com', // App bundle ID
        name: 'myRom', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      },
    }
  }
}
</script>
