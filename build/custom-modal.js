import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const Momodal = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  height: 300px;
  background: #fff;
  z-index: 2;
  border-radius: 15px;
  box-shadow: 2px 2px 10px 3px #000;
  .icon{
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: #4d9b3c;
    img{
      position : relative;
      width: 50%;
      object-fit: cover;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%)
    }
  }
  button{
    cursor: pointer;
    position: absolute;
    left: 50%;
    color:#fff;
    background: #4d9b3c;
    border:none;
    width: 50%;
    height: 10%;
    bottom: 10px;
    transform: translate(-50%,-50%);
    border-radius: 15px;
    &:hover{
      background: #000000c2;
    }
  }
  p{
    position: relative;
    text-align: center;
    width: 100%;
    top: 35%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .failureRegistered{
    background: #9f1313;
  }
  .successFullyRegistred{
    background : #4d9b3c
  }
`;
const Block = styled.div`
  position: absolute;
  left:0;
  top:0;
  width:100vw;
  height:100vh;
  background: #0000007a;
  z-index: 1;
`;

export const CustomModal = ({ text, id, success, icon }) => {
    const container = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        container.current.style.display = 'none';
    };
    return (
      React.createElement(Block, { ref: container, id: id },
        React.createElement(Momodal, null,
            React.createElement("div", { className: success ? 'icon successFullyRegistred' : 'icon failureRegistered' },
                React.createElement("img", { src: icon, alt: "icon modal" })),
            React.createElement("p", null, text),
            React.createElement("button", { className: success ? 'successFullyRegistred' : 'failureRegistered', onClick: (e) => handleClick(e) }, "Ok"))));
};
