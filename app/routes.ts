import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/main-layout/index.tsx", [
    index("pages/home/_index.tsx"),
    route("hello-world", "pages/helloworld/_index.tsx"),
    route("about", "pages/about/_index.tsx"),
  ]),
] satisfies RouteConfig;
