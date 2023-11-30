import { useDispatch, /*useSelector*/ } from "react-redux"
import { increment, decrement } from './Action'

export default function ReduxCounter() {
    const dispatch = useDispatch()
    // const count = useSelector((state) => state.count)
    return (
        <div>
            <h1 className='res'>{0}</h1>
            <div className='counterbuttons'>
                <button onClick={() => dispatch(increment())} className='button'>Increment</button>
                <button onClick={() => dispatch(decrement())} className='button'>decrement</button>
            </div>
        </div>
    )
};

