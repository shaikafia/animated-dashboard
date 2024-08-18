import React from 'react';  
import { styled } from 'styled-components';

const MenuList = styled.ul`  
  list-style: none;  
  padding: 0;  
`; 

const MenuItem = styled.li`  
  padding: 10px;  
  cursor: pointer;  
  transition: background 0.3s;  

  &:hover {  
    background-color: #444;  
  }  
`; 

const Sidebar: React.FC = () => {  
    function onChangeContent(_arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return (  
        <aside style={{ width: '200px', background: '#f2f2f2', padding: '20px' }}>  
            <h2>Menu</h2>  
            <MenuList>  
              <MenuItem onClick={() => onChangeContent('dashboard')}>Dashboard</MenuItem>  
              <MenuItem onClick={() => onChangeContent('settings')}>Settings</MenuItem>  
              <MenuItem onClick={() => onChangeContent('profile')}>Profile</MenuItem>  
              <MenuItem onClick={() => onChangeContent('logout')}>Logout</MenuItem>  
    </MenuList>  
            
        </aside>  
    );  
};  

export default Sidebar;