const Item = ({id, title, url, author, num_comments, points, onRemoveItem }) => {

  return (
    <li className="d-flex justify-start align-items-center mb-2">
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
      <button className="btn btn-warning mx-2" onClick={() => onRemoveItem(id)}>Remove</button>
    </li>
  );
};

export default Item;
