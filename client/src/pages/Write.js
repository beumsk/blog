import { useState } from 'react';
import styled from 'styled-components';
import { URL } from './Home';
import { useFetch } from '../useFetch';

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LabelUpload = styled.label`
  margin-bottom: 8px;
  border: solid 1px;
  padding: 2px 4px;
  display: inline;
  cursor: pointer;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 2px 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 8px;
  padding: 2px 4px;
  resize: vertical;
`;

const Button = styled.button`
  margin-bottom: 8px;
  padding: 2px 4px;
`;

const user = 'test';

const Write = () => {
  const [form, setForm] = useState({
    image: null,
    title: '',
    desc: '',
  });

  const disabled = !form.title || !form.desc;

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value || e.target.files });
  };

  const { fetchData } = useFetch(URL + 'posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user,
      title: form.title,
      desc: form.desc,
      // image??
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // TODO: fix call on page load that shouldn't happen
    fetchData();
    // empty form
    setForm({
      image: null,
      title: '',
      desc: '',
    });
  };

  return (
    <>
      <Title>Write</Title>
      <Form onSubmit={handleSubmit}>
        <LabelUpload htmlFor="image">+ upload image</LabelUpload>
        <Input
          name="image"
          id="image"
          type="file"
          style={{ display: 'none' }}
          onChange={handleForm}
        />
        <Input
          placeholder="Title"
          type="text"
          name="title"
          onChange={handleForm}
        />
        <Textarea
          placeholder="Tell your story..."
          type="text"
          name="desc"
          rows="6"
          onChange={handleForm}
        />
        <Button type="submit" disabled={disabled}>
          Publish
        </Button>
      </Form>
    </>
  );
};

export default Write;
