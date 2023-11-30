import { useState } from 'react';
import '../Styles/App.scss';
import GoogleLogo from '../Images/Google.png'
import Search from '../Images/Search.png'

const Google = function () {

    const [value, setValue] = useState('')

    return (
        <body>
            <div className='logo'>
                <img src={GoogleLogo} alt='' />
            </div>
            <div>
                <input
                    className='textarea'
                    type='text'
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <div className='searchicon'>
                    <img src={Search} alt='' />
                </div>
            </div>
        </body>
    );
};
export { Google };