<template>
  <!-- class="card-list__item card" -->
  <li :key="info.id" class="card-list__item card">
    <header class="card__header">
      <img
        :src="info.imgSrc"
        :alt="`фотография ${info.title}`"
        class="card__img"
      />
    </header>
    <div class="card__content">
      <div class="card__body">
        <h3 class="card__title">
          {{ info.name }}
        </h3>
        <p class="card__description">
          {{ info.description }}
        </p>
      </div>
      <footer class="card__footer">
        <span class="card__price"> {{ formattedPrice }} руб. </span>
      </footer>
    </div>
    <button class="btn card__delete" @click="deleteItem(info.id)">
      <img src="/delete.svg" alt="удалить товар" />
    </button>
  </li>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },

  computed: {
    formattedPrice() {
      return new Intl.NumberFormat(navigator.locale).format(this.info.price);
    },
  },

  methods: {
    deleteItem(id) {
      this.$store.dispatch('deleteCard', id);
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.card-list {
  // .card-list__item

  &__item {
  }
}
.card {
  &:hover {
    .card__delete {
      opacity: 1;
      pointer-events: auto;
    }
  }

  // overflow: hidden;

  // .card__header

  &__header {
  }

  // .card__img

  &__img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 0.4rem 0.4rem 0 0;
    object-fit: contain;

    margin: 0 auto;
  }

  // .card__content

  &__content {
    padding: 1.6rem 1.6rem 2.4rem 1.6rem;

    display: grid;
    grid-template-rows: 1fr auto;
  }

  // .card__body

  &__body {
  }

  // .card__title

  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 125%;

    color: $blackish;
  }

  // .card__description

  &__description {
    margin-top: 1em;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 125%;

    color: $greyish;
  }

  // .card__footer

  &__footer {
    margin-top: 2.4rem;
  }

  // .card__price

  &__price {
    display: inline-block;
    font-size: 2.4rem;
    font-weight: 600;

    color: $greyish;
  }

  // .card__delete

  &__delete {
    opacity: 0;
    pointer-events: none;

    position: absolute;
    top: 0;
    right: 0;

    background: $alert;

    transform: translate(0%, -50%);

    border-radius: 1rem;
    padding: 0.8em;

    transition: all 150ms ease-in-out;

    @include mq(med) {
      transform: translate(50%, -50%);
    }
  }
}
</style>
