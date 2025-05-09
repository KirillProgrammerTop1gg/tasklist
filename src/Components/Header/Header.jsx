import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;
const Title = styled.h2`
    
`;
const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;
const Btn = styled.button`
    display: block;
`;

export default () => {
    return (
        <HeaderSection>
            <Title><Link to="/">Task Manager</Link></Title>
            <Nav>
                <Btn><Link to="/reg">Sign up</Link></Btn>
                <Btn><Link to="/auth">Sign in</Link></Btn>
            </Nav>
        </HeaderSection>
    );
};