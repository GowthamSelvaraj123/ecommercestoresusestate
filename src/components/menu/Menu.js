import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Menu(props) {
  const menuLists = props.menu;
  const myMenu = menuLists.map((item, index) => <li key={index}><Nav.Link href={`#${item.menulink}`}>
       {item.menuicon && <img src={item.menuicon} alt={item.menuname} style={{ marginRight: '8px' }} />}
       {item.fontAwesomeIconEnable && <FontAwesomeIcon icon={item.fontAwesomeIconEnable} /> }
       {item.menuname}
       </Nav.Link></li>)
  return (
    <>
        <Nav className={`${props.customName}`} navbarScroll>
            <ul className={`${props.MenuStyleClass}`}>
            {myMenu}
            </ul>
        </Nav>
    </>
  )
}
