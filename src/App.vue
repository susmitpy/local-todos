<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-row class="text-left">
        <v-col cols="12"> Local ToDos - Stored Locally On Your Device </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer absolute>
      <v-layout grow justify-center>
        <div class="ml-3" align="center">Made by Susmit</div>
        
        <a href="https://www.github.com/susmitpy" class="ml-4" style="text-decoration:none" target="_blank">
          <v-icon>mdi-github</v-icon>
        </a>

        <a href="https://www.linkedin.com/in/susmit-vengurlekar/" class="ml-4" style="text-decoration:none" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </a>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
