import React, { Component } from 'react'
import { withItems } from '../context/ItemProvider'
import Form from '../shared/Form'
import AddItemForm from './AddItemForm'
import ItemList from './ItemList'


class AdminCms extends Component {
    componentDidMount(){
        this.props.getItems()
    }

    render(){
        return (
            <div>
                <Form
                    inputs={{ name: '', department: '', price: '' }}
                    submit={inputs => this.props.addItem(inputs)}
                    render={props => <AddItemForm {...props}/>}
                /> 
                <ItemList currentItems={this.props.currentItems}/>
            </div>
        )
    }
}


export default withItems(AdminCms)