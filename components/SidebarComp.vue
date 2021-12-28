<template>
  <aside class="sidebar-wrapper">
    <button
      class="btn btn-toggle-sidebar"
      type="button"
      aria-label="Открыть / закрыть меню"
      @click="toggleSidebar"
    >
      <img
        :src="`/${iconToggleMenu}-menu.svg`"
        alt="Иконка открыть / закрыть меню"
      />
    </button>
    <AddGoodForm :class="{ active: isSidebarOpen }" />
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    }
  },

  computed: {
    iconToggleMenu() {
      return this.isSidebarOpen ? 'close' : 'open'
    },
  },

  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

.sidebar-wrapper {
  // position: relative;
  position: absolute;
  top: 0.6rem;
  left: 0;
  right: 0;

  width: 100%;

  @include mq(xlg) {
    position: unset;

    flex: 1 0 33.2rem;
  }

  // flex-grow: 1;
}

.btn-toggle-sidebar {
  @include mq(xlg) {
    display: none;
  }
}
</style>
