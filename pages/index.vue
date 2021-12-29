<template>
  <BaseContainer>
    <div class="page--content">
      <SidebarComp />
      <MainComp />
    </div>
  </BaseContainer>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss">
@use '../assets/css/normalize.css' as *;
@use '../assets/scss/main.scss' as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}

html {
  font-size: 10px;
}

body {
  font-size: 1rem;
}

.container {
  max-width: 1376px;
  margin: 0 auto;

  width: 95.56%;

  padding: 3.2rem 0;
}

.page--content {
  position: relative;

  @include mq(xlg) {
    position: unset;
    display: flex;
    // align-items: flex-start;
    align-items: stretch;

    gap: 1.6rem;
  }
}
</style>
