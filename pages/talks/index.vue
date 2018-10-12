<template>
  <div
    class="p-talks"
  >
    <section
      class="p-index-section u-lineLength u-container u-section"
    >
      <h1>Talks</h1>
      <ul>
        <li
          v-for="talk in talks"
          :key="talk.title"
        >
          <nuxt-link
            :to="talk.link"
            class="p-talks-link"
            append
          >
            <div>
              {{ talk.title }}
            </div>
            <div
              class="p-talks-date"
            >
              {{ talk.date }}
            </div>
            <div
              class="p-talks-location"
            >
              {{ talk.location }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  transition() {
    return {
      mode: '',
    }
  },
  data() {
    return {
      talks: [
        {
          link: 'piter',
          title: 'Easing Gradients, the Squircle of Colors',
          location: 'PiterCSS, Saint Petersburg',
          date: '2018.06.10',
        },
      ],
    }
  },
}
</script>

<style lang="postcss">
@import '../../assets/css/_settings.css';

.p-talks {
  /* Placeholder */
}

.p-talks-link {
  color: var(--color-bright);
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: var(--spacer-small);
}
.p-talks-date {
  margin-left: auto;
  padding-left: var(--spacer-small);
}

.p-talks-location {
  text-align: right;
  flex-basis: 100%;
  flex-shrink: 0;
}
</style>
