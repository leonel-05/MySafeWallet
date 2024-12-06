<template>
  <div class="spinner" v-if="loading">
    <p>Cargando...</p>
  </div>
</template>

<script>
export default {
  props: {
    loading: { type: Boolean, Required: true },
  },
};
</script>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  text-align: center;
}
</style>
