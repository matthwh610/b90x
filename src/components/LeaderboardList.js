import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ErrorBoundary from "react-error-boundary";
import LeaderboardItem from "./LeaderboardItem";

LeaderboardList.propTypes = {
  users: PropTypes.array,
  actions: PropTypes.object,
};
export default function LeaderboardList(props) {
  const { users, hasHadUsers, actions } = props;

  return (
    <ErrorBoundary>
      <List>
        {users.length === 0 && <NoUserItems hasHadUsers={hasHadUsers} />}
        {users.map(item => (
          <LeaderboardItem
            key={item._id.toString()}
            item={item}
            toggleStatus={() => actions.toggleTodoStatus(item._id)}
          />
        ))}
      </List>
    </ErrorBoundary>
  );
}
const NoUserItems = props => {
  const Layout = styled.div`
    text-align: center;
    font-size: 2em;
    padding-top: 60px;
    padding-bottom: 60px;
  `;

  return (
    <Layout>
      {props.hasHadUsers ? (
        <span>
          <span role="img" aria-label="celebrate">
            {" "}
            🎉{" "}
          </span>
          All done! Enjoy your day!
        </span>
      ) : (
        <span>
          There are no users found!
        </span>
      )}
    </Layout>
  );
};
const List = styled.ul`
  padding: 0;
  margin-top: 10px;
  width: 350px;
  max-width: 90%;
`;
