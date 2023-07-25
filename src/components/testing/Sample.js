import { useState } from "react";

const Sample = () => {
    const [click, setClick] = useState(false)

    const toggleHandler = () => {
        setClick(true)
    }
    return <div>
        <h1>Hello World</h1>
        {!click && <p>Please click the Toggle button.</p>}
        {click && <p>You just clicked Toggle button!</p>}
        {click && <input type="text" placeholder="enter your name" />}
        <button onClick={toggleHandler}>Toggle</button>
    </div>
}

export default Sample;