import TodoStore from './TodoStore';
import TodoListStore from './TodoListStore';
import CountStore from './CountStore';

const RootStore = () => {
  return {
    TodoStore,
    TodoListStore,
    CountStore,
  };
};

export default RootStore;
