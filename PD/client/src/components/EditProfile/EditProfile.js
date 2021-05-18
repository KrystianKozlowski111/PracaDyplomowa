import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Container,
  ButtonPlace,
  Input,
  ButtonW,
  Info,
  ErrorInfo,
  Modal,
  ModalBox,
} from './EditProfile.style';
var this_id = window.sessionStorage.id;
var this_password = window.sessionStorage.password;
var this_nick = window.sessionStorage.nick;
var seeInfo = false;
var seeErrorInfo = false;
let deleteForm = false;
let errorInModal = false;
const EditProfile = (props) => {
  const { updateUser, deleteUser } = props;

  const { register, handleSubmit } = useForm({
    mode: 'onClick',
    defaultValues: {},
  });

  const onSubmit = (data) => {
    if (data.oldPassword === this_password && data.password) {
      seeInfo = true;
      seeErrorInfo = false;
      updateUser({
        variables: {
          id: this_id,
          name: data.name,
          password: data.password,
        },
      });
    } else {
      if (data.oldPassword !== '' || data.password !== '') {
        seeErrorInfo = true;
      } else {
        seeInfo = true;
        seeErrorInfo = false;
        updateUser({
          variables: {
            name: data.name,
            password: this_password,
          },
        });
      }
    }
  };
  const deleteAccountForm = () => {
    deleteForm = true;
  };
  const deleteAccount = (data) => {
    if (data.password === this_password) {
      deleteUser({ variables: { id: this_id } });
    } else {
      errorInModal = true;
    }
  };
  const backToForm = () => {
    deleteForm = false;
    errorInModal = false;
  };
  return (
    <Wrapper>
      <Container>
        {seeInfo ? <Info> Zmieniono dane</Info> : ''}
        {seeErrorInfo ? (
          <ErrorInfo> Aby zmienić hasło podaj stare hasło</ErrorInfo>
        ) : (
          ''
        )}
        <ButtonPlace onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            ref={register}
            placeholder="nick"
            name="name"
            defaultValue={this_nick}
            required
          />
          <Input
            type="password"
            ref={register}
            placeholder="podaj stare hasło"
            name="oldPassword"
          />
          <Input
            type="password"
            ref={register}
            placeholder="podaj nowe hasło"
            name="password"
          />
          <ButtonW type="submit" id="updateButton">
            Zaktualizuj dane
          </ButtonW>
        </ButtonPlace>
        <ButtonPlace
          style={{ position: ' absolute', right: '0px' }}
          onSubmit={handleSubmit(deleteAccountForm)}
        >
          <ButtonW type="submit" id="deleteButton">
            Usuń konto
          </ButtonW>
        </ButtonPlace>
        {deleteForm ? (
          <Modal>
            <ModalBox>
              <Info>Podaj hasło by usunąć konto</Info>
              <ButtonPlace onSubmit={handleSubmit(deleteAccount)}>
                <Input
                  type="password"
                  ref={register}
                  placeholder="hasło"
                  name="password"
                />
                <ButtonW type="submit" id="seeForm">
                  Usuń konto
                </ButtonW>
              </ButtonPlace>
              <ButtonPlace
                style={{ justifyContent: 'flex-end' }}
                onSubmit={handleSubmit(backToForm)}
              >
                <ButtonW type="submit" id="seeForm">
                  Powrót
                </ButtonW>
              </ButtonPlace>
              {errorInModal ? (
                <ErrorInfo style={{ position: 'absolute', bottom: '0' }}>
                  Złe hasło
                </ErrorInfo>
              ) : (
                ''
              )}
            </ModalBox>
          </Modal>
        ) : (
          ''
        )}
      </Container>
    </Wrapper>
  );
};
export default EditProfile;
