import { useState } from "react";
// import react from "react";
// import reactDom from "react-dom";






const arr =[]


function Inp(){

// functions//

function add(){
    
    //   var task =  prompt('message','default');
 var task = document.getElementById('inputval').value;

 arr.push(task);
 {arr.map((item)=>{return <h1>{item}</h1>})}
// arr.map((v) => <h1>{v}</h1>)
//   arr.map(vall => {<h1>{vall}</h1>});
    // console.log(task);
    // console.log(arr.length);


}

// functions end///

    return(
        <div>
            <input type='text' id='inputval' />
            <button onClick={add}>Add</button>
<div className="list">
{/* {arr.map((item)=>{return <h1>{item}</h1>})} */}
</div>


        </div>
    )
}

export default Inp;