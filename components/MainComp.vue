<template>
  <main>
    <div class="sort-cards--wrapper">
      <select class="sort-cards">
        <option value="по умолчанию" class="sort-cards__option">
          По умолчанию
        </option>
        <option value="по наименованию" class="sort-cards__option">
          По наименованию
        </option>
        <option value="по возрастанию цены" class="sort-cards__option">
          По возрастанию цены
        </option>
        <option value="по убыванию цены" class="sort-cards__option">
          По убыванию цены
        </option>
      </select>
    </div>

    <CardList />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

main {
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
