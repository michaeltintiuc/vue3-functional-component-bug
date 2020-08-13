<template>
  <MyComponent>foo</MyComponent>
</template>

<script lang="ts">
import { MyComponent } from "./MyComponent";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { MyComponent },
});
</script>

<style>
:root {
  --ion-toolbar-color: #4b4b4b;
  --ion-color-primary: #306ed9;
}
a {
  text-decoration: none;
  color: black;
}
</style>
