import { useState } from "react";
// import react from "react";
// import reactDom from "react-dom";









function Inp(){
const [arr,setarr] = useState([]);

// functions//

function add(){
    
    //   var task =  prompt('message','default');
 var task = document.getElementById('inputval').value;
 let emparr=[...arr];
 emparr.push(task);
 setarr(emparr)
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
{arr.map((item)=>{return <h1>{item}</h1>})}
</div>


        </div>
    )
}

export default Inp;