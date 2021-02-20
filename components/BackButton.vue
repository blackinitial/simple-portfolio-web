<template>
  <button
    class="backButton"
    @click="onClick()"
    v-anime.set="{
      scale: 2,
      opacity: 0
    }">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 10L8 24L22 38" stroke="#373738" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 24H40" stroke="#373738" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$anime({
      targets: '.backButton',
      scale: 2,
      opacity: 0,
      easing: 'easeOutElastic(1, .6)',
      duration: 800,
      complete: () => this.$router.back()
    }).reverse
    }
  },
  mounted() {
    // add stagger animation
    this.$anime({
      targets: '.backButton',
      scale: 1,
      opacity: 1,
      easing: 'easeOutElastic(1, .6)'
    })
  }
}
</script>