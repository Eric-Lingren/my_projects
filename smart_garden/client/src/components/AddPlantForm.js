import React from 'react';
import '../css/addPlantForm.css';

const AddPlantForm = () => {

    return(
        <div>
            <form className='addPlantForm'>
                Add A New Plant:
                Type: <input type='text' placeholder='Pumpkin' />
                Varitey: <input type='text' placeholder='Jackolantern' />
                Garden Plot Color: <input type='color' />
            </form>
        </div>
    )
    
}

export default AddPlantForm