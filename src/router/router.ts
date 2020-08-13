import { h, defineComponent } from "vue";
import { createWebHistory, createRouter, RouterLink } from "vue-router";

const home = defineComponent({
  name: "home",
  async setup() {
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 200);
    });

    return () => h(RouterLink, { to: "/foo" }, "go to /foo");
  },
});

const foo = defineComponent({
  name: "foo",
  async setup() {
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 2000);
    });
    return () => h(RouterLink, { to: "/" }, "go to /");
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: home,
      meta: {
        title: "Home Page - Vue-Port Shop",
      },
    },
    {
      path: "/foo",
      component: foo,
      meta: {
        title: "Category - Vue-Port Shop",
      },
    },
  ],
});

export default router;
