import React from 'react'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = () => {
  return (
    <button className='button'>
        <span className='icon'>
            < CartIcon />
        </span>
        <span>Sepetim</span>
        <span className='badge'>0</span>
    </button>
  )
}

export default HeaderCartButton