import { useContext } from 'react'
import { PersonContext } from '../context/noteContext';

const SubAboutDetail = () => {
    const { state, PLUS, MINUS } = useContext(PersonContext);

    return (
        <div>
            <h2>SubAbout Component {state}</h2>

            {/* <input type="text" placeholder="Enter SubAbout Component" onChange={e => setText(e.target.value)} /> */}
            <button onClick={PLUS}>PLUS</button>
            <button onClick={MINUS}>Minus</button>
        </div>
    )
}

export default SubAboutDetail
