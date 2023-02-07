<script>
import Navbar from "../components/Navbar.vue"

export default {
  components: {Navbar}
}
</script>

<template>
  <Navbar/>

  <div id="techs-carousel">
    <p class="page-title">03 Space launch 101</p>

    <div id="indicators" class="d-flex flex-column">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>

    <div id="launch">
      <p class="terminology">The terminology...</p>
      <div class="tech">Launch vehicle</div>

      <p class="tech-description">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
        payload from Earth's surface to space, usually to Earth orbit or beyond. Our
        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
        it's quite an awe-inspiring sight on the launch pad!
      </p>
    </div>
    <div id="spaceport">
      <p class="terminology">The terminology...</p>
      <div class="tech">Spaceport</div>

      <p class="tech-description">
        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships
        or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage
        of the Earth’s rotation for launch.
      </p>
    </div>
    <div id="capsule">
      <p class="terminology">The terminology...</p>
      <div class="tech">Space Capsule</div>

      <p class="tech-description">
        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
      </p>
    </div>

  </div>

</template>

<style>
</style>