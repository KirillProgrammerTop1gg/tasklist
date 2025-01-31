import './App.css';
import styled from 'styled-components';
import Tasks from './Components/Tasks/Tasks';
import AddTask from './Components/AddTask/AddTask';
import TasksStatus from './Components/TasksStatus/TasksStatus';
import FilterButs from './Components/FilterButs/FilterButs';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <TasksStatus />
        <FilterButs />
      </Container>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
