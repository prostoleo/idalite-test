<template>
  <main>
    <div class="sort-cards--wrapper">
      <BaseSelect
        :options="options"
        :default="defaultOption"
        class="select"
        @select="selectOption"
      />
    </div>

    <CardList :sort-by="currentOption" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      options: [
        'по умолчанию',
        'по наименованию',
        'по возрастанию цены',
        'по убыванию цены',
      ],
      defaultOption: 'по умолчанию',
      currentOption: 'по умолчанию',
    }
  },

  methods: {
    selectOption(option) {
      this.currentOption = option
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

main {
  @include mq(xlg) {
    flex: 1 1 100%;
  }

  .sort-cards {
    display: block;
    margin-left: auto;
    padding: 0.83em 1.33em;

    font-size: 1.2rem;
    font-weight: 400;

    border: none;
    border-radius: 0.4rem;

    color: $light-grey;
    background: $bg-card;

    box-shadow: 0 0.2rem 0.5rem $dark-shadow;

    position: relative;
    z-index: 2;

    // .sort-cards-wrapper
    &--wrapper {
    }
  }
}
</style>
