<template>
  <div class="card-list--wrapper">
    <div v-if="loadingComp" class="for-loader" name="fading-circle"></div>
    <div
      v-else-if="!loadingComp && (!currentCards || currentCards.length === 0)"
      class="no-cards"
    >
      <img src="/sad-smile.svg" alt="грустный смайл" />
      <h2>
        К сожалению, ни одного товара не найдено. Добавьте, пожалуйста, товары.
      </h2>
    </div>
    <transition-group v-else name="list" tag="ul" class="card-list">
      <CardItem v-for="card in currentCards" :key="card.id" :info="card" />
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    sortBy: {
      type: String,
      required: true,
      default: 'по умолчанию',
    },
  },
  data() {
    return {};
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
    currentCards() {
      if (this.sortBy === 'по наименованию') {
        return this.cards.slice().sort((a, b) => a.name.localeCompare(b.name));
      }
      if (this.sortBy === 'по возрастанию цены') {
        return this.cards.slice().sort((a, b) => a.price - b.price);
      }
      if (this.sortBy === 'по убыванию цены') {
        return this.cards.slice().sort((a, b) => b.price - a.price);
      }
      return this.cards;
    },
    loadingComp() {
      return window.$nuxt.$loading.percent > 0;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.list-move {
  transition: transform 0.5s ease-out;
}

.for-loader {
  width: 100%;
}

.no-cards {
  width: 100%;

  min-height: 30rem;

  padding-top: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 2rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;

    text-align: center;

    max-width: 65ch;
  }
}

.card-list {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));

  gap: 1.6rem;

  justify-items: start;

  @include mq(xlg) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 33.2rem));
    justify-items: end;
  }

  &--wrapper {
    margin-top: 2.5rem;
  }

  &__item {
    width: 100%;

    display: grid;
    grid-template-rows: 20rem 1fr;
    // justify-self: start;

    border-radius: 0.4rem;

    box-shadow: 0 2rem 3rem $shadow, 0 0.6rem 1rem $light-shadow;

    position: relative;

    @include mq(lg) {
      max-width: 33.2rem;
    }
  }
}
</style>
