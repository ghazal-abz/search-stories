import Item from "./item.tsx";
const List = ({list, onRemoveItem}) => {
    return (
      <ul>
        {list.map((item) => (
          <Item key={item.id} {...item} onRemoveItem={onRemoveItem}/>
        ))}
      </ul>
    );
  };
  export default List;
