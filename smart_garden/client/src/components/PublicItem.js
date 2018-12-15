import React from 'react'
import moment from 'moment'

const PublicItem = props => {
    const { name, department, price, entryDate } = props
    return (
        <div className="item-public">
            <span>{moment(entryDate).format("LL")}</span>
            <h1>{name}</h1>
            <p>{department}</p>
            <p>${price}</p>  
        </div>
    )
}

export default PublicItem


