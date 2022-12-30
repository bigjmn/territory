// Might eventually move this to a regular component or something,
// dependds on how egrigiously I nest my elements 

import { useEffect, useState, createContext} from 'react'
import { blankBoard, getNeighbors, getOrthNeighbors } from '../utils/helpers'
export const BoardContext = createContext()

export const BoardProvider = ({children}) => {

    const [boardState, setBoardState] = useState(blankBoard())
    const [moveNum, setMoveNum] = useState(0)

    // updating the board. If placing a piece, startsquare and endsquare will be the same.
    // will only be called if move passes validation check 
    const makeMove = (startsquare, endsquare) => {
        const pieceval = moveNum%2 === 0 ? 1 : -1
        setBoardState(oldboard => oldboard.map(sq => sq.id === endsquare ? {...sq, piece: pieceval} : sq.id === startsquare ? {...sq, piece: 0} : sq))

    }

    return (
        <BoardContext.Provider value = {{boardState}}></BoardContext.Provider>
    )
}