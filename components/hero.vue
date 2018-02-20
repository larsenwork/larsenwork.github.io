<template>
  <div class="hero">
    <div class="hero-gradient u-position-cover"/>
    <img
      class="hero-img"
      src="https://res.cloudinary.com/larsenwork/image/upload/w_1000/v1517138735/andreas.jpg"
      srcset="https://res.cloudinary.com/larsenwork/image/upload/w_500/v1517138735/andreas.jpg 500w,
            https://res.cloudinary.com/larsenwork/image/upload/w_1000/v1517138735/andreas.jpg 1000w,
            https://res.cloudinary.com/larsenwork/image/upload/w_1500/v1517138735/andreas.jpg 1500w,
            https://res.cloudinary.com/larsenwork/image/upload/w_2000/v1517138735/andreas.jpg 2000w"
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
@import '../assets/css/_media.css';

.hero {
  position: relative;
  margin-bottom: -5rem;

  @media (--large) {
    max-width: var(--img-maxWidth);
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 75%;
    max-height: 20rem;
    background: linear-gradient(
      to bottom,
      transparent,
      cubic-bezier(0.55, 0, 0.55, 1),
      hsl(0, 0%, 8%)
    );
  }
}

.hero-img {
  display: block;
  width: 100%;
  height: 80vw;
  min-height: 40vh;
  max-height: 20rem;
  object-fit: cover;
}

.hero-gradient {
  opacity: 0;
  will-change: opacity;
  transition: var(--transition);

  @media (--large) {
    opacity: 1;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    width: 20%;
    background: linear-gradient(
      to left,
      transparent,
      cubic-bezier(0.55, 0, 0.55, 1),
      hsl(0, 0%, 8%)
    );
  }

  &::before {
    left: -1px;
  }

  &::after {
    right: -1px;
    transform: rotate(180deg);
  }
}
</style>
