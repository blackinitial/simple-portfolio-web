<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
// reset style
@import "~/assets/normalize.css";

:root {
  --color-text: #D3D5FD;
	--color-bg: #0B0B0D;
	--color-link: #D3D5FD;
	--color-link-hover: #d3d5fd80;
  --font-text: 'Raleway', sans-serif;
  --font-display: 'Abril Fatface', sans-serif;
}

html, body {
  font-family:
    'Raleway',
    sans-serif;
  font-size: 24px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: var(--color-link);
  text-decoration: unset;
  &:hover {
    color: var(--color-link-hover)
  }
}

.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;

  &--reveal {
    position: absolute;
    z-index: 1001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
  }
  
  &--fixed {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: grid;
    width: 100%;
    height: 100vh;
    padding: 3em;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 
    'header ...'
    'social-media info';

    .header {
      grid-area: header;
      align-self: start;
      justify-self: start;
      &__title {
        letter-spacing: -9px;
        font-family: var(--font-display);
        margin: 0;
      }
    }

    .social-media {
      grid-area: social-media;
      align-self: end;
      justify-self: start;
      list-style-type: none;
      display: flex;
      a {
        margin-right: 16px;
      }
      svg {
        fill: var(--color-text);
        &:hover {
          fill: var(--color-link-hover);
        }
      }
    }

    .info {
      font-size: 24px;
      grid-area: info;
      align-self: end;
      justify-self: end;
      color: #929AAB;
    }
  }
}

</style>
