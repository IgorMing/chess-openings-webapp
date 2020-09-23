import React from 'react';
import Styled from './styles';

const Button: React.FC = (props) => {
  return <Styled>{props.children}</Styled>;
};

export default Button;
