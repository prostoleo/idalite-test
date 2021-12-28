<template>
  <div class="form--wrapper">
    <h2 class="sidebar__title">Добавление товара</h2>
    <form class="form">
      <div class="form__row">
        <label for="#form-name" class="form__label">Наименование товара</label>
        <input
          id="form-name"
          type="text"
          class="form__input"
          placeholder="Введите наименование товара"
        />
      </div>
      <div class="form__row">
        <label for="form-description" class="form__label">
          Описание товара
        </label>
        <textarea
          id="form-description"
          class="form__input form__input--textarea"
          placeholder="Введите описание товара"
        ></textarea>
      </div>
      <div class="form__row">
        <label for="form-image" class="form__label"
          >Ссылка на изображение товара</label
        >
        <input
          id="form-image"
          type="text"
          class="form__input"
          placeholder="Введите ссылку"
        />
      </div>
      <div class="form__row">
        <label for="#form-price" class="form__label"> Цена товара </label>
        <input
          id="form-price"
          type="text"
          class="form__input"
          placeholder="Введите цену"
        />
      </div>

      <BaseButton
        class="btn-lg btn-submit form__add"
        aria-label="Добавить товар"
      >
        Добавить товар
      </BaseButton>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.sidebar {
  // .sidebar__title

  &__title {
    font-size: 2.4rem;
    font-weight: 600;

    margin-bottom: 1.25em;

    color: $blackish;
  }
}
.form {
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  //.form--wrapper
  &--wrapper {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;

    max-width: 33.2rem;
    width: 100%;
    // width: 100%;
    padding: 2.4rem 2.2rem 2.4rem 2.6rem;

    margin-top: 3.5rem;

    background: $bg-card;

    border-radius: 0.4rem;
    box-shadow: 0 2rem 3rem $shadow, 0 0.6rem 1rem $light-shadow;

    transform: translateX(-120%);

    transition: all 350ms ease-in-out;

    &.active {
      transform: translateX(0%);
    }
  }

  // .form__row

  &__row {
  }

  // .form__label

  &__label {
    display: block;

    font-size: 1rem;
    font-weight: 400;

    margin-bottom: 0.4rem;
  }

  // .form__input

  &__input {
    width: 100%;

    font-size: 1.2rem;
    font-weight: 400;
    padding: 0.83em 1.33em;

    // margin-bottom: 1.6rem;

    color: $greyish;

    background: $bg-card;
    border: none;
    border-radius: 0.4rem;
    box-shadow: 0 0.2rem 0.5rem $dark-shadow;

    /* &:last-of-type {
      margin-bottom: 2.4rem;
    } */

    &::placeholder {
      color: $light-grey;
    }

    &:focus {
      outline: 2px solid $outline;
    }
  }

  // .form__input--textarea

  &__input--textarea {
    resize: vertical;
  }

  // .form__add

  &__add {
    margin-top: 2.4rem;
  }
}
</style>
