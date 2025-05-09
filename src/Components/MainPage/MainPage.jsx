import styled from 'styled-components';
import Tasks from '../Tasks/Tasks';
import AddTask from '../AddTask/AddTask';
import TasksStatus from '../TasksStatus/TasksStatus';
import FilterButs from '../FilterButs/FilterButs';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from '../../redux/authAPI';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);
    return (
        <>
            <Container>
                <TasksStatus />
                <FilterButs />
            </Container>
            <AddTask />
            <Tasks />
        </>
    );
}