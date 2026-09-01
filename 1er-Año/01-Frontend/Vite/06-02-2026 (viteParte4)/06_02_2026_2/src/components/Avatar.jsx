import "./Avatar.css";

const Avatar = ({ username, imageUrl, size = "md" }) => {
  if (imageUrl) {
    return (
      <div className={`avatar ${size}`}>
        <img src={imageUrl} alt={username + "avatar"} />
      </div>
    );
  } else {
    return (
      <div className={`avatar ${size}`}>
        <h3>{username[0]}</h3>
      </div>
    );
  }
};

export default Avatar;
