import { observer } from 'mobx-react';
import { useState } from 'react';
import styled from 'styled-components';
import TodoListStore from './../../../stores/TodoListStore';

const TodoListPage = observer(() => {
  const [text, setText] = useState('');
  console.log(TodoListStore.report());

  const onTodoChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    TodoListStore.addTodo(text);
    setText('');
  };

  const handleRemoveTodo = (index) => {
    TodoListStore.removeTodo(index);
  };

  return (
    <>
      <h1>TODO 리스트</h1>
      {TodoListStore.todos.map((item, index) => {
        return (
          <TodoBox key={index}>
            <p>
              {index + 1}번 {item.task}
            </p>
            <button onClick={() => handleRemoveTodo(index)}>삭제</button>
          </TodoBox>
        );
      })}
      <h2>Todo 추가하기</h2>
      <input
        value={text}
        onChange={(e) => onTodoChange(e)}
        placeholder="추가할 Todo를 작성해주세요"
      />
      <button onClick={handleAddTodo}>추가</button>
    </>
  );
});

export default TodoListPage;

const TodoBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
`;
