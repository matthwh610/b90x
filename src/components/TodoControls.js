import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { CheckedIcon, UncheckedIcon } from "./Icon";
import { Button } from "reactstrap";
import TodoInput from "./TodoInput";

TodoControls.propTypes = {
  myplan: PropTypes.array,
  actions: PropTypes.object,
};
export default function TodoControls(props) {
  const { myplan, actions } = props;
  const [inputText, setInputText] = useState("");
  const hasCheckedItems = myplan && myplan.filter(x => x.checked).length > 0;
  const handleInput = e => setInputText(e.target.value);
  const handleAddTodo = () => {
    if (inputText) {
      actions.addTodo(inputText);
      setInputText("");
    }
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  const allTodosAreCompleted = myplan.every(item => item.checked === true);
  const someTodosAreCompleted = myplan.every(item => item.checked === true);
  return (
    <Layout>
      <TodoInput
        value={inputText}
        addTodo={handleAddTodo}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
      />
      <ControlBar>
        {/*myplan.length > 0 && !allTodosAreCompleted && (
          <SelectAllButton
            selected={someTodosAreCompleted}
            onClick={actions.completeAllTodos}
          />
        )*/}
        {/*hasCheckedItems && (
          <CleanupButton onClick={actions.clearCompletedTodos}>
            Clear Completed
          </CleanupButton>
        )*/}
      </ControlBar>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;
const ControlBar = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const CleanupButton = styled(Button)`
  background-color: #f83d0e !important;
`;
const SelectAllButton = props => {
  const Selector = styled(Button)`
    color: black;
    border: 0.5px solid rgba(0, 0, 0, 0.6) !important;
    margin-right: 8px;
  `;
  return (
    <Selector color="inverted" onClick={props.onClick}>
      {props.selected ? (
        <span>
          <CheckedIcon />
        </span>
      ) : (
        <span>
          <UncheckedIcon /> Complete All
        </span>
      )}
    </Selector>
  );
};
