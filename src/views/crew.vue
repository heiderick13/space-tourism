<script>
import Navbar from "../components/Navbar.vue"

export default {
  components: { Navbar }
}
</script>

<template>
  <Navbar />
  <div id="meet-your-crew">


    <p class="crew-title">02 Meet your crew</p>

    <div id="commander" class="crew-member">
      <p class="crew-position">Commander</p>
      <p class="member-name">Douglas Hurley</p>

      <p class="member-description">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
    </div>

    <div id="mission-specialist" class="crew-member">
      <p class="crew-position">Mission Specialist</p>
      <p class="member-name">Mark Shuttleworth</p>

      <p class="member-description">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
        the Linux-based Ubuntu operating system. Shuttleworth became the first South
        African to travel to space as a space tourist.
      </p>
    </div>

    <div id="pilot" class="crew-member">
      <p class="crew-position">Pilot</p>
      <p class="member-name">Victor Glover</p>

      p.member-descriptionn<p class="member-description">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy where
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
        station systems flight engineer.
      </p>
    </div>

    <div id="flight-engineer" class="crew-member">
      <p class="crew-position">Flight Engineer</p>
      <p class="member-name">Anousheh Ansari</p>

      <p class="member-description">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
        Ansari was the fourth self-funded space tourist, the first self-funded woman to
        fly to the ISS, and the first Iranian in space.
      </p>
    </div>

  </div>
</template>

<style>

</style>