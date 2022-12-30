import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export const useBoardContext = () => {
    const context = useContext(BoardContext)

    if (context === undefined) {
        throw new Error("outside the scope of board context!")
    }

    return context
}