<template>
  <div>
    <p>Gradients under text/ui are used to increase contrast but should often be as invisible as possible. The examples below have the same amount of blackness behind the text.</p>
    <div class="c-gradientExamples u-grid">
      <div
          class="c-gradientExamples-item"
          >
          <div
              class="c-gradientExamples-item-scrim c-gradientExamples-item-scrim--linear"
              >
              Linear
          </div>
          <img
              src="~/assets/images/gradient-plant.jpg"
              alt="plant"
              />
      </div>
      <div
          class="c-gradientExamples-item"
          >
          <div
              class="c-gradientExamples-item-scrim c-gradientExamples-item-scrim--easing"
              >
              Easing
          </div>
          <img
              src="~/assets/images/gradient-plant.jpg"
              alt="plant"
              />
      </div>
    </div>
    <p>When transitioning between colors the edges become prominent if we don't ease-in-out of it. The image fade-out on <nuxt-link to="/">my frontpage</nuxt-link> uses this technique too.</p>
    <div class="c-gradientExamples u-grid">
      <div
          class="c-gradientExamples-item u-aspect--1-1"
          >
          <div
              class="c-gradientExamples-item-momondo c-gradientExamples-item-momondo--linear u-position-cover"
              >
              Linear
          </div>
      </div>
      <div
          class="c-gradientExamples-item u-aspect--1-1"
          >
          <div
              class="c-gradientExamples-item-momondo c-gradientExamples-item-momondo--easing u-position-cover"
              >
              Easing
          </div>
      </div>
    </div>
    <p>I believe that there are many designs out there that could benefit from this approach, including the Spotify player shown below (click to see the big picture).</p>
    <div class="c-gradientExamples u-grid">
      <a
          href="/images/gradient-spotify-linear.jpg"
          class="c-gradientExamples-item"
          >
        <img
            src="/images/gradient-spotify-linear.jpg"
            alt="spotify with linear gradient"
            />
      </a>
      <a
          href="/images/gradient-spotify-easing.jpg"
          class="c-gradientExamples-item"
          >
        <img
            src="/images/gradient-spotify-easing.jpg"
            alt="spotify with easing gradient"
            />
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.c-gradientExamples {
  grid-template-columns: repeat(2, 1fr);
  margin-top: var(--lineHeight-margin-small);
  margin-bottom: var(--lineHeight-margin-small);
}

.c-gradientExamples-item {
  border-radius: var(--spacer-small);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--color-bright);
  text-align: center;
}

.c-gradientExamples-item-scrim {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: var(--spacer-xsmall) var(--spacer-small);

  &.c-gradientExamples-item-scrim--linear {
    background-image: linear-gradient(
      transparent,
      hsla(0, 0%, 0%, 0.8)
    )
  }

  &.c-gradientExamples-item-scrim--easing {
    padding-top: var(--spacer-medium);
    background-image: linear-gradient(
      transparent,
      cubic-bezier(0.45, 0, 0.5, 0.5),
      hsla(0, 0%, 0%, 0.7)
    )
  }
}

.c-gradientExamples-item-momondo {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:
    linear-gradient(
      100deg,
      rgba(58,205,252,.6),
      rgba(255,71,179,.6),
      rgba(255,151,38,.6)
    ),
    linear-gradient(
      rgb(30, 6, 60),
      rgb(30, 6, 60)
    );
  background-repeat: no-repeat;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
  }

}

.c-gradientExamples-item-momondo--linear {
  background-size: 100% calc(100% - var(--spacer-small) * 2), 100% 100%;
  background-position: 0% var(--spacer-small), 0% 0%;

  &::before, &::after {
    height: calc(1px + 50% - var(--lineHeight-body) / 2 - var(--spacer-medium));
  }

  &::before {
    top: calc(var(--spacer-small) - 1px);
    background-image: linear-gradient(
      rgb(30, 6, 60) 1px,
      rgba(30, 6, 60, 0)
    );
  }

  &::after {
    bottom: calc(var(--spacer-small) - 1px);
    background-image: linear-gradient(
      to top,
      rgb(30, 6, 60) 1px,
      rgba(30, 6, 60, 0)
    );
  }
}

.c-gradientExamples-item-momondo--easing {
  background-size: 100% calc(100% - var(--spacer-xsmall) * 2), 100% 100%;
  background-position: 0% var(--spacer-xsmall), 0% 0%;

  &::before, &::after {
    height: calc(1px + 50% - var(--lineHeight-body) / 2 - var(--spacer-small));
  }
  &::before {
    top: calc(var(--spacer-xsmall) - 1px);
    background-image: linear-gradient(
      rgb(30, 6, 60),
      cubic-bezier(.42,0,.58,1),
      rgba(30, 6, 60, 0)
    );
  }

  &::after {
    bottom: calc(var(--spacer-xsmall) - 1px);
    background-image: linear-gradient(
      to top,
      rgb(30, 6, 60),
      cubic-bezier(.42,0,.58,1),
      rgba(30, 6, 60, 0)
    );
  }
}
</style>
