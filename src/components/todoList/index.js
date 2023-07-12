import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addTodo, deleteTodo } from '../../store/reducer/reducer';
import { NoteAPI } from '../../api/todo-api';

export default function TodoList({todoList}) {
    const dispatch = useDispatch();
    async function createNote() {
        const createdNote = await NoteAPI.create({
            name : todoName,
            priority:priority,
            id: todoList.length+1,
            status: false,

        });
        dispatch(addTodo(createdNote));
        setTodoName("")
    }
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')


    function handleDeleteTodo(e){
        NoteAPI.deleteById(e.id);
        dispatch(deleteTodo(e));
    }
    const handleChange = (e) => {
        setTodoName(e.target.value);
    }
    const handlePriority = (value) => {
        setPriority(value)
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo) => (
                    <Todo key={todo.id} name={todo.name} prioriry={todo.priority} onTrashClick={() => handleDeleteTodo(todo)}/>
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact >
                    <Input value={todoName} onChange={handleChange} />
                    <Select defaultValue="Medium" value={priority} onChange={handlePriority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={createNote}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
