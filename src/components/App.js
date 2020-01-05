// React
import React from "react";
import styled from "@emotion/styled";
// Components & Hooks
import TodoApp from "./TodoApp";
import LeaderboardApp from "./LeaderboardApp";
import Login from "./Login";
import { StitchAuthProvider, useStitchAuth } from "./StitchAuth";
import { Button } from "reactstrap";

App.propTypes = {};
export default function App() {
  return (
    <StitchAuthProvider>
      <AppUI />
    </StitchAuthProvider>
  );
}

AppUI.propTypes = {};
function AppUI() {
  const {
    isLoggedIn,
    actions: { handleLogout },
  } = useStitchAuth();
  return (
    <Layout>
      <Navbar>
        {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
        <AppTitle>FPC B90X Challenge</AppTitle>
      </Navbar>
      <ToDoSection>
        {isLoggedIn ? <TodoApp /> : <Login />}
      </ToDoSection>
      {isLoggedIn ? <LeaderboardApp /> : <Login />}
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  * {
    font-family: Oswald;
  }
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 62px;
  padding: 10px;
  background: #5CC6F9;
`;
const ToDoSection = styled.div`
    //overflow:auto; /*added*/
`;
const AppTitle = styled.h1`
  margin-right: auto;
  font-size: 6vw;
`;