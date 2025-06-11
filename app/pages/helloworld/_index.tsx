import type { Route } from "./+types/_index";

export function meta({ params }: Route.MetaArgs) {
  console.log(params);

  return [
    { title: "Hello world" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HelloWorld() {
  return <div> HelloWorld</div>;
}
