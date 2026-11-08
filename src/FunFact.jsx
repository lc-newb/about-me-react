import { useState } from "react";

function FunFact() {
    const [showFunFact, setShowFunFact] = useState(false)

    return(
        <section>
            <button onClick={() => setShowFunFact(!showFunFact)}> 
                Click to Toggle
            </button>
            {showFunFact && <p>I am left handed</p>}
        </section>
    )
}

export default FunFact