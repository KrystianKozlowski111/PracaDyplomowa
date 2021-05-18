import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  ButtonW,
  Container,
  ButtonPlace,
  Button,
} from './Header.style';
var this_nick = window.sessionStorage.nick;
var this_admin = window.sessionStorage.admin;
var this_password = window.sessionStorage.password;
const logout = () => {
  sessionStorage.removeItem('admin');
  sessionStorage.removeItem('password');
  sessionStorage.removeItem('id');
  sessionStorage.removeItem('nick');
  window.location.reload();
};
const Header = (props) => {
  const { handleSubmit } = useForm({
    mode: 'onClick',
    defaultValues: {},
  });
  if (this_password && this_nick) {
    return (
      <Wrapper>
        <Container>
          <a href="/"></a>
          <ButtonPlace onSubmit={handleSubmit(logout)}>
            <ButtonW type="submit" title="wyloguj">
              Wyloguj się
            </ButtonW>
            {window.location.href.indexOf('editProfile') === -1 ? (
              <Button href="editProfile" title="edytuj profil">
                Edytuj Profil
              </Button>
            ) : (
              <Button href="/" title="strona główna">
                Strona Główna
              </Button>
            )}
          </ButtonPlace>
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Container>
          <a href="/"></a>
          <ButtonPlace>
            <Button href="login" title="zaloguj">
              Zaloguj się
            </Button>
            <Button href="registration" title="utwórz konto">
              Utwórz konto
            </Button>
          </ButtonPlace>
        </Container>
      </Wrapper>
    );
  }
};
export default Header;
