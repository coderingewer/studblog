import React from 'react'
import "./ListCard.css"

function ListCard(props) {
  return (
    <div className='list-card' >
        <div className='list-cover-img' >
            <img src="https://www.kanalbilgi.net/wp-content/uploads/2015/06/manzara-fotograflari-kanalbilgi-net-manzara-128.jpg" alt="" />
        </div>
        <div className='list-name'>
            <p className='list-name-text' >Yakında</p>
            <p className='list-items-number'>Çook Yakında bea:)</p>
        </div>

    </div>
  )
}

export default ListCard