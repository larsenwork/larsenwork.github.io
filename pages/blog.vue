<template>
  <div
    class="p-blog"
  >
    <section
      class="p-index-section u-lineLength u-container u-section"
    >
      <h1>Blog (WIP)</h1>

      <!-- <ul>
        <li
          v-for="blog in blogs"
          :key="blog.title"
        >
          <nuxt-link
            :to="blog.link"
            class="p-blog-link"
            append
          >
            <div>
              {{ blog.title }}
            </div>
            <div
              class="p-blog-date"
            >
              {{ blog.date }}
            </div>
            <div
              class="p-blog-location"
            >
              {{ blog.location }}
            </div>
          </nuxt-link>
        </li>
      </ul> -->
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
      blogs: [
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
.p-blog {
  /* Placeholder */
}

.p-blog-link {
  color: var(--color-bright);
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: var(--spacer-small);
}
.p-blog-date {
  margin-left: auto;
  padding-left: var(--spacer-small);
}

.p-blog-location {
  text-align: right;
  flex-basis: 100%;
  flex-shrink: 0;
}
</style>
