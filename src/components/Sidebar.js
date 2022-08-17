import React, { useState } from 'react'
import '../styles/Sidebar.css'

const Sidebar = () => {

    const [goalTypes, setGoalTypes] = useState([])


    function addNewPacer() {
        // from this I want a element to appear to choose what type of pacer(goals) are going to be tracked
    }



    return (
        <section className='pace-sidebar'>
            <div className='pace-goals'>
                <button onClick={addNewPacer} className='new-pacer-btn'>New Pacer</button>
                {/* possbile div to hold ul here? only if necessary for styling, come back */}
                <ul>
                    <li>render new li here based on additions of click</li>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar