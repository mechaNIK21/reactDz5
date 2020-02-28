import React from 'react'
import style from './style.module.css'
import ContentBox from './ContentBox'

import YouTube from './youtube.jpg'
import Map from './map.jpg'
import Gmail from './gmail.jpg'

export default props => {
    return (
        <div ref={props.myRef} className={style.Content}>
            <ContentBox way={YouTube}>YouTube</ContentBox>
            <ContentBox way={Map}>Карты</ContentBox>
            <ContentBox way={Gmail}>Почта</ContentBox>
        </div>
    )
}
