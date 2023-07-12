import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        todoList: [],
    },
    reducers: {
        setTodoList: (currentSlice, action) => {
            currentSlice.todoList = action.payload;
        },
        addTodo: (currentSlice, action) => {
            currentSlice.todoList.push(action.payload);
        },
        deleteTodo: (currentSlice, action) => {
            const filteredNoteList = currentSlice.todoList.filter((note) => note.id !== action.payload.id);
            currentSlice.todoList = filteredNoteList;
        },
        searchTodo: (currentSlice, action) => {
            const filteredNoteList = currentSlice.todoList.filter((todo) => {
                return todo.name.includes(action.payload);
            })
            if (filteredNoteList.length > 0) {
                currentSlice.todoList = filteredNoteList;
            }
        }

    },
});

export const noteReducer = todoSlice.reducer;
export const { setTodoList, addTodo, deleteTodo, searchTodo } = todoSlice.actions;