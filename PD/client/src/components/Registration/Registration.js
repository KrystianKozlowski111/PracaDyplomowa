import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Container,
  Text,
  ButtonPlace,
  Input,
  ErrorText,
  ButtonW,
} from './Registration.style';

let whatToDo = 0;

const Registration = (props) => {
  const { name, password, addUser, error } = props;
  const { register, handleSubmit, reset } = useForm({
    mode: 'onClick',
    defaultValues: {
      name,
      password,
    },
  });
  const onSubmit = (data) => {
    addUser({ variables: { name: data.name, password: data.password } });
    showInfo();
  };
  function showInfo() {
    whatToDo = 1;
  }
  if (error != undefined) {
  }
  if (whatToDo === 1 && error == undefined) {
    return (
      <Wrapper>
        <Container>
          <Text>Pomyślnie założono konto</Text>
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Container>
          <ButtonPlace onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              ref={register}
              placeholder="podaj nick"
              name="name"
              required
            />

            <Input
              type="password"
              ref={register}
              placeholder="podaj hasło"
              name="password"
              required
            />

            <ButtonW type="submit" id="addUserButton">
              Załóż konto
            </ButtonW>
          </ButtonPlace>
          {error != undefined ? (
            <ErrorText>Podany nick jest zajęty</ErrorText>
          ) : (
            ''
          )}
        </Container>
      </Wrapper>
    );
  }
};
export default Registration;
