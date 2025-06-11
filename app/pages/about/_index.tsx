import type { Route } from "./+types/_index";

export function meta({ params }: Route.MetaArgs) {
  console.log(params);

  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <div>Liên hệ</div>;
}
