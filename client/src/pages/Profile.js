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

const Profile = () => {
  return (
    <Box>
      <Title>Profile</Title>
      {/* profile pic */}
      <Form>
        <Label>Username</Label>
        <Input type="text" placeholder="Safak" name="name" />
        <Label>Email</Label>
        <Input type="email" placeholder="safak@gmail.com" name="email" />
        <Label>Password</Label>
        <Input type="password" placeholder="Password" name="password" />
        <Button type="submit">Update profile</Button>
        <Button>Delete profile</Button>
      </Form>
    </Box>
  );
};

export default Profile;
