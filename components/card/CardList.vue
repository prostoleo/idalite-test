<template>
  <div class="card-list--wrapper">
    <ul class="card-list">
      <!-- <transition-group name="list" tag="li" class="card-list__item card"> -->
      <CardItem v-for="card in cards" :key="card.id" :info="card" />
      <!-- </transition-group> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 2,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 3,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 4,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 5,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 6,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 7,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 8,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 9,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
        {
          id: 1,
          name: 'Фотоаппарат FUJIFILM',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imgSrc:
            'https://tehnobzor.ru/wp-content/uploads/2021/02/fujifilm-x-t4.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.card-list {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(17rem, 33.2rem));

  gap: 1.6rem;

  &--wrapper {
    margin-top: 2.5rem;
  }

  &__item {
    width: 100%;

    display: grid;
    grid-template-rows: 1fr auto;

    border-radius: 0.4rem;

    position: relative;

    box-shadow: 0 2rem 3rem $shadow, 0 0.6rem 1rem $light-shadow;
  }
}
</style>
