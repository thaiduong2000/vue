const Index = () => import("@/views/user/Index.vue");
const Create = () => import("@/views/user/Create.vue");

const Layout = {
  template: "<router-view />",
};

const userRoutes = {
  path: "/users",
  name: "Users",
  component: Layout,
  children: [
    {
      path: "",
      name: "Index",
      component: Index,
    },
    {
      path: "create",
      name: "Create",
      component: Create,
    },
  ],
};

export default userRoutes;
