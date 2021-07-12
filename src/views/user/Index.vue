<template>
  <div>
    <ListUser :items="items" />
  </div>
</template>
<script>
import ListUser from "./components/ListUser.vue";
export default {
  components: {
    ListUser,
  },
  data() {
    return {
      items: [
        { Id: 1, Name: "Dickerson", Roles: "Macdonald", action: "<a >sửa<a/>" },
        { Id: 2, Name: "Larsen", Roles: "Shaw" },
        { Id: 3, Name: "Geneva", Roles: "Wilson" },
        { Id: 4, Name: "Jami", Roles: "Carney" },
      ],
    };
  },
};
</script>
