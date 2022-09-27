import React from 'react';
import styled from 'styled-components';
const Modalmsg = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: #56a18a;
  height: 190px;
  width: 290px;
  position: absolute;
  left: 5px;
  top: 5px;
  text-align: center;
  border-radius: 10px;
`;
const Cross = styled.div `
  z-index: 1;
  right: -275px;
  top: 5px;
  cursor: pointer;
  align-self: flex-start;
  position: relative;
`;
const Modal = styled.div `
  border-radius: 10px;
  box-shadow: 2px 2px 8px 2px #072e22;
  position: absolute;
  color: #fff;
  top: 40vh;
  left: 42.16%;
  background-color: #072e22;
  width: 300px;
  height: 200px;
`;
export const CustomModal = ({ text }) => {
    const handleClick = (e) => {
        const target = e.target;
        target.parentElement.style.display = 'none';
    };
    return (React.createElement(Modal, null,
        React.createElement(Cross, { onClick: handleClick }, "X"),
        React.createElement(Modalmsg, null,
            React.createElement("p", null, text))));
};
