<script>
import Navbar from "../components/Navbar.vue"

export default {
  components: { Navbar }
}
</script>

<template>
  <div id="body">
    <Navbar />

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="sub-title">So, you want to travel to</p>
          <h1 class="title">Space</h1>
          <p class="trip-description">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div class="col-md-6">
          <p class="explore">Explore</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#body {
  height: 100vh;
  background-image: url(../assets/home/background-home-desktop.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.navbar {
  display: flex;
  justify-content: space-between;
}



.container-fluid {
  background-color: transparent;
}
</style> 