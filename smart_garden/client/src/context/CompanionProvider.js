import React, { Component } from 'react'
import { withPlants } from '../context/PlantProvider'
import { withGardens } from '../context/GardenProvider'
const CompanionContext = React.createContext()

class CompanionProvider extends Component {
    constructor(){
        super()
        this.state = {
            getGardenData: []
        }
    }

    handleAddGardenData = (data) => {
        this.setState({
            getGardenData: data
        })
    }

    cellClick = (e) => {
        console.log(e.target)
        e.target.style.backgroundColor = this.props.selectedPlotColor
        e.target.textContent=`${this.props.selectedPlantType}`
        
        const clickedCell = e.target.id
        const cellData = e.target.innerHTML
        const cellColor = e.target.style.backgroundColor
        // console.log(clickedCell)
        // console.log(cellColor)
        for (let i = 0; i < this.state.gardenData.length; i++){
            if(this.state.gardenData[i].cell === Number(clickedCell)){
                this.gardenData[i].contents = cellData
                this.gardenData[i].backgroundColor = cellColor
                let newPlot = this.gardenData[i]
                this.setState(prevState => {
                    return {
                        gardenData: prevState.gardenData.map(garden => Number(clickedCell) === garden.cell ? newPlot : garden)
                    }
                })
            }
        }

        // const height = this.state.plotHeight
        // const width = this.state.plotWidth
        // // console.log('width ' + width)
        // // console.log('height ' + height)

        // const totalCells = width * height
        // let cellToRight = 0 
        // let cellToLeft = 0 
        // let cellAbove = 0
        // let cellBelow = 0
        

        // if (clickedCell % width !== 0) {
        //     cellToRight = parseInt(clickedCell) + parseInt(1)
        // }
        // //console.log('cell to right is: ' + cellToRight)

        // if ( (parseInt(clickedCell) - parseInt(1)) % width > 0) {
        //     cellToLeft = parseInt(clickedCell) - parseInt(1)
        // }
        // //console.log('cell to left is: ' + cellToLeft)

        // if ( parseInt(clickedCell) - width > 0) {
        //     cellAbove = parseInt(clickedCell) - parseInt(width)
        // }
        // //console.log('cell above is: ' + cellAbove)
        
        // if ( parseInt(clickedCell) + parseInt(width) < totalCells + 1 ){
        //     cellBelow = parseInt(clickedCell) + parseInt(width)
        // }
        // //console.log('cell below is: ' + cellBelow)
        // let topLeftCell = (cellAbove - 1)
        // let topRightCell = (cellAbove + 1)
        // let bottomLeftCell = (cellBelow - 1)
        // let bottomRightCell = (cellBelow + 1)

        // if (cellAbove === 0) {
        //     topLeftCell = 0
        //     topRightCell = 0
        // } else if (clickedCell % width === 0){
        //     topRightCell = 0
        // } else if ((clickedCell - 1) % width === 0 ){
        //     topLeftCell = 0
        // }
        // else {
        //     topLeftCell = (cellAbove - 1)
        //     topRightCell = (cellAbove + 1)
        // }
        // if (cellBelow === 0) {
        //     bottomLeftCell = 0
        //     bottomRightCell = 0
        // } else if (clickedCell % width === 0){
        //     bottomRightCell = 0
        // } else if ((clickedCell - 1) % width === 0 ){
        //     bottomLeftCell = 0
        // }
        // else {
        //     bottomLeftCell = (cellBelow - 1)
        //     bottomRightCell = (cellBelow + 1)
        // }
        // // console.log('topLeftCell is ' + topLeftCell)
        // // console.log('topRightCell is ' + topRightCell)
        // // console.log('bottomLeftCell is ' + bottomLeftCell)
        // // console.log('bottomRightCell is ' + bottomRightCell)
        // console.log('clicked cell is ' + cellData)
        // if (cellData === 'eggplant'){
        //     if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
        //         document.getElementById(cellAbove).innerHTML = `<span className='recomended'> bean pepper tomato </span><span> Dont Plant This </span>`

        //         console.dir(document.getElementById(cellAbove))
        //     }
        //     if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
        //         document.getElementById(cellBelow).innerHTML = 'Below'
        //     }
        //     if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
        //         document.getElementById(cellToLeft).innerHTML = 'Left'
        //     }
        //     if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
        //         document.getElementById(cellToRight).innerHTML = 'Right'
        //     }
        //     if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
        //         document.getElementById(topLeftCell).innerHTML = 'topLeft'
        //     }
        //     if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
        //         document.getElementById(topRightCell).innerHTML = 'topRight'
        //     }
        //     if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
        //         document.getElementById(bottomLeftCell).innerHTML = 'bottomLeft'
        //     }
        //     if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
        //         document.getElementById(bottomRightCell).innerHTML = 'bottomRight'
        //     }
        // }
        
    }



    render(){
        return (
            <CompanionContext.Provider 
                value={{
                    cellClick: this.cellClick,
                    handleAddGardenData: this.handleAddGardenData,
                    tryingToGetGardenData: this.tryingToGetGardenData
                }}>
                { this.props.children }
            </CompanionContext.Provider>
        )
    }
}

export default withPlants(withGardens(CompanionProvider))

export const withCompanion = C => props => (
    <CompanionContext.Consumer>
        {value => <C {...props} {...value}/>}
    </CompanionContext.Consumer>
)
