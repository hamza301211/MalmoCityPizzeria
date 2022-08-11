import React,{useState} from 'react'
import "./style.css"
import Menu from './Menuapi'
import MenuCard from './MenuCard'

const Restaraunt = () => {
    const [menuData,setMenuData] = useState(Menu);

    const filterItem = (category) =>{
        const updatedList = Menu.filter((currElem)=>{
            return currElem.category === category;
        });
        setMenuData(updatedList);
    }

  return (
    <>
    <nav className='navbar '>
    <div className='btn-group'>
    <button className='btn-group__item' onClick={()=>filterItem("pizza")}>
    PIZZA
    </button>
    <button className='btn-group__item' onClick={()=>filterItem("Burger")}>
    BURGERS
    </button>
    <button className='btn-group__item' onClick={()=>filterItem("salad")}>
    SALAD
    </button>
    <button className='btn-group__item' onClick={()=>filterItem("drinks")}>
    DRINKS
    </button>
    <button className='btn-group__item' onClick={()=>filterItem("sides")}>
    SIDES
    </button>
    

    </div>


    </nav>
   <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaraunt