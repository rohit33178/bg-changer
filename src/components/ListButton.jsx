import React, { useId } from 'react'
import ColorsArray from '../colors';

export default function ListButton({ parentHandler }) {

    let colors = ["Red", "Green", "Blue", "Pink", "Yellow", "white", "Olive", "Purple", "Brown", "Cyan"];
    return (
        <div>
            <ul className='listContainer flex flex-wrap-reverse shadow-lg'>
                {colors?.map((color) => (
                    <li
                        key={useId()}
                        onClick={() => parentHandler(color)}
                        className='button'
                        style={{ background: color }}>{color}</li>
                ))}
            </ul>
        </div>
    )
}
