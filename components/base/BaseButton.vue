<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.btn-lg {
  width: 100%;
  display: block;
}

.btn-submit {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;

  padding: 1rem 0 1.1rem;

  color: $white;
  background: $green;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.4rem $dark-shadow;
  // border: 1px solid transparent;

  letter-spacing: -0.02em;

  transition: all 150ms ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    filter: brightness(90%);
  }

  &:focus {
    outline: 2px solid $outline;
    outline-offset: 0.2em;
  }

  &:disabled {
    background: $disabled;
    color: $greyish;
    cursor: not-allowed;
  }
}
</style>
