import React, { Component } from 'react'
import axios from 'axios'

const ItemContext = React.createContext()

class ItemProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentItems: []
        }
    }

    getItems = () => {
        axios.get('/items').then(response => {
            this.setState({
                currentItems: response.data
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    addItem = newItem => {
        axios.post('/items', newItem).then(response => {
            this.setState(prevState => ({
                currentItems: [...prevState.currentItems, response.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


    render(){
        return (
            <ItemContext.Provider 
                value={{
                    currentItems: this.state.currentItems,
                    getItems:     this.getItems,
                    addItem:      this.addItem
                }}>
                { this.props.children }
            </ItemContext.Provider>
        )
    }
}

export default ItemProvider


export const withItems = C => props => (
    <ItemContext.Consumer>
        {value => <C {...props} {...value}/>}
    </ItemContext.Consumer>
)



