import React, { Component } from 'react';
import styled from 'styled-components';

const TitleB = styled.div`
  font-size: ${props => props.number}px;
  color: ${props => props.primary ? 'rgba(100, 200, 100, 0.9)' : 'rgba(200, 100, 0, 0.9)'};
`;

export default TitleB;
