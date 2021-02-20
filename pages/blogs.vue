<template>
  <main>
    <HeaderFooter />

    <div class="content content--reveal">
      <div class="content__inner">
        <h2 class="content__title">Blogs</h2>
        <h3 class="content__subtitle">Ini hanya halaman blog fiktif belaka</h3>
      </div>

      <ul class="blog__list">
        <li v-for="blog in blogs" :key="blog.title" class="blog__post">
          <h2 class="blog__post-title">
            <a href="">{{ blog.title }}</a>
          </h2>
          <span class="blog__post-meta">Dipublikasi pada tanggal <time>20 Februari 2021</time></span>
        </li>
      </ul>

      <BackButton />
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
    blogs: [
      {title: 'Auto-Sizing Columns in CSS Grid: auto-fill vs auto-fit'},
      {title: 'On Switching from HEX & RGB to HSL'},
      {title: 'Creating Accessible Icon Buttons'},
      {title: 'Nested Links Without Nesting Links'},
      {title: 'Global and Component Style Settings with CSS Variables'},
      {title: 'CSS vs. SVG: Shapes and Arbitrarily-Shaped UI Components'}
    ]
  }),

  transition: {
    mode: 'out-in',
    css: false,
    enter(el, done) {
      // set stagger animation
      this.$anime.set(['.content__title', '.content__subtitle'], {
        translateY: 25,
        opacity: 0
      })
      this.$anime.set('.blog__post', {
        translateX:50,
        opacity: 0
      })
      // add stagger animation
      let blogPost = el.querySelectorAll('.blog__post')
      this.$anime.timeline()
      .add({
        targets: ['.content__title', '.content__subtitle'],
        translateY: 0,
        opacity: 1,
        easing: 'easeOutElastic(1, .6)',
        delay: this.$anime.stagger(100),
        complete: done
      }).add({
        targets: blogPost,
        translateX: 0,
        opacity: 1,
        easing: 'easeOutElastic(1, .6)',
        delay: this.$anime.stagger(200),
        complete: done
      })
    },
    leave(el, done) {
      let blogPost = el.querySelectorAll('.blog__post')
      this.$anime.timeline()
      .add({
        targets: ['.content__title', '.content__subtitle'],
        translateY: 0,
        opacity: 1,
        easing: 'easeOutElastic(1, .6)',
        delay: this.$anime.stagger(100),
        complete: done
      }).add({
        targets: blogPost,
        translateX: 0,
        opacity: 1,
        easing: 'easeOutElastic(1, .6)',
        delay: this.$anime.stagger(200),
        complete: done
      }).reverse
    }
  }
}
</script>