import React, { useState } from 'react';
import '../Styles/App.scss';
// import Googlelogo from '../Images/Google.png'

const Text = function () {
    const [value, setValue] = useState('Введите текст')

    return (
        <div>
            <input
                className='textinput'
                type='text'
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <div>
                <h1 className='textres'>
                    {value}
                </h1>
            </div>
        </div>
    )
}

export { Text };