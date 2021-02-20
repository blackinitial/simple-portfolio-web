<template>
  <main>
    <HeaderFooter />

    <div class="content content--reveal">
      <div class="content__inner">
        <h2 class="content__title">About</h2>
        <h3 class="content__subtitle">Hi, Perkenalkan Saya Ibrohim, seorang Frontend Developer. 
          <br/>saya membuat Modern UI Web dan Design Sistem, fokus di responsive design, 
          <br/>sentuhan interaksi, motion, dan transition.</h3>
        <BackButton />
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
  }
}
</script>