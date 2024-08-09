import React from 'react'
import photo from '../../assets/img/404.png'
import './index.scss'
export default function Notfound() {
  return (
    <div className='not'>
    <img src={photo} alt='Page 404'/>
    </div>
  )
}
