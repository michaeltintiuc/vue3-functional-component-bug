import { FunctionalComponent, h } from "vue";

export const MyComponent: FunctionalComponent<{}, string[]> = (
  props,
  { emit, slots }
) => {
  emit("foo", "bar");
  return h("div", props, slots);
};
