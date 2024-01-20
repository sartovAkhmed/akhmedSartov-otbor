import React from 'react'
import stylles from './Pocemon.module.scss'

export const Pocemon = ({name, url}) => {
    return (
        <div className={stylles.pocemon}>
            <img src={url} alt="" className={stylles.pocemon__img} />
            <h4>{name}</h4>
        </div>
    )
}
