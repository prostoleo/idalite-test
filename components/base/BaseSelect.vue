<template>
  <div
    ref="customSelect"
    class="custom-select"
    :tabindex="tabindex"
    @keydown.space="openSelectOnSpace"
    @keydown.esc="escapeSelect"
  >
    <div class="custom-select__selected" @click="toggleOptions">
      <!-- :class="{ open: open }" -->
      <span>{{ selected }}</span>
      <img
        :class="{ active: !!open }"
        src="/arrow-def.svg"
        alt="иконка стрелки"
        width="7.2"
      />
    </div>
    <div v-if="open" class="custom-select__items">
      <div
        v-for="(option, i) of options"
        :key="i"
        tabindex="0"
        @focus="open = true"
        @click="chooseOption(option)"
        @keydown.enter="chooseOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: String,
      required: false,
      default: '0',
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },

  mounted() {
    this.$emit('select', this.selected);

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.open) {
        this.$refs.customSelect.focus();
        this.open = false;
      }
    });

    document.querySelector('body').addEventListener('click', (e) => {
      if (!e.target.closest('.custom-select') && this.open) {
        this.open = false;
      }
    });
  },

  methods: {
    chooseOption(opt) {
      this.selected = opt;
      this.open = false;
      this.$emit('select', opt);
    },

    openSelectOnSpace(e) {
      e.preventDefault();

      if (e.code === 'Space') {
        this.open = true;
      }
    },

    escapeSelect(e) {
      const target = e.target.closest('.custom-select');

      if (!target) return;

      target.focus();
      this.open = false;
    },

    toggleOptions() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/main.scss' as *;

.custom-select {
  position: relative;
  width: max-content;

  margin-left: auto;

  &:focus {
    outline: 1px solid $outline;
  }

  // .custom-select__selected

  &__selected {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    // font-size: 1.2rem;
    padding: 1em 1.6em 1.1em 1.6em;
    background-color: $bg-card;
    border-radius: 0.4rem;
    color: $light-grey;

    cursor: pointer;
    user-select: none;

    box-shadow: 0 0.2rem 0.5rem $dark-shadow;

    span {
      display: inline-block;
      font-size: 1.2rem;
      line-height: 125%;
      font-weight: 400;
      color: $light-grey;
    }

    img {
      transform: rotate(0deg);
      transition: transform 150ms ease-in-out;

      &.active {
        transform: rotate(180deg);
        transition: transform 150ms ease-in-out;
      }
    }
  }

  // .custom-select__items

  &__items {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    width: 100%;

    background-color: $bg-card;
    color: $light-grey;
    border-radius: 0 0 0.4rem 0.4rem;

    box-shadow: 0 0.2rem 0.5rem $dark-shadow;

    div {
      font-size: 1.2rem;
      font-weight: 400;

      color: $light-grey;
      padding: 1em;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: $green;
        color: $white;
      }

      &:focus {
        outline: 1px solid $outline;
      }
    }
  }
}

.selectHide {
  display: none;
}
</style>
