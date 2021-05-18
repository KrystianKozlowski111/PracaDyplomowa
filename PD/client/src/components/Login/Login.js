import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Container,
  ButtonPlace,
  Input,
  ButtonW,
  ErrorInfo,
} from './Login.style';

const Login = (props) => {
  const { id, password, getUserByNameAndPassword, accountError } = props;
  const { register, handleSubmit } = useForm({
    mode: 'onClick',
    defaultValues: {
      id,
      password,
    },
  });

  const onSubmit = (data) => {
    getUserByNameAndPassword({
      variables: { name: data.name, password: data.password },
    });
  };
  return (
    <Wrapper>
      {accountError === 1 ? <ErrorInfo> Złe dane logowania</ErrorInfo> : ''}
      <Container>
        <ButtonPlace onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            ref={register}
            placeholder="podaj nick"
            name="name"
          />
          <Input
            type="password"
            ref={register}
            placeholder="podaj hasło"
            name="password"
          />
          <ButtonW type="submit" id="loginButton">
            Zaloguj
          </ButtonW>
        </ButtonPlace>
      </Container>
    </Wrapper>
  );
};
export default Login;
