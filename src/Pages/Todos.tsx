import React, { useEffect, useState, useCallback } from "react";
import { observer } from 'mobx-react-lite';
import { useStores } from "../Stores/StoreConfig";
import Header from '../Components/Header';
import TodoModel from "../Models/TodoModel";
import CustomSpinner  from "../Components/CustomSpinner";
import TodoCard from '../Components/TodoCard';

const Todos = () => {
  const { todosStore } = useStores();
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [resetList, setResetList] = useState(false);

  useEffect(() => {
    todosStore.loadTodos();
  }, [todosStore]);

  useEffect(() => {
    setTodos(todosStore.todoList.sort());
    setResetList(false);
  }, [todosStore.todoList, resetList]);


  const handleBrowserSearch = useCallback(
    (searchValue: string) => {
      let filteredTodoList = new Array<TodoModel>();

      // filter list based on string
      if (todos !== undefined) {
        filteredTodoList = todos?.filter(
          (item) =>
            item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
      }
      // set filtered list
      setTodos(filteredTodoList);

      // if search field is empty, map whole list again
      if (searchValue === "") {
        setResetList(true);
      }
    },[todos]);

  const handleToggleCheck = (todoId: number) => {
    const findTodo = todos.find(t => t.id === todoId);
    if(findTodo){
      const todosFiltered = todos.filter(t => t.id !== todoId);
      console.log(todosFiltered);
      setTodos([         
        {
          id: findTodo.id,
          completed: !findTodo.completed,
          userId: findTodo.userId,
          title: findTodo.title
        },
        ...todosFiltered,
      ].sort())
    }
  }  

  return (
    <>
      <Header
        title="TODOs"
        subtitle="Check out this amazing list of things you can do"
      />
      <div className="list-container">
        <input
          type="search"
          className="form-control form-control-lg mb-4 mx-auto"
          placeholder="Type to search"
          onChange={(e) => handleBrowserSearch(e.target.value)}
        />
        {todosStore.isLoading ? (
          <CustomSpinner/>
        ) : (
          <div className="row">
            {todos.length > 0 &&
              todos.map((l) => (
                <div key={l.id} className="col-md-12 mb-4">
                  <TodoCard 
                    title={l.title} 
                    completed={l.completed}
                    handleToggle={() => handleToggleCheck(l.id)}/>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default observer(Todos);
