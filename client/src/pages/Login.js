import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
  width: 260px;
  margin: auto;
  padding: 16px;
  border: solid 1px #ddd;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label``;

const Input = styled.input`
  margin-bottom: 8px;
`;

const Button = styled.button`
  margin-bottom: 8px;
`;

const Login = () => {
  return (
    <Box>
      <Title>Login</Title>

      <Form>
        <Label>Email</Label>
        <Input type="text" placeholder="Enter your email..." />
        <Label>Password</Label>
        <Input type="password" placeholder="Enter your password..." />
        <Button>Register</Button>
      </Form>

      <Link to="/register">Don't have an account? Register.</Link>
    </Box>
  );
};

export default Login;
