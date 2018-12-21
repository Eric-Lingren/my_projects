import React, { Component } from 'react'
import { withPlants } from '../context/PlantProvider'
import { withGardens } from '../context/GardenProvider'
import '../css/gardenStyle.css'
const CompanionContext = React.createContext()


class CompanionProvider extends Component {
    constructor(){
        super()
        this.state = {
            getGardenData: [],
            getGardenPlot: [],
            plotHeight: 0,
            plotWidth: 0,
            
        }
        this.otherGardenData = []
    }
    

    handleAddGardenData = (data, plot, otherGardenDataVAR) => {
        this.setState({
            getGardenData: data,
            getGardenPlot: plot,
        })
        this.otherGardenData = otherGardenDataVAR
    }

    handleAddGardenDimensions = (height, width) => {
        this.setState({
            plotHeight: height,
            plotWidth: width,
        })
    }

cellClick = (e) => {
    // console.log('clicked cell')
    // console.log(this.state)
    // console.log(this.otherGardenData)
    // console.log(e.target)
    e.target.style.backgroundColor = this.props.selectedPlotColor
    e.target.textContent=`${this.props.selectedPlantType}`

    const clickedCell = e.target.id
    const cellData = e.target.innerHTML
    const cellColor = e.target.style.backgroundColor
    // console.log(clickedCell)
    // console.log(cellColor)
    for (let i = 0; i < this.state.getGardenData.length; i++){
        if(this.state.getGardenData[i].cell === Number(clickedCell)){
            this.otherGardenData[i].contents = cellData
            this.otherGardenData[i].backgroundColor = cellColor
            let newPlot = this.otherGardenData[i]
            this.setState(prevState => {
                return {
                    getGardenData: prevState.getGardenData.map(garden => Number(clickedCell) === garden.cell ? newPlot : garden)
                }
            })
        }
    }

    const height = this.state.plotHeight
    const width = this.state.plotWidth
    // console.log('width ' + width)
    // console.log('height ' + height)

    const totalCells = width * height
    let cellToRight = 0 
    let cellToLeft = 0 
    let cellAbove = 0
    let cellBelow = 0
    

    if (clickedCell % width !== 0) {
        cellToRight = parseInt(clickedCell) + parseInt(1)
    }
    //console.log('cell to right is: ' + cellToRight)

    if ( (parseInt(clickedCell) - parseInt(1)) % width > 0) {
        cellToLeft = parseInt(clickedCell) - parseInt(1)
    }
    //console.log('cell to left is: ' + cellToLeft)

    if ( parseInt(clickedCell) - width > 0) {
        cellAbove = parseInt(clickedCell) - parseInt(width)
    }
    //console.log('cell above is: ' + cellAbove)
    
    if ( parseInt(clickedCell) + parseInt(width) < totalCells + 1 ){
        cellBelow = parseInt(clickedCell) + parseInt(width)
    }
    //console.log('cell below is: ' + cellBelow)
    let topLeftCell = (cellAbove - 1)
    let topRightCell = (cellAbove + 1)
    let bottomLeftCell = (cellBelow - 1)
    let bottomRightCell = (cellBelow + 1)

    if (cellAbove === 0) {
        topLeftCell = 0
        topRightCell = 0
    } else if (clickedCell % width === 0){
        topRightCell = 0
    } else if ((clickedCell - 1) % width === 0 ){
        topLeftCell = 0
    }
    else {
        topLeftCell = (cellAbove - 1)
        topRightCell = (cellAbove + 1)
    }
    if (cellBelow === 0) {
        bottomLeftCell = 0
        bottomRightCell = 0
    } else if (clickedCell % width === 0){
        bottomRightCell = 0
    } else if ((clickedCell - 1) % width === 0 ){
        bottomLeftCell = 0
    }
    else {
        bottomLeftCell = (cellBelow - 1)
        bottomRightCell = (cellBelow + 1)
    }
    // console.log('topLeftCell is ' + topLeftCell)
    // console.log('topRightCell is ' + topRightCell)
    // console.log('bottomLeftCell is ' + bottomLeftCell)
    // console.log('bottomRightCell is ' + bottomRightCell)
    // console.log('clicked cell is ' + cellData)

    if (cellData === 'beans' || cellData === 'bean'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> BE, BR, C, CA, CF, CU, E, P, PO, RA, S, SQ, TO  </span> <span class='notRecommend'> G, O, PE, SU </span>`
        }
    }

    if (cellData === 'cabbage' || cellData === 'cabbages'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, CE, CU, D, K, L, O, PO, SA, SP, TH </span> <span class='notRecommend'> BR, CF, S, TO </span>`
        }
    }

    if (cellData === 'carrots' || cellData === 'carrot'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, L, O, P, RA, SA, TO  </span> <span class='notRecommend'> D, PA </span>`
        }
    }

    if (cellData === 'corn'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, CU, L, M, P, PO, SQ, SU  </span> <span class='notRecommend'> TO </span>`
        }
    }

    if (cellData === 'cucumber' || cellData === 'cucumbers'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, C, CF, L, P, RA, SU  </span> <span class='notRecommend'> H, M, PO </span>`
        }
    }

    if (cellData === 'eggplant' || cellData === 'eggplants'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, PE, TO </span> <span class='notRecommend'> </span>`
        }
    }

    if (cellData === 'lettuce' || cellData === 'lettuces'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> A, B, BE, BS, E, P, O, OK, RA, SP  </span> <span class='notRecommend'> BR, CE </span>`
        }
    }

    if (cellData === 'onion' || cellData === 'onions'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> BE, BR, CA, CB, CU, L, PE, PO, S, SP   </span> <span class='notRecommend'> B, P, SA </span>`
        }
    }

    if (cellData === 'peas' || cellData === 'pea'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> CF, G, MT, TU </span> <span class='notRecommend'> </span>`
        }
    }

    if (cellData === 'pepper' || cellData === 'peppers' ){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> OK, TO, O, BA, CL, SP  </span> <span class='notRecommend'> B, BS, K </span>`
        }
    }

    if (cellData === 'potato' || cellData === 'potatoes'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, BR, C, CB, CF, P, TU  </span> <span class='notRecommend'> CA, CU, PU, SQ, TO </span>`
        }
    }

    if (cellData === 'pumpkin' || cellData === 'pumpkins'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, C, OR, RA  </span> <span class='notRecommend'> PO </span>`
        }
    }
    
    if (cellData === 'radish' || cellData === 'radishes'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, BA, CL, CU, E, L, O, P, SP, SQ, TO  </span> <span class='notRecommend'> GR </span>`
        }
    }

    if (cellData === 'spinich'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, BR, CA, CF, P, S, TU  </span> <span class='notRecommend'> </span>`
        }
    }

    if (cellData === 'squash'){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> B, C, OK, RA  </span> <span class='notRecommend'> </span>`
        }
    }

    if (cellData === 'tomato' || cellData === 'tomatoes' ){
        if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
            document.getElementById(cellAbove).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
        if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
            document.getElementById(cellBelow).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
        if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
            document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
        if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
            document.getElementById(cellToRight).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
        if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
            document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
        if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
            document.getElementById(topRightCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
        if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
            document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
        if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
            document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> B, BR, BS, C, CB, CF, K, PO, R </span>`
        }
    }
}



    render(){
        return (
            <CompanionContext.Provider 
                value={{
                    cellClick: this.cellClick,
                    handleAddGardenData: this.handleAddGardenData,
                    tryingToGetGardenData: this.tryingToGetGardenData,
                    handleAddGardenDimensions: this.handleAddGardenDimensions
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
