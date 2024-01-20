import React from 'react'
import { PocemonList } from '../components/PocemonList/PocemonList'

export const Pocemon = () => {
    return (
        <div>
            <div className="container">
                <div className="pocemon__inner">
                    <PocemonList />
                </div>
            </div>
        </div>
    )
}
