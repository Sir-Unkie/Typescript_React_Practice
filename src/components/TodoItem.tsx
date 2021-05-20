import Todo from '../dataModels/todo';

const TodoItem: React.FC<{ item: Todo }> = props => {
  return <li>{props.item.text}</li>;
};

export default TodoItem;
