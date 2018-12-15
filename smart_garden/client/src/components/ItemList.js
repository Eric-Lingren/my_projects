import React from 'react'
import PublicItem from './PublicItem'

const ItemList = ({ currentItems }) => {
    return (
        <div className="item-list">
            { currentItems.map(item => <PublicItem {...item} key={item._id}/>) }
        </div>
    )
}

export default ItemList

