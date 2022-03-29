import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard';

const Resturant = () => {
    const[menuData, setMenuData] = useState(Menu);
    const filterItem = (category) => {
      const updatedlist = Menu.filter((curElem) =>{
        return curElem.category === category;

      });
      setMenuData(updatedlist)
    };
   

    // const my ={ color: "red"}
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={() =>filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={() =>filterItem("lunch")}>lunch</button>
        <button className='btn-group__item' onClick={() =>filterItem("evening")}>evening</button>
        <button className='btn-group__item' onClick={() =>filterItem("dinner")}>dinner</button>
        <button className='btn-group__item' onClick={() =>setMenuData(Menu)}>All</button>
      </div>
    </nav>
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant;
