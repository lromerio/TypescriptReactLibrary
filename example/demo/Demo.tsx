import * as React from "react"

import {Stateless} from "../../src"             // Import whole library (side effect)
import Statefull from "../../src/Statefull"     // Import only "Statefull"


const Demo: React.StatelessComponent = () =>{   
    return (
        <div>
            <Stateless id="test_id" content="Hello" /> <Statefull content="World!" />
        </div>
    )
}

export default Demo
