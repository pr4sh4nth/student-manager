<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Students List</v-btn>
      <v-btn flat to="/NewStudent">New Student</v-btn>
    </v-toolbar>
    <v-content>
      <br>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NewStudent from "./components/NewStudent";
import Students from "./components/Students";
import EditStudent from "./components/EditStudent";


export default {
  name: "App",
  components: {
    NewStudent,
    Students,
    EditStudent
  },
  data() {
    return {
      //
    };
  }
};
</script>
