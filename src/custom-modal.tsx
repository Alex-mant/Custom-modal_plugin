import { ReactElement } from 'react';
import React from 'react';
import styled from 'styled-components'

interface IProps {
  text: string
}

const Modalmsg = styled.div`
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
`

const Cross = styled.div`
  z-index: 1;
  right: -275px;
  top: 5px;
  cursor: pointer;
  align-self: flex-start;
  position: relative;
`

const Modal = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 8px 2px #072e22;
  position: absolute;
  color: #fff;
  top: 40vh;
  left: 42.16%;
  background-color: #072e22;
  width: 300px;
  height: 200px;
`

export const CustomModal = ({text} : IProps) : ReactElement => {  
  
  const handleClick = (e : React.MouseEvent) : void => {
    const target = e.target as HTMLDivElement
    target.parentElement!.style.display = 'none'
  };

  return (
    <Modal>
      <Cross onClick={handleClick}>X</Cross>
      <Modalmsg><p>{text}</p></Modalmsg>
    </Modal>
  );
};
