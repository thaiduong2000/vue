<template>
  <div class="container">
    <b-form v-if="show">
      <b-form-group class="" label="Name:">
        <b-form-input
          class=""
          v-model="form.email"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Roles:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
        foods: [
          { text: "Select One", value: null },
          "Carrots",
          "Beans",
          "Tomatoes",
          "Corn",
        ],
      },
      show: true,
    };
  },
};
</script>
