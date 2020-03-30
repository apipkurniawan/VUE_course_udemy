<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <p>Name is {{ name }}</p>
    <p>Age is {{ age }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          :resetFn="resetName"
          :userAge="age"
          @nameWasReset="name = $event"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data: function() {
    return {
      name: "Max",
      age: 27
    };
  },
  methods: {
    changeName: function() {
      this.name = "apip";
    },
    resetName: function() {
      this.name = "max";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
