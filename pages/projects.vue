<template>
  <div
    class="p-projects"
  >
    <section
      class="p-index-section u-lineLength u-container u-section"
    >
      <h1>Projects</h1>
      <ul>
        <li
          v-for="project in projects"
          :key="project.title"
        >
          <a
            :href="project.link"
            class="p-projects-link"
          >
            <div>
              {{ project.title }}
            </div>
            <div
              class="p-projects-description"
            >
              {{ project.description }}
            </div>
          </a>
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
      projects: [
        {
          title: 'Gidole',
          link: 'https://gidole.github.io/',
          description: 'DIN Interpretation',
        },
        {
          title: 'Monoid',
          link: 'https://larsenwork.com/monoid/',
          description: 'Developer Typeface',
        },
        {
          title: 'AnimalNoteHeads',
          link: 'https://animalnoteheads.com/',
          description: 'Sheet Music Learning (WIP)',
        },
        {
          title: 'MonoMusic',
          link: 'https://larsenwork.com/monomusic/',
          description: 'Font+Tool for Chords+Tabs',
        },
      ],
    }
  },
}
</script>

<style lang="postcss">
.p-projects {
  /* Placeholder */
}
.p-projects-link {
  color: var(--color-bright);
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: var(--spacer-small);
}
.p-projects-description {
  margin-left: auto;
  padding-left: var(--spacer-small);
}
</style>
