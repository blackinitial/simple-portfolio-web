<template>
  <main>
    <HeaderFooter />

    <div class="content content--reveal">
      <div class="content__inner">
        <h2 class="content__title">Projects</h2>
        <h3 class="content__subtitle">This is for Projects page</h3>
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