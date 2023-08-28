import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const StyleBtn = styled.button`
  font-size: large;
`;

const ExampleBtn = (props) => {
  return (
    <StyleBtn>{props.text}</StyleBtn>
  )
}

ExampleBtn.propTypes = {
  text: PropTypes.string
};

export default ExampleBtn;