import React, { Component } from 'react'
import Axios from 'axios';
import { withItems } from '../context/ItemProvider'
import ItemList from './ItemList'


class Home extends Component {
    componentDidMount(){
        this.props.getItems()
    }

    render(){
        return (
            <div>
                test
                <ItemList currentItems={this.props.currentItems}/>
            </div>
        )
    }
}

export default withItems(Home)