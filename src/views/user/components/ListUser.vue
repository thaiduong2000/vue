<template>
  <div>
    <b-table striped hover :items="items">
      <template #cell(action)>
        <b-button variant="success" class="mr-1">Update</b-button>
        <b-button variant="danger">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
