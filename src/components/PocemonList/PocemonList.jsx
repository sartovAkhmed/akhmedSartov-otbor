import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pocemon } from '../Pocemon/Pocemon'
import { fetchPocemon } from '../../store/pocemonSlice'

import stylles from './PocemonList.module.scss'

export const PocemonList = () => {
    const pocemons = useSelector((state) => state.pocemons.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPocemon())
    }, [dispatch])

    return (
        <>
            <div className={stylles.pocemons}>
                {pocemons.map((pocemon, index) => (
                    <Pocemon key={index} {...pocemon} />
                ))}
            </div>
        </>
    )
}
