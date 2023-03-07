import { useDispatch } from "react-redux";
import { deletePost } from "../store/postsSlice";

const Post = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(props.id));
  };

  return (
    <div className="post">
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Post;
