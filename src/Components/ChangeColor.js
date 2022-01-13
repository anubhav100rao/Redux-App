import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'

function ChangeColor() {
    const dispatch = useDispatch()
    const [color, setColor] = useState("orange")
    return (
        <div>
            <input 
                type="text"
                onChange={(event) => {
                    setColor(event.target.value)
                }}
            />
            <button
                style={{
                    backgroundColor: color
                }}
                onClick = {() => {
                    dispatch(changeColor(color))
                }}
            >
                ChangeColor
            </button>
        </div>
    )
}

export default ChangeColor
