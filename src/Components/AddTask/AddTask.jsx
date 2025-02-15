import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";

const AddTaskForm = styled.form`
    margin-top: 15px;
    width: 100%;
    display: flex;
    gap: 3px;
    height: 40px;
`;
const TaskText = styled.input`
    display: block;
    width: 80%;
    border-radius: 5px;
    padding: 10px;
`;
const AddButton = styled.button`
    display: block;
    width: 20%;
    border-radius: 5px;
    transition: all .3s;
    background: #c2c1c0;
    &:hover {
        background-color: #969592;
        transition: all .3s;
    }
`;

export default () => {
    const dispatch = useDispatch();
    return (
        <AddTaskForm onSubmit={(e) => (e.preventDefault(), dispatch(addTask(e.target[0].value)))}>
            <TaskText
                type="text"
                name="text"
                required
                placeholder="Enter task text..."
            />
            <AddButton>Add Task</AddButton>
        </AddTaskForm>
    );
}