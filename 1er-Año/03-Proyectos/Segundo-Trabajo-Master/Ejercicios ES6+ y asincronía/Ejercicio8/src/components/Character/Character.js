import "./Character.css";

const characters = (characters) => {
  const select = document.getElementById("character-list");
  for (let i = 0; i < characters.length; i++) {
    select.innerHTML += `
      <option value="${characters[i].id}">
        ${characters[i].firstName} ${characters[i].lastName}
      </option>
    `;
  }
};
export default characters;
