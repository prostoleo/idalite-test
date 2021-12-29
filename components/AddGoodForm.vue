<template>
  <div class="form--wrapper">
    <h2 class="sidebar__title">Добавление товара</h2>
    <form ref="formEl" class="form" @submit.prevent="submitForm">
      <div class="form__row">
        <label
          for="#form-name"
          class="form__label"
          :class="{ required: form.name.required }"
          >Наименование товара</label
        >
        <input
          id="form-name"
          v-model.trim="form.name.value"
          type="text"
          class="form__input"
          :class="{ error: form.name.error }"
          placeholder="Введите наименование товара"
          @input="validateInput('name', $event)"
        />
        <small v-if="form.name.error" class="form__error-msg">
          Это поле является обязательным
        </small>
      </div>
      <div class="form__row">
        <label
          for="form-description"
          class="form__label"
          :class="{ required: form.description.required }"
        >
          Описание товара
        </label>
        <textarea
          id="form-description"
          v-model.trim="form.description.value"
          class="form__input form__input--textarea"
          :class="{ error: form.description.error }"
          placeholder="Введите описание товара"
          @input="validateInput('description', $event)"
        ></textarea>
      </div>
      <div class="form__row">
        <label
          for="form-image"
          class="form__label"
          :class="{ required: form.imgSrc.required }"
          >Ссылка на изображение товара</label
        >
        <input
          id="form-image"
          v-model.trim="form.imgSrc.value"
          type="text"
          class="form__input"
          :class="{ error: form.imgSrc.error }"
          placeholder="Введите ссылку"
          @input="validateInput('imgSrc', $event)"
        />
        <small v-if="form.imgSrc.error" class="form__error-msg">
          Это поле является обязательным
        </small>
      </div>
      <div class="form__row">
        <label
          for="#form-price"
          class="form__label"
          :class="{ required: form.price.required }"
        >
          Цена товара
        </label>
        <input
          id="form-price"
          v-model="form.price.value"
          type="text"
          class="form__input"
          :class="{ error: form.price.error }"
          placeholder="Введите цену"
          @input="validateInput('price', $event)"
        />
        <!-- @input="maskPrice" -->
        <small v-if="form.price.error" class="form__error-msg">
          Это поле является обязательным
        </small>
      </div>

      <BaseButton
        :disabled="!!disableSubmit"
        class="btn-lg btn-submit form__add"
        aria-label="Добавить товар"
      >
        Добавить товар
      </BaseButton>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['close-form'],

  data() {
    return {
      form: {
        name: {
          touched: false,
          value: '',
          error: false,
          required: true,
        },
        description: {
          touched: false,
          value: '',
          error: false,
          required: false,
        },
        imgSrc: {
          touched: false,
          value: '',
          error: false,
          required: true,
        },
        price: {
          touched: false,
          value: '',
          error: false,
          required: true,
        },
      },
      totalError: false,
      disableSubmit: true,
    };
  },

  computed: {},

  watch: {},

  methods: {
    validateInput(field, event) {
      console.log('event: ', event);

      /* if (field === 'price') {
        // this.maskPrice(event.target.value);
        this.form[field].value = parseInt(
          this.form[field].value
        ).toLocaleString('ru-RU');
      } */

      this.form[field].touched = true;

      if (this.form[field].value === '' && this.form[field].required) {
        this.form[field].error = true;
        this.totalError = true;
        this.disableSubmit = true;

        return;
      }

      this.form[field].error = false;
      this.checkAllValidity(field);
    },

    maskPrice(x) {
      console.log('x: ', x);
      /* this.form.price.value = this.form.price.value
        .slice()
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' '); */
      this.form.price.value = x
        .slice()
        .toString()
        .replaceAll(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    checkAllValidity() {
      const isAllReqInputsValid = Object.entries(this.form).every(
        ([key, value]) => {
          // return !value.error && value.touched;
          return value.required ? !value.error && value.touched : true;
        }
      );
      console.log('isAllReqInputsValid: ', isAllReqInputsValid);

      if (isAllReqInputsValid) {
        this.totalError = false;
        this.disableSubmit = false;
      }
    },

    submitForm() {
      if (this.totalError || this.disableSubmit) return;

      const newItem = {
        id: parseInt(Date.now().toString().slice(-4)),
        name: this.form.name.value,
        description: this.form.description.value,
        imgSrc: this.form.imgSrc.value,
        price: parseFloat(this.form.price.value),
      };

      console.log('newItem: ', newItem);

      this.resetForm();
      this.$emit('close-form');
      this.$store.dispatch('addCard', newItem);
    },

    resetForm() {
      this.totalError = false;
      this.disableSubmit = true;

      Object.values(this.form).forEach((item) => {
        item.touched = false;
        item.error = false;
        item.value = '';
      });
    },
  },
};
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

  position: relative;

  @include mq(xlg) {
    max-width: 33.2rem;
    width: 100%;
    // width: 100%;
    padding: 2.4rem 2.2rem 2.4rem 2.6rem;

    margin-top: 3.5rem;

    background: $bg-card;

    border-radius: 0.4rem;
    box-shadow: 0 2rem 3rem $shadow, 0 0.6rem 1rem $light-shadow;

    position: sticky;
    top: 2.4rem;
  }

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

    @include mq(xlg) {
      position: unset;
      transform: translateX(0%);
      box-shadow: none;
      margin-top: 0;
      padding: 0;
      background: unset;
      z-index: unset;

      // для того чтобы position sticky работало
      height: 100%;
    }

    &.active {
      transform: translateX(0%);
    }
  }

  // .form__row

  &__row {
    position: relative;
  }

  // .form__label

  &__label {
    display: block;
    width: max-content;

    font-size: 1rem;
    font-weight: 400;

    margin-bottom: 0.4rem;

    position: relative;

    &.required {
      &::after {
        content: '';
        position: absolute;

        right: 0;
        top: 0;

        transform: translate(100%, 0%);

        width: 0.4rem;
        height: 0.4rem;

        background: $alert;
        border-radius: 50%;
      }
    }
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
    &.error {
      outline: 1px solid $alert;
    }

    &::placeholder {
      color: $light-grey;
    }

    &:focus {
      outline: 1px solid $outline;
    }
  }

  // .form__input--textarea

  &__input--textarea {
    resize: vertical;
  }

  // .form__error-msg
  &__error-msg {
    position: absolute;

    top: calc(100% + 0.4rem);
    left: 0%;

    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: -2%;

    color: $alert;
  }

  // .form__add

  &__add {
    margin-top: 2.4rem;
  }
}
</style>
