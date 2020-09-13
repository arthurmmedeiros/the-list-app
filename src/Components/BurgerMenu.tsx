import React, { useCallback, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { slide as Menu } from "react-burger-menu";
import './BurgerMenu.scss';

const iconsFontSize = '2rem';

interface IMenuState{
    isOpen: boolean;
  }
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const getCustomBurgerIcon = useCallback(
    () => (
        <FontAwesomeIcon icon={['fas', 'bars']}/>
    ),
    []
  );

  const handleMenuStateChange = (state: IMenuState) => {
    setIsOpen(state.isOpen);
    return state.isOpen;
  };

  const handleCloseBurger = () => {      
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav>
      <Menu
      customBurgerIcon={getCustomBurgerIcon()}
      onStateChange={handleMenuStateChange}
      isOpen={isOpen}
        width='300px'
        styles={{
          bmBurgerButton: {
            position: "fixed",
            width: "4rem",
            height: "4rem",
            fontSize: "3rem",            
            top: "1rem",
            left: '1rem',
            fontWeight: "bold",
          },
        }}
      >
        <a href="/" onClick={handleCloseBurger}>
            <FontAwesomeIcon 
              icon={['fas', 'home']}
              style={{fontSize:iconsFontSize}}/>
            <span style={{
                marginLeft: '10px',
                fontSize: iconsFontSize,
            }}>Home</span>
        </a>
        <a href="/posts" onClick={handleCloseBurger}>
            <FontAwesomeIcon 
              icon={['fas', 'edit']}
              style={{fontSize:iconsFontSize}}/>
            <span style={{
                marginLeft: '10px',
                fontSize: iconsFontSize,
            }}>Posts</span>
        </a>
        <a href="/albums" onClick={handleCloseBurger}>
            <FontAwesomeIcon 
              icon={['fas', 'record-vinyl']} 
              style={{fontSize:iconsFontSize}}
            />
            <span style={{
                marginLeft: '10px',
                fontSize: iconsFontSize,
            }}>Albums</span>
        </a>
        <a href="/todos" onClick={handleCloseBurger}>
            <FontAwesomeIcon 
              icon={['fas', 'list']}
              style={{fontSize:iconsFontSize}}/>
            <span style={{
                marginLeft: '10px',
                fontSize: iconsFontSize,              
            }}>Todos</span>
        </a>
      </Menu>
    </nav>
  );
};

export default BurgerMenu;
