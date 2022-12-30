import { BOARD_XDIM, BOARD_YDIM } from "../settings/boardconfig";

//make a fresh board
const blankBoard = () => {
    let freshboard = {}
    for (let i = 0; i < BOARD_XDIM; i++) {
        for (let j = 0; j < BOARD_YDIM; j++) {
            const newKey = i.toString()+j.toString()
            freshboard[newKey] = 0
        }

    }
    return freshboard
}

//returns ids of all squares a 'king move' away - for counting 'influence'
const getNeighbors = (squareId) => {
    let neighborList = []
    let xVal = parseInt(squareId[0])
    let yVal = parseInt(squareId[1])
    for (i = -1; i < 2; i++) {
        for (j = -1; j < 2; j++) {
            if (i === 0 && j === 0) continue;
            if (0 <= xVal+i < BOARD_XDIM && 0 <= yVal+j < BOARD_YDIM){
                let neighborId = (xVal+i).toString()+(yVal+j).toString()
                neighborList.push(neighborId)

            }
    
            
            
            
            
            
        }
    }
    return neighborList
}

// return orthoganol neighbors - for determining where existing piece can move
const getOrthNeighbors = (squareId) => {
    return getNeighbors(squareId).filter(x => x[0] === squareId[0] || x[1] === squareId[1])
}

export {blankBoard, getNeighbors, getOrthNeighbors}