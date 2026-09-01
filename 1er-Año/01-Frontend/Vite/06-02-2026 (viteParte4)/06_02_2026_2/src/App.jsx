import "./App.css";
import Avatar from "./components/Avatar";

const App = () => {
  return (
    <>
      <Avatar
        username="Peter Parker"
        imageUrl="https://i.blogs.es/1cf7e5/spider-man/500_333.webp"
      ></Avatar>
      <Avatar username="Ciclope" size="sm"></Avatar>
    </>
  );
};

export default App;
