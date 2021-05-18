import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import Section from '../../components/Section';
import Header from '../../components/Header';

const ADD_USER = gql`
  mutation addUser($name: String!, $password: String!) {
    addUser(name: $name, password: $password) {
      name
      password
    }
  }
`;
const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String, $password: String) {
    updateUser(id: $id, name: $name, password: $password) {
      id
      name

      password
    }
  }
`;
const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
const GET_POST_BY_PASSWORD_AND_NAME = gql`
  query getUserByNameAndPassword($name: String!, $password: String!) {
    getUserByNameAndPassword(name: $name, password: $password) {
      id
      admin
      name
      password
    }
  }
`;
function HomePage() {
  const [state, setState] = useState([]);
  const [accountError, setAccountError] = useState(0);

  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: (response) => {
      const { deleteUser } = response;
      sessionStorage.removeItem('nick');
      sessionStorage.removeItem('password');
      sessionStorage.removeItem('admin');
      if (state && state.getUsers && state.getUsers.length > 0) {
        const array = state.getUsers.filter(
          (item) => item.id !== deleteUser.id
        );
        setState({ getUsers: array });
      }
      window.location.reload();
    },
  });

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: (response) => {
      if (state && state.getUsers && state.getUsers.length > 0) {
        const array = state.getUsers.map((item) => {
          if (item.id === response.updateUser.id) {
            sessionStorage.setItem('password', response.updateUser[0].password);
            sessionStorage.setItem('nick', response.updateUser[0].name);

            return {
              ...item,
              name: response.updateUser.name,

              password: response.updateUser.password,
            };
          } else return item;
        });
        setState({ getUsers: array });
      }
    },
  });

  const [getUserByNameAndPassword, { data2 }] = useLazyQuery(
    GET_POST_BY_PASSWORD_AND_NAME,
    {
      onCompleted: (response) => {
        const { getUsers } = response;
        setState(response);
        if (response.getUserByNameAndPassword.length !== 0) {
          sessionStorage.setItem(
            'nick',
            response.getUserByNameAndPassword[0].name
          );
          sessionStorage.setItem('id', response.getUserByNameAndPassword[0].id);
          sessionStorage.setItem(
            'password',
            response.getUserByNameAndPassword[0].password
          );
          sessionStorage.setItem(
            'admin',
            response.getUserByNameAndPassword[0].admin
          );

          setAccountError(0);
        } else {
          setAccountError(1);
        }
      },
    }
  );
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    onCompleted: (response) => {
      if (state && state.getUsers && state.getUsers.length > 0) {
        const array = state.getUsers.map((item) => {
          if (item.id === response.addUser.id)
            return {
              ...item,
              name: response.addUser.name,
              password: response.addUser.password,
            };
          else return item;
        });
        setState({ getUsers: array });
      }
    },
  });
  return (
    <>
      <Header />
      <Section
        updateUser={updateUser}
        deleteUser={deleteUser}
        getUserByNameAndPassword={getUserByNameAndPassword}
        accountError={accountError}
        addUser={addUser}
        error={error}
      />
    </>
  );
}
export default HomePage;
