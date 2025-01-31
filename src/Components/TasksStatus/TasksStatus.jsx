import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const StatusSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
`;

const StatusInfo = styled.p`
    font-size: 14px;
`;

export default () => {
    return (
        <StatusSection>
            <SubTitle>Tasks Status</SubTitle>
            <StatusInfo>Active: {useSelector(state => state.tasks).filter(task => !(task.completed)).length}</StatusInfo>
            <StatusInfo>Completed: {useSelector(state => state.tasks).filter(task => task.completed).length}</StatusInfo>
        </StatusSection>  
    );
}