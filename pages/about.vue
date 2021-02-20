<template>
  <main>
    <HeaderFooter />

    <div class="content content--reveal">
      <div class="content__inner">
        <h2 class="content__title">About</h2>
        <h3 class="content__subtitle">Hi, Perkenalkan Saya Ibrohim, seorang Frontend Developer. 
          saya membuat Modern UI Web dan Design Sistem, fokus di responsive design, 
          interaksi desain, motion, dan transition.</h3>

        <BackButton/>
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

  transition: {
    mode: 'out-in',
    css: false,
    enter(el, done) {
      // set stagger animation
      this.$anime.set(['.content__title', '.content__subtitle'], {
        translateY: 25,
        opacity: 0
      })
      // add stagger animation
      this.$anime.timeline()
      .add({
        targets: ['.content__title', '.content__subtitle'],
        translateY: 0,
        opacity: 1,
        easing: 'easeOutElastic(1, .6)',
        delay: this.$anime.stagger(100),
        complete: done
      })
    },
    leave(el, done) {
      this.$anime.timeline()
      .add({
        targets: ['.content__title', '.content__subtitle'],
        translateY: 25,
        opacity: 0,
        easing: 'easeOutElastic(1, .6)',
        delay: this.$anime.stagger(100),
        complete: done
      }).reverse
    }
  }
}
</script>