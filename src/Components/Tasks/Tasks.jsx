import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, delTask, toggleCompleted } from "../../tasksApi";
import { useEffect } from "react";

const Tasks = styled.ul`
    margin-top: 25px;
`;
const Task = styled.li`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
const CheckTask = styled.input`
    width: 30px;
    height: 30px;
`;
const TaskText = styled.p`
    margin-left: 10px;
    font-size: 20px;
`;
const DelTask = styled.button`
    font-size: 30px;
    color: red;
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-left: auto;
`;
const Line = styled.div`
    border-bottom: 3px solid #c2c1c0;
    margin-top: 25px;
    width: 100%;
`;

export default () => {
    let tasks;
    const dispatch = useDispatch();
    useEffect(() => {    
        dispatch(fetchTasks());
    }, []);
    switch (useSelector(state => state.filter.status)) {
        case 'all':
            tasks = useSelector(state => state.tasks.tasksList);
            break;
        case 'active':
            tasks = useSelector(state => state.tasks.tasksList).filter(task => !(task.completed));
            break;
        case 'completed':
            tasks = useSelector(state => state.tasks.tasksList).filter(task => task.completed);
            break;
        default:
            tasks = useSelector(state => state.tasks.tasksList);
            break;
    }
    return (
        <Tasks>
            {tasks.map(task => <Task key={task.id}>
                <CheckTask type="checkbox" checked={task.completed} onChange={() => dispatch(toggleCompleted(task))} />
                <TaskText>{task.text}</TaskText>
                <DelTask onClick={() => dispatch(delTask(task.id))}>x</DelTask>
                <Line />
            </Task>)}
        </Tasks>
    );
}