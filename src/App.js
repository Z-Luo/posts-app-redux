import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Online Posts App</h1>
      <PostForm></PostForm>
      <PostList></PostList>
    </div>
  );
}

export default App;
