<template>
  <main>
    <select class="sort-cards">
      <option value="по умолчанию" class="sort-card__option">
        По умолчанию
      </option>
      <option value="по наименованию" class="sort-card__option">
        По наименованию
      </option>
      <option value="по возрастанию цены" class="sort-card__option">
        По возрастанию цены
      </option>
      <option value="по убыванию цены" class="sort-card__option">
        По убыванию цены
      </option>
    </select>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
</style>
