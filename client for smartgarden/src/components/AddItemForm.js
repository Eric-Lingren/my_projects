import React from 'react'

const AddItemForm = props => {
    const { handleChange, handleSubmit, inputs: { name, department, price } } = props
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name"/>
            <select onChange={handleChange} name="department">
                <option>Select Department</option>
                <option value="Home Goods">Home Goods</option>
                <option value="Health">Health</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Food">Food</option>
            </select>
            <input type="number" name="price" value={price} onChange={handleChange} placeholder="Price"/>
            <button>Submit</button>
        </form>
    )
}

export default AddItemForm