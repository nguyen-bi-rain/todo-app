import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/todoList';
import Filters from './components/Fillter';
import { useDispatch, useSelector } from 'react-redux';
import { NoteAPI } from './api/todo-api';
import { setTodoList } from './store/reducer/reducer';
import { useEffect, useState } from 'react';

const { Title } = Typography;

function App() {

  const dispatch = useDispatch();
  const [searchText,setSearchText] = useState("")
  async function fetchAll(){
    const todoList = await NoteAPI.fetchAll()
    dispatch(setTodoList(todoList))
  }
  useEffect(() => {
    fetchAll();
  },[])
  const todoListed = useSelector((store) => store.NOTE.todoList)
  const filterTodoList = todoListed.filter((todo)  =>{
    return todo.name.includes(searchText);
  })
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters onTextChange={setSearchText}/>
      <Divider />
      <TodoList todoList={filterTodoList ? filterTodoList : todoListed}/>
    </div>
  );
}

export default App;