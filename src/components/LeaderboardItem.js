import React from "react";
import { Progress } from 'reactstrap';
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { CheckedIcon, UncheckedIcon } from "./Icon";
import { Card, CardBody } from "reactstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

//import Progress from "./Progress";


LeaderboardItem.propTypes = {
  item: PropTypes.object,
  remove: PropTypes.func,
  setStatus: PropTypes.func,
  toggleStatus: PropTypes.func,
};

Progress.propTypes = {
  multi: PropTypes.bool,
  bar: PropTypes.bool, // used in combination with multi
  tag: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string // used to add class to the inner progress-bar element
};

export default function LeaderboardItem(props) {
  const { item, toggleStatus } = props;
  const Checkbox = item.checked ? CheckedIcon : UncheckedIcon;
  const ProgressPer = Math.round((item.completed / 60)*100,1);
  function getPP(val) {
    if (isNaN(ProgressPer)) {
      return 0;
    }
    return val;
  }
  const myProg = getPP(ProgressPer);
  return (
    <User onClick={toggleStatus}>
      <Layout>
        <Text>{item.data.name}</Text>
        <Text>      </Text>
        <ProgWrapper>
          <div className="text-center">{ myProg}%</div>
          <ProgressBar animated now={myProg} width/>
        </ProgWrapper>
      </Layout>
    </User>
  );
}

Progress.defaultProps = {
  tag: 'progress',
  value: 10,
  max: 100,
};

const User = styled(Card)`
  margin: 4px auto;
  :first-of-type {
    margin-top: 0px;
  }
`;
const Layout = styled(CardBody)`
  display: flex;
  align-items: top;
  padding: 10px !important;
`;
const Text = styled.span`
  font-size: 18px;
  line-height: 24px;
  margin-left: 10px;
  max-width: calc(100% - 24px - 10px);
`;
const ProgWrapper = styled.div`
  width: 50%;
`;