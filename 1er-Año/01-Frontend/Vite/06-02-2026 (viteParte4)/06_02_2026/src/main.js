import "./style.css";
import Avatar from "./components/Avatar";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  ${Avatar("Peter Parker", "https://i.blogs.es/1cf7e5/spider-man/500_333.webp")}
  ${Avatar("Matt Murdock", undefined, "lg")}
  ${Avatar("Ciclope", "https://es.kotaku.com/app/uploads/2024/06/28c9c03978a313c53531673947fc6203.jpg,", "sm")}
  ${Avatar("Beast", undefined, "md")}
  ${Avatar("Wolverine", "https://areajugones.sport.es/wp-content/uploads/2025/09/wolverine-1-1560x880.jpg.webp", "lg")}
  `;
});
