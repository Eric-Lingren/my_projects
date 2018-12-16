import React from 'react';
import '../css/addPlantForm.css';

const AddPlantForm = () => {

    return(
        <div>
            <form className='addPlantForm'>
            <fieldset className='fieldSet'>
                <legend>Add New Plant</legend>
                Type: <input type='text' placeholder='Pumpkin' required/>
                Varitey: <input type='text' placeholder='Jackolantern' />
                Plot Color: <input type='color' />
                <button>Add</button>
                </fieldset>
            </form>
        </div>
    )
    
}

export default AddPlantForm