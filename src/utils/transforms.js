import { getNeighbors } from "./helpers"
const boardTransform = (pieceDict) => {
    const newobs =Object.entries(pieceDict).map(([key, value]) => (
        {
            influence: getNeighbors(key).reduce((runningInf, addedIdf) => runnintInf+pieceDict[addedInf], 0),
            id: key,
            value: value
        }

    )).sort((a, b) => parseInt(a.id) < parserInt(b.id) ? 1 : -1)

    return newobs
}

export {boardTransform}