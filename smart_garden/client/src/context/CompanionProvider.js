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
            showAsparagusRecommend: false,
            showBasilRecommend: false,
            showBeanRecommend: false,
            showBeetRecommend: false,
            showBroccoliRecommend: false,
            showCabbageRecommend: false,
            showCarrotRecommend: false,
            showCornRecommend: false,
            showCucumberRecommend: false,
            showEggplantRecommend: false,
            showLettuceRecommend: false,
            showOnionRecommend: false,
            showPeaRecommend: false,
            showPepperRecommend: false,
            showPotatoRecommend: false,
            showPumpkinRecommend: false,
            showRadishRecommend: false,
            showSpinachRecommend: false,
            showSquashRecommend: false,
            showTomatoRecommend: false,
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
    
    asparagusRecommend = () => {
        if( this.state.showAsparagusRecommend){
            this.setState({showAsparagusRecommend: false})
        } else {
            this.setState({showAsparagusRecommend: true})
        } 
    }
    basilRecommend = () => {
        if( this.state.showBasilRecommend){
            this.setState({showBasilRecommend: false})
        } else {
            this.setState({showBasilRecommend: true})
        } 
    }
    beanRecommend = () => {
        if( this.state.showBeanRecommend){
            this.setState({showBeanRecommend: false})
        } else {
            this.setState({showBeanRecommend: true})
        } 
    }
    beetRecommend = () => {
        if( this.state.showBeetRecommend){
            this.setState({showBeetRecommend: false})
        } else {
            this.setState({showBeetRecommend: true})
        } 
    }
    broccoliRecommend = () => {
        if( this.state.showBroccoliRecommend){
            this.setState({showBroccoliRecommend: false})
        } else {
            this.setState({showBroccoliRecommend: true})
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
    cornRecommend = () => {
        if( this.state.showCornRecommend){
            this.setState({showCornRecommend: false})
        } else {
            this.setState({showCornRecommend: true})
        }  
    }
    cucumberRecommend = () => {
        if( this.state.showCucumberRecommend){
            this.setState({showCucumberRecommend: false})
        } else {
            this.setState({showCucumberRecommend: true})
        }  
    }
    eggplantRecommend = () => {
        if( this.state.showEggplantRecommend){
            this.setState({showEggplantRecommend: false})
        } else {
            this.setState({showEggplantRecommend: true})
        }  
    }
    lettuceRecommend = () => {
        if( this.state.showLettuceRecommend){
            this.setState({showLettuceRecommend: false})
        } else {
            this.setState({showLettuceRecommend: true})
        }  
    }
    onionRecommend = () => {
        if( this.state.showOnionRecommend){
            this.setState({showOnionRecommend: false})
        } else {
            this.setState({showOnionRecommend: true})
        }  
    }
    peaRecommend = () => {
        if( this.state.showPeaRecommend){
            this.setState({showPeaRecommend: false})
        } else {
            this.setState({showPeaRecommend: true})
        }  
    }
    pepperRecommend = () => {
        if( this.state.showPepperRecommend){
            this.setState({showPepperRecommend: false})
        } else {
            this.setState({showPepperRecommend: true})
        }  
    }
    potatoRecommend = () => {
        if( this.state.showPotatoRecommend){
            this.setState({showPotatoRecommend: false})
        } else {
            this.setState({showPotatoRecommend: true})
        }  
    }
    pumpkinRecommend = () => {
        if( this.state.showPumpkinRecommend){
            this.setState({showPumpkinRecommend: false})
        } else {
            this.setState({showPumpkinRecommend: true})
        }  
    }
    radishRecommend = () => {
        if( this.state.showRadishRecommend){
            this.setState({showRadishRecommend: false})
        } else {
            this.setState({showRadishRecommend: true})
        }  
    }
    spinachRecommend = () => {
        if( this.state.showSpinachRecommend){
            this.setState({showSpinachRecommend: false})
        } else {
            this.setState({showSpinachRecommend: true})
        }  
    }
    squashRecommend = () => {
        if( this.state.showSquashRecommend){
            this.setState({showSquashRecommend: false})
        } else {
            this.setState({showSquashRecommend: true})
        }  
    }
    tomatoRecommend = () => {
        if( this.state.showTomatoRecommend){
            this.setState({showTomatoRecommend: false})
        } else {
            this.setState({showTomatoRecommend: true})
        }  
    }

    cellClick = (e, callBack) => {

        e.target.textContent=`${this.props.selectedPlantType}`
        e.target.style.backgroundImage = `url(${this.props.selectedPlantUrl})`
        e.target.style.color = 'black'
        e.target.style.fontWeight = 'bolder'
        e.target.style.fontSize = '20px'
        e.target.style.justifyContent = 'start'
        e.target.style.alignItems = ''

        const clickedCell = e.target.id
        const cellData = e.target.innerHTML
        const cellImage = e.target.style.backgroundImage

        console.log(cellImage)

        for (let i = 0; i < this.state.getGardenData.length; i++){
            if(this.state.getGardenData[i].cell === Number(clickedCell)){
                this.otherGardenData[i].contents = cellData
                this.otherGardenData[i].imageUrl = cellImage
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

        if (cellData === 'asparagus' ){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML  = `<div id='asparagusRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend1').addEventListener('mouseover', this.asparagusRecommend)                                                   
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='asparagusRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend2').addEventListener('mouseover', this.asparagusRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='asparagusRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend3').addEventListener('mouseover', this.asparagusRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='asparagusRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend4').addEventListener('mouseover', this.asparagusRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='asparagusRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend5').addEventListener('mouseover', this.asparagusRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='asparagusRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend6').addEventListener('mouseover', this.asparagusRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='asparagusRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend7').addEventListener('mouseover', this.asparagusRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='asparagusRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('asparagusRecommend8').addEventListener('mouseover', this.asparagusRecommend)
            }
        }

        if (cellData === 'basil' ){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML  = `<div id='basilRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend1').addEventListener('mouseover', this.basilRecommend)                                                   
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='basilRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend2').addEventListener('mouseover', this.basilRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='basilRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend3').addEventListener('mouseover', this.basilRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='basilRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend4').addEventListener('mouseover', this.basilRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='basilRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend5').addEventListener('mouseover', this.basilRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='basilRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend6').addEventListener('mouseover', this.basilRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='basilRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend7').addEventListener('mouseover', this.basilRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='basilRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('basilRecommend8').addEventListener('mouseover', this.basilRecommend)
            }
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

        if (cellData === 'beet' || cellData === 'beets'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML  = `<div id='beetRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend1').addEventListener('mouseover', this.beetRecommend)                                                   
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='beetRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend2').addEventListener('mouseover', this.beetRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='beetRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend3').addEventListener('mouseover', this.beetRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='beetRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend4').addEventListener('mouseover', this.beetRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='beetRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend5').addEventListener('mouseover', this.beetRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='beetRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend6').addEventListener('mouseover', this.beetRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='beetRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend7').addEventListener('mouseover', this.beetRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='beetRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('beetRecommend8').addEventListener('mouseover', this.beetRecommend)
            }
        }

        if (cellData === 'broccoli'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML  = `<div id='broccoliRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend1').addEventListener('mouseover', this.broccoliRecommend)                                                   
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='broccoliRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend2').addEventListener('mouseover', this.broccoliRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='broccoliRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend3').addEventListener('mouseover', this.broccoliRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='broccoliRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend4').addEventListener('mouseover', this.broccoliRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='broccoliRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend5').addEventListener('mouseover', this.broccoliRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='broccoliRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend6').addEventListener('mouseover', this.broccoliRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='broccoliRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend7').addEventListener('mouseover', this.broccoliRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='broccoliRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('broccoliRecommend8').addEventListener('mouseover', this.broccoliRecommend)
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
                document.getElementById(cellAbove).innerHTML = `<div id='cornRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend1').addEventListener('mouseover', this.cornRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='cornRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend2').addEventListener('mouseover', this.cornRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='cornRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend3').addEventListener('mouseover', this.cornRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='cornRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend4').addEventListener('mouseover', this.cornRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='cornRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend5').addEventListener('mouseover', this.cornRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='cornRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend6').addEventListener('mouseover', this.cornRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='cornRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend7').addEventListener('mouseover', this.cornRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='cornRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cornRecommend8').addEventListener('mouseover', this.cornRecommend)
            }
        }

        if (cellData === 'cucumber' || cellData === 'cucumbers'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='cucumberRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend1').addEventListener('mouseover', this.cucumberRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='cucumberRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend2').addEventListener('mouseover', this.cucumberRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='cucumberRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend3').addEventListener('mouseover', this.cucumberRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='cucumberRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend4').addEventListener('mouseover', this.cucumberRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='cucumberRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend5').addEventListener('mouseover', this.cucumberRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='cucumberRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend6').addEventListener('mouseover', this.cucumberRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='cucumberRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend7').addEventListener('mouseover', this.cucumberRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='cucumberRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('cucumberRecommend8').addEventListener('mouseover', this.cucumberRecommend)
            }
        }

        if (cellData === 'eggplant' || cellData === 'eggplants'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='eggplantRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend1').addEventListener('mouseover', this.eggplantRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='eggplantRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend2').addEventListener('mouseover', this.eggplantRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='eggplantRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend3').addEventListener('mouseover', this.eggplantRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='eggplantRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend4').addEventListener('mouseover', this.eggplantRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='eggplantRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend5').addEventListener('mouseover', this.eggplantRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='eggplantRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend6').addEventListener('mouseover', this.eggplantRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='eggplantRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend7').addEventListener('mouseover', this.eggplantRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='eggplantRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('eggplantRecommend8').addEventListener('mouseover', this.eggplantRecommend)
            }
        }

        if (cellData === 'lettuce' || cellData === 'lettuces'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='lettuceRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend1').addEventListener('mouseover', this.lettuceRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='lettuceRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend2').addEventListener('mouseover', this.lettuceRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='lettuceRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend3').addEventListener('mouseover', this.lettuceRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='lettuceRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend4').addEventListener('mouseover', this.lettuceRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='lettuceRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend5').addEventListener('mouseover', this.lettuceRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='lettuceRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend6').addEventListener('mouseover', this.lettuceRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='lettuceRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend7').addEventListener('mouseover', this.lettuceRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='lettuceRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('lettuceRecommend8').addEventListener('mouseover', this.lettuceRecommend)
            }
        }

        if (cellData === 'onion' || cellData === 'onions'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='onionRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend1').addEventListener('mouseover', this.onionRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='onionRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend2').addEventListener('mouseover', this.onionRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='onionRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend3').addEventListener('mouseover', this.onionRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='onionRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend4').addEventListener('mouseover', this.onionRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='onionRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend5').addEventListener('mouseover', this.onionRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='onionRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend6').addEventListener('mouseover', this.onionRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='onionRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend7').addEventListener('mouseover', this.onionRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='onionRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('onionRecommend8').addEventListener('mouseover', this.onionRecommend)
            }
        }

        if (cellData === 'peas' || cellData === 'pea'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='peaRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend1').addEventListener('mouseover', this.peaRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='peaRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend2').addEventListener('mouseover', this.peaRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='peaRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend3').addEventListener('mouseover', this.peaRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='peaRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend4').addEventListener('mouseover', this.peaRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='peaRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend5').addEventListener('mouseover', this.peaRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='peaRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend6').addEventListener('mouseover', this.peaRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='peaRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend7').addEventListener('mouseover', this.peaRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='peaRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('peaRecommend8').addEventListener('mouseover', this.peaRecommend)
            }
        }

        if (cellData === 'pepper' || cellData === 'peppers' ){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='pepperRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend1').addEventListener('mouseover', this.pepperRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='pepperRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend2').addEventListener('mouseover', this.pepperRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='pepperRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend3').addEventListener('mouseover', this.pepperRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='pepperRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend4').addEventListener('mouseover', this.pepperRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='pepperRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend5').addEventListener('mouseover', this.pepperRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='pepperRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend6').addEventListener('mouseover', this.pepperRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='pepperRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend7').addEventListener('mouseover', this.pepperRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='pepperRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pepperRecommend8').addEventListener('mouseover', this.pepperRecommend)
            }
        }

        if (cellData === 'potato' || cellData === 'potatoes'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='potatoRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend1').addEventListener('mouseover', this.potatoRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='potatoRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend2').addEventListener('mouseover', this.potatoRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='potatoRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend3').addEventListener('mouseover', this.potatoRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='potatoRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend4').addEventListener('mouseover', this.potatoRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='potatoRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend5').addEventListener('mouseover', this.potatoRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='potatoRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend6').addEventListener('mouseover', this.potatoRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='potatoRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend7').addEventListener('mouseover', this.potatoRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='potatoRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('potatoRecommend8').addEventListener('mouseover', this.potatoRecommend)
            }
        }

        if (cellData === 'pumpkin' || cellData === 'pumpkins'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='pumpkinRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend1').addEventListener('mouseover', this.pumpkinRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='pumpkinRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend2').addEventListener('mouseover', this.pumpkinRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='pumpkinRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend3').addEventListener('mouseover', this.pumpkinRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='pumpkinRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend4').addEventListener('mouseover', this.pumpkinRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='pumpkinRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend5').addEventListener('mouseover', this.pumpkinRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='pumpkinRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend6').addEventListener('mouseover', this.pumpkinRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='pumpkinRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend7').addEventListener('mouseover', this.pumpkinRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='pumpkinRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('pumpkinRecommend8').addEventListener('mouseover', this.pumpkinRecommend)
            }
        }
        
        if (cellData === 'radish' || cellData === 'radishes'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='radishRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend1').addEventListener('mouseover', this.radishRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='radishRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend2').addEventListener('mouseover', this.radishRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='radishRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend3').addEventListener('mouseover', this.radishRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='radishRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend4').addEventListener('mouseover', this.radishRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='radishRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend5').addEventListener('mouseover', this.radishRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='radishRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend6').addEventListener('mouseover', this.radishRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='radishRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend7').addEventListener('mouseover', this.radishRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='radishRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('radishRecommend8').addEventListener('mouseover', this.radishRecommend)
            }
        }

        if (cellData === 'spinach'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='spinachRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend1').addEventListener('mouseover', this.spinachRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='spinachRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend2').addEventListener('mouseover', this.spinachRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='spinachRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend3').addEventListener('mouseover', this.spinachRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='spinachRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend4').addEventListener('mouseover', this.spinachRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='spinachRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend5').addEventListener('mouseover', this.spinachRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='spinachRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend6').addEventListener('mouseover', this.spinachRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='spinachRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend7').addEventListener('mouseover', this.spinachRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='spinachRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('spinachRecommend8').addEventListener('mouseover', this.spinachRecommend)
            }
        }

        if (cellData === 'squash'){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='squashRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend1').addEventListener('mouseover', this.squashRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='squashRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend2').addEventListener('mouseover', this.squashRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='squashRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend3').addEventListener('mouseover', this.squashRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='squashRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend4').addEventListener('mouseover', this.squashRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='squashRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend5').addEventListener('mouseover', this.squashRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='squashRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend6').addEventListener('mouseover', this.squashRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='squashRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend7').addEventListener('mouseover', this.squashRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='squashRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('squashRecommend8').addEventListener('mouseover', this.squashRecommend)
            }
        }

        if (cellData === 'tomato' || cellData === 'tomatoes' ){
            if (cellAbove !== 0 && document.getElementById(cellAbove).innerHTML === cellAbove.toString() ) {
                document.getElementById(cellAbove).innerHTML = `<div id='tomatoRecommend1' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend1').addEventListener('mouseover', this.tomatoRecommend)
            }
            if (cellBelow !== 0 && document.getElementById(cellBelow).innerHTML === cellBelow.toString() ) {
                document.getElementById(cellBelow).innerHTML = `<div id='tomatoRecommend2' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend2').addEventListener('mouseover', this.tomatoRecommend)
            }
            if (cellToLeft !== 0 && document.getElementById(cellToLeft).innerHTML === cellToLeft.toString() ) {
                document.getElementById(cellToLeft).innerHTML = `<div id='tomatoRecommend3' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend3').addEventListener('mouseover', this.tomatoRecommend)
            }
            if (cellToRight !== 0 && document.getElementById(cellToRight).innerHTML === cellToRight.toString() ) {
                document.getElementById(cellToRight).innerHTML = `<div id='tomatoRecommend4' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend4').addEventListener('mouseover', this.tomatoRecommend)
            }
            if (topLeftCell !== 0 && document.getElementById(topLeftCell).innerHTML === topLeftCell.toString() ) {
                document.getElementById(topLeftCell).innerHTML = `<div id='tomatoRecommend5' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend5').addEventListener('mouseover', this.tomatoRecommend)
            }
            if (topRightCell !== 0 && document.getElementById(topRightCell).innerHTML === topRightCell.toString() ) {
                document.getElementById(topRightCell).innerHTML = `<div id='tomatoRecommend6' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend6').addEventListener('mouseover', this.tomatoRecommend)
            }
            if (bottomLeftCell !== 0 && document.getElementById(bottomLeftCell).innerHTML === bottomLeftCell.toString() ) {
                document.getElementById(bottomLeftCell).innerHTML = `<div id='tomatoRecommend7' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend7').addEventListener('mouseover', this.tomatoRecommend)
            }
            if (bottomRightCell !== 0 && document.getElementById(bottomRightCell).innerHTML === bottomRightCell.toString() ) {
                document.getElementById(bottomRightCell).innerHTML = `<div id='tomatoRecommend8' class='recommend' > SUGGESTION? </div>`
                document.getElementById('tomatoRecommend8').addEventListener('mouseover', this.tomatoRecommend)
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
                    showAsparagusRecommend: this.state.showAsparagusRecommend,
                    asparagusRecommend: this.asparagusRecommend,
                    showBasilRecommend: this.state.showBasilRecommend,
                    basilRecommend: this.basilRecommend,
                    showBeanRecommend: this.state.showBeanRecommend,
                    beanRecommend: this.beanRecommend,
                    showBeetRecommend: this.state.showBeetRecommend,
                    beetRecommend: this.beetRecommend,
                    showBroccoliRecommend: this.state.showBroccoliRecommend,
                    broccoliRecommend: this.broccoliRecommend,
                    cabbageRecommend: this.cabbageRecommend,
                    showCabbageRecommend: this.state.showCabbageRecommend,
                    carrotRecommend: this.carrotRecommend,
                    showCarrotRecommend: this.state.showCarrotRecommend,
                    cornRecommend: this.cornRecommend,
                    showCornRecommend: this.state.showCornRecommend,
                    cucumberRecommend: this.cucumberRecommend,
                    showCucumberRecommend: this.state.showCucumberRecommend,
                    eggplantRecommend: this.eggplantRecommend,
                    showEggplantRecommend: this.state.showEggplantRecommend,
                    lettuceRecommend: this.lettuceRecommend,
                    showLettuceRecommend: this.state.showLettuceRecommend,
                    onionRecommend: this.onionRecommend,
                    showOnionRecommend: this.state.showOnionRecommend,
                    peaRecommend: this.peaRecommend,
                    showPeaRecommend: this.state.showPeaRecommend,
                    pepperRecommend: this.pepperRecommend,
                    showPepperRecommend: this.state.showPepperRecommend,
                    potatoRecommend: this.potatoRecommend,
                    showPotatoRecommend: this.state.showPotatoRecommend,
                    pumpkinRecommend: this.pumpkinRecommend,
                    showPumpkinRecommend: this.state.showPumpkinRecommend,
                    radishRecommend: this.radishRecommend,
                    showRadishRecommend: this.state.showRadishRecommend,
                    spinachRecommend: this.spinachRecommend,
                    showSpinachRecommend: this.state.showSpinachRecommend,
                    squashRecommend: this.squashRecommend,
                    showSquashRecommend: this.state.showSquashRecommend,
                    tomatoRecommend: this.tomatoRecommend,
                    showTomatoRecommend: this.state.showTomatoRecommend,
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
