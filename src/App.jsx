import { connect } from 'react-redux';
import { addTodo, removeTodo } from './redux/actions';
import Todo from './Todo';

const App = ({ todos, addTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Redux Todo App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
