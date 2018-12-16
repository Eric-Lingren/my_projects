import React from 'react'
//import moment from 'moment'

const PublicItem = props => {
    const { plantType, varitey } = props
    return (
        <div className="item-public">
            {/* <span>{moment(entryDate).format("LL")}</span>
            <h1>{plantType}</h1>
            <p>{varitey}</p>
            <p>color goes here</p>   */}

            <select>
                <option value={plantType}> {plantType} - {varitey} </option>
            </select>
        </div>
    )
}

export default PublicItem


