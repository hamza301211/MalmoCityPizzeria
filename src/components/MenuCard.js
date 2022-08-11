import React from 'react'

const MenuCard = ({menuData}) => {
    console.log(menuData);
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((currElem)=>{
        return(
            <>
            <div className='card-container' key={currElem.id}>
        <div className='card'>
        <div className='card-body'>
        <span className='card-number card-circle subtle'>
        {currElem.id}
        </span>
        <span className='card-author subtle'>
        {currElem.category}
        </span>
        <h2 className='card-title'>
        {currElem.name}
        </h2>
        <span className='card-description subtle'>
        I Love maggie Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique magnam vero? Ullam quaerat, error quia quasi tempora voluptate reiciendis autem? Earum alias ipsum dolore blanditiis? Animi magnam delectus alias et laborum ipsum, iure, quia distinctio mollitia deserunt quas porro.
        </span>
        <div className='card-read'>
        READ
        </div>
        <img src={currElem.image} alt='images' className='card-media' />
        <span className='card-tag subtle'>
        ORDER NOW
        </span>

        </div>

        </div>

    </div>
        </>
        );

    })}
         
    </section>
    </>
  )
}

export default MenuCard