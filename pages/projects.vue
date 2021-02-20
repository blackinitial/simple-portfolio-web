<template>
  <main>
    <HeaderFooter />

    <div id="scroll" data-scroll-container class="content content--reveal">
      <div class="content__inner">
        <h2 class="content__title">Projects</h2>
        <h3 class="content__subtitle">Ini hanya daftar project fiktif belaka</h3>
      </div>

      <div class="gallery">
        <div class="back-mod">
          <BackButton/>
        </div>
        <figure v-for="(gallery, index) in galleries" :key="gallery.title" class="gallery__item">
          <div class="gallery__item-img" :style="gallery.background" data-scroll data-scroll-speed="-0.8">
            <span class="gallery__item-type">{{gallery.type}}</span>
          </div>
          <figcaption class="gallery__item-caption">
            <h2 class="gallery__item-title" data-scroll data-scroll-speed="1">{{gallery.title}}</h2>
            <span class="gallery__item-number" data-scroll data-scroll-speed="1.5">0{{index+1}}</span>
            <a class="gallery__item-link">lihat</a>
          </figcaption>
        </figure>
      </div>

    </div>
  </main>
</template>

<script>
import HeaderFooter from '~/components/HeaderFooter'
import BackButton from '~/components/BackButton';
export default {
  components: {
    BackButton,
    HeaderFooter
  },

  data: () => ({
    galleries: [
      {
        title: 'Awwwards',
        type: 'A',
        background: `background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);`
      },
      {
        title: 'Grabient',
        type: 'G',
        background: `background-color: #0093E9; background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);`
      },
      {
        title: 'Nuxt',
        type: 'N',
        background: `background-color: #85FFBD; background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);`
      },
      {
        title: 'Anime JS',
        type: 'A',
        background: `background-color: #8EC5FC; background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);`
      },
      {
        title: 'Radix',
        type: 'R',
        background: `background-color: #8EC5FC; background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);`
      }
    ],
    lms: null
  }),

  mounted() {
    this.lmS = new this.LocomotiveScroll({
      el: document.querySelector("#scroll"),
      smooth: true,
      direction: 'horizontal'
    });
  }
}
</script>

<style lang="scss" scoped>
// modify
.content.content--reveal {
  height: 100vh;
  width: auto;
}
.back-mod {
  margin: auto;
  position: relative;
  right: -2rem;
  bottom: -1rem;
}

.gallery {
  display: flex;
  padding-right: 12vw;
  margin-left: 5vw;
  overflow-x: visible;
  transform: rotate(-4deg);
  transform-origin: center;
  &__item {
    margin: 0 3em;
    display: grid;
    grid-template-areas: '... ...'
    '... gallery-image'
    '... ...';
    grid-template-columns: 3rem 12rem;
    grid-template-rows: 3rem 18rem 1rem;

    &-img {
      grid-area: gallery-image;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      background: var(--color-accent);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-type {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 101.66px;
      color: var(--color-accent);
    }

    &-caption {
      grid-area: 1/1/4/3;
      display: grid;
      grid-template-areas: 'gallery-number gallery-title'
      '... ...'
      'gallery-link ...';
      grid-template-columns: 3rem 12rem;
      grid-template-rows: 3rem 18rem 1rem;
    }
    &-title, &-number {
      font-family: var(--font-display);
      font-weight: 800;
      font-style: italic;
      align-self: center;
      transform: translateX(15%);
    }
    &-title {
      grid-area: gallery-title;
      margin: 0;
      font-size: 38.83px;
      justify-self: start;
      color: var(--color-text-black);
    }
    &-number {
      grid-area: gallery-number;
      font-size: 62.83px;
      justify-self: end;
      color: var(--color-link-hover);
      padding-left: 2rem;
    }
    &-link {
      grid-area: gallery-link;
      align-self: end;
      font-size: 14.83px;
      text-decoration: underline;
      font-style: italic;
      letter-spacing: 2px;
      color: var(--color-text-white);
      background: var(--color-bg);
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: var(--color-bg);
        background: var(--color-text-white);
      }
    }
  }
}
</style>