import React from "react";


const Hello=()=>{
    // return (
    //     <div>
    //         <h1>DUmmy class</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {
            id:'hello',className:'dummyClass'},
            React.createElement('h1',null,'hello sandeep')
    )
}
export default Hello