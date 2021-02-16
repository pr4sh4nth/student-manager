<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Students</v-toolbar-title>
      </v-toolbar>

      <v-container class="text-xs-center">
        <v-progress-circular
          v-if="!$store.getters.isLoaded"
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-container>

      <v-list v-if="$store.getters.isLoaded">
        <v-list-tile
          v-for="(student, index) in $store.getters.students"
          :to="'editStudent/' + index"
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="student.fullName"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  async created() {},
  computed: mapState({
    students: (state) => state.students,
  }),
};
</script>
