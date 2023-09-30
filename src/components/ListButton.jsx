import React, { useId } from 'react'

export default function ListButton({ parentHandler }) {

    let colors = ["Red", "Green", "Blue", "Pink", "Yellow", "white", "Olive", "Purple", "Brown", "Cyan"];
    return (
        <div>
            <ul className='listContainer flex flex-wrap-reverse shadow-lg'>
                {colors?.map((color) => (
                    <li
                        data-key={useId()}
                        key={useId()}
                        onClick={() => parentHandler(color)}
                        className='button'
                        style={{ background: color }}>{color}</li>
                ))}
            </ul>
        </div>
    )
}
