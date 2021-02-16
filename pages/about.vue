<template>
  <main>
    <HeaderFooter />

    <div class="content content--reveal">
      <div class="content__inner">
        <h2 class="content__title">About</h2>
        <h3 class="content__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis dolores deserunt excepturi odit, rem temporibus laudantium corrupti incidunt nihil unde et eum doloremque vero fugiat, nam, ipsa sapiente maiores.</h3>
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