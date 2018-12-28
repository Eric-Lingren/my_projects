import React, { Component } from 'react';
import { withPlants } from '../context/PlantProvider';
import { withGardens } from '../context/GardenProvider';
import '../css/gardenStyle.css';

const CompanionContext = React.createContext()

class CompanionProvider extends Component {
    constructor(){
        super()
        this.state = {
            getGardenData: [],
            getGardenPlot: [],
            plotHeight: 0,
            plotWidth: 0,
            showBeanRecommend: false,
            showCabbageRecommend: false,
            showCarrotRecommend: false,
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

    
    beanRecommend = () => {
        if( this.state.showBeanRecommend){
            this.setState({showBeanRecommend: false})
        } else {
            this.setState({showBeanRecommend: true})
        } 
    }
    cabbageRecommend = () => {
        if( this.state.showCabbageRecommend){
            this.setState({showCabbageRecommend: false})
        } else {
            this.setState({showCabbageRecommend: true})
        }  
    }
    carrotRecommend = () => {
        if( this.state.showCarrotRecommend){
            this.setState({showCarrotRecommend: false})
        } else {
            this.setState({showCarrotRecommend: true})
        }  
    }


    cellClick = (e, callBack) => {

        e.target.style.backgroundColor = this.props.selectedPlotColor
        e.target.textContent=`${this.props.selectedPlantType}`
        e.target.style.backgroundImage = `url(${this.props.selectedPlantUrl})`
        e.target.style.color = 'black'
        e.target.style.fontWeight = 'bolder'
        e.target.style.fontSize = '24px'
        e.target.style.justifyContent = 'start'
        e.target.style.alignItems = ''

        const clickedCell = e.target.id
        const cellData = e.target.innerHTML
        const cellColor = e.target.style.backgroundColor

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

        const totalCells = width * height
        let cellToRight = 0 
        let cellToLeft = 0 
        let cellAbove = 0
        let cellBelow = 0

        if (clickedCell % width !== 0) {
            cellToRight = parseInt(clickedCell) + parseInt(1)
        }

        if ( (parseInt(clickedCell) - parseInt(1)) % width > 0) {
            cellToLeft = parseInt(clickedCell) - parseInt(1)
        }

        if ( parseInt(clickedCell) - width > 0) {
            cellAbove = parseInt(clickedCell) - parseInt(width)
        }
        
        if ( parseInt(clickedCell) + parseInt(width) < totalCells + 1 ){
            cellBelow = parseInt(clickedCell) + parseInt(width)
        }
        
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


        if (cellData === 'beans' || cellData === 'bean'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML  = `<div id='beanRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend1').addEventListener('mouseover', this.beanRecommend)                                                   
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='beanRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend2').addEventListener('mouseover', this.beanRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='beanRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend3').addEventListener('mouseover', this.beanRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='beanRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend4').addEventListener('mouseover', this.beanRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='beanRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend5').addEventListener('mouseover', this.beanRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='beanRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend6').addEventListener('mouseover', this.beanRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='beanRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend7').addEventListener('mouseover', this.beanRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='beanRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beanRecommend8').addEventListener('mouseover', this.beanRecommend)
            }
        }

        if (cellData === 'cabbage' || cellData === 'cabbages'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML =  `<div id='cabbageRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend1').addEventListener('mouseover', this.cabbageRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='cabbageRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend2').addEventListener('mouseover', this.cabbageRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='cabbageRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend3').addEventListener('mouseover', this.cabbageRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='cabbageRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend4').addEventListener('mouseover', this.cabbageRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='cabbageRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend5').addEventListener('mouseover', this.cabbageRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='cabbageRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend6').addEventListener('mouseover', this.cabbageRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='cabbageRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend7').addEventListener('mouseover', this.cabbageRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='cabbageRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cabbageRecommend8').addEventListener('mouseover', this.cabbageRecommend)
            }
        }

        if (cellData === 'carrots' || cellData === 'carrot'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='carrotRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend1').addEventListener('mouseover', this.carrotRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='carrotRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend2').addEventListener('mouseover', this.carrotRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='carrotRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend3').addEventListener('mouseover', this.carrotRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='carrotRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend4').addEventListener('mouseover', this.carrotRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='carrotRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend5').addEventListener('mouseover', this.carrotRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='carrotRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend6').addEventListener('mouseover', this.carrotRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='carrotRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend7').addEventListener('mouseover', this.carrotRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='carrotRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('carrotRecommend8').addEventListener('mouseover', this.carrotRecommend)
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
                document.getElementById(cellAbove).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<span class='recommend'> A, B, BA, CA, CE, D, L, M, O, PE, RA, SP, TH  </span> <span class='notRecommend'> BE, BR, BS, C, CB, CF, K, PO, R </span>`
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
                    handleAddGardenDimensions: this.handleAddGardenDimensions,
                    showBeanRecommend: this.state.showBeanRecommend,
                    beanRecommend: this.beanRecommend,
                    cabbageRecommend: this.cabbageRecommend,
                    showCabbageRecommend: this.state.showCabbageRecommend,
                    carrotRecommend: this.carrotRecommend,
                    showCarrotRecommend: this.state.showCarrotRecommend,
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
