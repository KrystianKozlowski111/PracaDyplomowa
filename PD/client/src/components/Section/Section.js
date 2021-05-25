import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wrapper, Container } from './Section.style';
import Registration from '../Registration';
import Login from '../Login';
import AdminPanel from '../AdminPanel';
import EditProfile from '../EditProfile';
import App from '../Game';
const Section = (props) => {
  var this_admin = window.sessionStorage.admin;
  var this_id = window.sessionStorage.user;
  var this_password = window.sessionStorage.password;
  var this_nick = window.sessionStorage.nick;

  const {
    addUser,
    error,
    getUsers,
    deleteUserAdmin,
    updateUser,
    getUserByNameAndPassword,
    accountError,
    deleteUser,
  } = props;
  if (this_password && this_nick && this_admin === 'false') {
    var locations = window.location.href;
    if (locations.indexOf('login') !== -1) {
      let splits = locations.split('login');
      window.locations = splits[0];
      window.location.href = splits[0];
    }

    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Wrapper>
                <Container>
                  <div>
                    <App />
                  </div>
                </Container>
              </Wrapper>
            </Route>
            <Route path="/editProfile">
              <EditProfile updateUser={updateUser} deleteUser={deleteUser} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
  if (this_password && this_nick && this_admin === 'true') {
    var locations = window.location.href;
    if (locations.indexOf('login') !== -1) {
      let splits = locations.split('login');
      window.locations = splits[0];
      window.location.href = splits[0];
    }
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Wrapper>
                <Container>
                  <AdminPanel deleteUserAdmin={deleteUserAdmin} />
                </Container>
              </Wrapper>
            </Route>
            <Route path="/editProfile">
              <EditProfile updateUser={updateUser} deleteUser={deleteUser} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
          <Switch>
            <Route path="/registration">
              <Registration addUser={addUser} error={error} />
            </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              <Login
                getUserByNameAndPassword={getUserByNameAndPassword}
                accountError={accountError}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
};
export default Section;
