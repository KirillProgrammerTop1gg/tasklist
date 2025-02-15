import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";

const FilterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
`;
const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
`;
const Filters = styled.ul`
    display: flex;
    gap: 5px;
`;
const Filter = styled.li`
    height: 40px;
`;
const ChangeBut = styled.button`
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    cursor: pointer;
`;

export default () => {
    const dispatch = useDispatch();
    return (
        <FilterSection>
            <SubTitle>Filter Tasks</SubTitle>
            <Filters>
                <Filter>
                    <ChangeBut onClick={(e) => dispatch(changeFilter('all'))}>
                        All
                    </ChangeBut>    
                </Filter>
                <Filter>
                    <ChangeBut onClick={(e) => dispatch(changeFilter('active'))}>
                        Active
                    </ChangeBut>    
                </Filter>
                <Filter>
                    <ChangeBut onClick={(e) => dispatch(changeFilter('completed'))}>
                        Completed
                    </ChangeBut>    
                </Filter>
            </Filters>
        </FilterSection>
    );
}