import "./Avatar.css";

const Avatar = (username, imageUrl, size = "md") => {
  if (imageUrl) {
    return `
        <div class="avatar ${size}">
            <img src="${imageUrl}" alt="${username} avatar"/>
        </div>
        `;
  } else {
    return `
        <div class="avatar ${size}">
            <h3>${username[0]}</h3>
        </div>
        `;
  }
};

export default Avatar;
