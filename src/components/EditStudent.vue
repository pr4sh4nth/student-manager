<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Edit Student</v-toolbar-title>
        </v-toolbar>
        <v-form>
          <v-container>
            <v-layout>
              <v-flex xs12 md4>
                <v-text-field v-model="name" label="Name" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn @click="submit">submit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
    <br>
    <Students/>
  </div>
</template>

<script>
import axios from "axios";
import Students from "./Students";

export default {
  data() {
    return {
      name: ""
    };
  },
  async created() {
      this.name = (await axios.get(`http://localhost:3000/students?id=${this.$route.params.id}`)).data[0].name;
  },
  methods: {
    async submit() {
      axios.put(`http://localhost:3000/students/${this.$route.params.id}`, { name: this.name });
    }
  },
  components: {
      Students
  }
};
</script>