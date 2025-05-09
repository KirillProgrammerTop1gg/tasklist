import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 5px;
`;
const Input = styled.input`
    padding: 5px;
`;
const Btn = styled.button`
    padding: 5px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default () => {
    return (
        <Container>
            <Form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Btn>Sign up</Btn>
            </Form>
        </Container>
    );
}