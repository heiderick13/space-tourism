<script>

import Navbar from "../components/Navbar.vue"

export default {
  components: { Navbar }
}

</script>

<template>

  <Navbar />

  <section>
    <p class="page-title">01 Pick your destination</p>

    <div id="destinatios-carousel">
      <div id="indicators" class="destinations">
        <span class="destination">Moon</span>
        <span class="destination">Mars</span>
        <span class="destination">Europa</span>
        <span class="destination">Titan</span>
      </div>

      <div id="destination-moon">
        <p class="destinations-title">Moon</p>

        <p class="destination-description">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help
          regain perspective and come back refreshed. While you’re there, take in some history
          by visiting the Luna 2 and Apollo 11 landing sites.
        </p>

        <p class="avg-dist">Avg. distance</p>
        <p class="avg-dist-value">384,400 km</p>

        <p class="est-time">Est. travel time</p>
        <p class="time">3 days</p>
      </div>

      <div id="destination-mars">
        <p class="destinations-title">Mars</p>

        <p class="destination-description">
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
          the tallest planetary mountain in our solar system. It’s two and a half times
          the size of Everest!
        </p>

        <p class="avg-dist">Avg. distance</p>
        <p class="avg-dist-value">225 mil. km</p>

        <p class="est-time">Est. travel time</p>
        <p class="time">9 months</p>
      </div>

      <div id="destination-europa">
        <p class="destinations-title">Europa</p>

        <p class="destination-description">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>

        <p class="avg-dist">Avg. distance</p>
        <p class="avg-dist-value">628 mil. km</p>

        <p class="est-time">Est. travel time</p>
        <p class="time">3 years</p>
      </div>

      <div id="destination-titan">
        <p class="destinations-title">Titan</p>

        <p class="destination-description">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>

        <p class="avg-dist">Avg. distance</p>
        <p class="avg-dist-value">1.6 bil. km</p>

        <p class="est-time">Est. travel time</p>
        <p class="time">7 years</p>
      </div>
    </div>
  </section>
</template>