<template>
  <v-sheet color="#BBDEFB" height="250px" class="pt-10">
    <v-card color="indigo" class="ma-15" elevation="5" rounded="x1">
      <v-card-title>Hello world</v-card-title>
    </v-card>
  </v-sheet>
  <v-row no-gutters>
    <v-col v-for="i in 10" :key="i" cols="12" sm="6" md="4" lg="3">
      <v-card class="ma-1">
        <v-card-title> {{ i }} </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
