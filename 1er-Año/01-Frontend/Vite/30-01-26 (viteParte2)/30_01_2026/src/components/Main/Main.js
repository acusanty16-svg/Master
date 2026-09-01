import "./Main.css";
import tecnologiasWeb from "../../components/data/data";

const Main = () => {
  return `
    <main>
        <h2>Tecnologías Web</h2>
        <ul>
            ${tecnologiasWeb
              .map(
                (tecnologiasWeb) => `
             <li>
                <h3>${tecnologiasWeb.title} - ${tecnologiasWeb.emoji}</h3>
                <h4>${tecnologiasWeb.version}</h4>
                <p>${tecnologiasWeb.description}</p>
            </li>
            `,
              )
              .join("")}
        </ul>
    </main>
`;
};

export default Main;
