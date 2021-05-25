import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Table,
  ButtonPlace,
  Th,
  Td,
  Tr,
  Container,
  Button,
} from './AdminPanel.style';
import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  isReference,
} from '@apollo/client';
const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      name
      password
      admin
    }
  }
`;

const AdminPanel = (props) => {
  const { deleteUserAdmin } = props;
  const { register, handleSubmit } = useForm({
    mode: 'onClick',
    defaultValues: {},
  });

  const onSubmit = (data2) => {
    console.log('test');
    console.log(data2);
    console.log(data2.id);
    deleteUserAdmin({
      variables: { id: parseInt(data2.id) },
    });
  };
  const { loading, error, data } = useQuery(GET_USERS);
  if (data) {
    console.log(data.getUsers);
    return (
      <Wrapper>
        <Container>
          <Table>
            <thead>
              <Tr>
                <Th>Id</Th>
                <Th>Nick</Th>
                <Th>Admin</Th>
                <Th>Operacje</Th>
              </Tr>
            </thead>
            <tbody>
              {data.getUsers.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.admin ? <> ✔️ </> : <> ❌</>}</Td>
                  <Td>
                    <ButtonPlace onSubmit={handleSubmit(onSubmit)}>
                      <input
                        name="id"
                        type="text"
                        ref={register}
                        defaultValue={user.id}
                        style={{ display: 'none' }}
                      />
                      <Button type="submit" id="delete">
                        🗑️
                      </Button>
                    </ButtonPlace>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Wrapper>
    );
  } else return 'Users not found';
};
export default AdminPanel;
