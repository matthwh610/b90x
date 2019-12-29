// React
import React from "react";
import styled from "@emotion/styled";
import ErrorBoundary from "react-error-boundary";
// To-Do Components & Hooks
import LeaderboardList from "./LeaderboardList";
//import TodoControls from "./TodoControls";
import { useStitchAuth } from "./StitchAuth";
import { useUserItems } from "./useUserItems";
import { Card, CardTitle } from "reactstrap";

LeaderboardApp.propTypes = {};
export default function LeaderboardApp() {
  const { currentUser } = useStitchAuth();
  const myusers = useUserItems(currentUser.id);
  // const { items, hasHadTodos, actions } = useTodoItems(currentUser.id);
  return (
    <ErrorBoundary>
      <Layout>
        <TodoCard>
          <Title>
            <h1>B90X Leaderboard</h1>
          </Title>
          <LeaderboardList {...myusers} />
        </TodoCard>
      </Layout>
    </ErrorBoundary>
  );
}
const Layout = styled.div`
  background: #eeeeee;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TodoCard = styled(Card)`
  max-width: 600px;
  align-items: center;
  width: 100%;
`;
const Title = styled(CardTitle)`
  margin: 0;
  h1 {
    padding: 20px;
    margin: 0;
  }
`;
