<template>
  <div class="p-index theme-primary">
    <app-hero/>
    <section class="p-index-section u-lineLength u-container u-section">
      <h1>
        Hi, I'm Andreas
      </h1>
      <p>
        I'm an ambitious and humble healthcare professional turned developer + designer from Copenhagen, Denmark.
      </p>
      <p>
        I'm at LEO Innovation Lab helping people who live with chronic skin diseases. Before that I worked at/with e.g. Momondo, DR and Nationalmuseet.
      </p>
      <p>
        Here you'll find some of the open source tools, posts and projects I've done. One of them being this font Gidole after my hometown in Ethiopia where the እ letter is also from.
      </p>
      <p>
        I hope you find some of it relevant/useful and feel free to contact me. Iʼm always up for a beer or coffee.
      </p>
    </section>
  </div>
</template>

<script>
import hero from '~/components/hero'

export default {
  components: {
    'app-hero': hero
  },
  transition () {
    return {
      mode: ''
    }
  }
}
</script>

<style lang="postcss">
  .p-index {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .p-index-section {
    z-index: 1;
  }
</style>
