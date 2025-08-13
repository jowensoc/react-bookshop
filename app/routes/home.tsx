import type { Route } from "./+types/home";
import { Shop } from "~/layout/shop/shop";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Bookshop" },
    { name: "description", content: "Welcome to React Bookshop" },
  ];
}

export default function Home() {
  return <Shop />;
}
