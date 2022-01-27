// console.log(firebase);

// var taskarr = [1,2,3];
// console.log(taskarr);
// function getTextBoxVal(){
//    var inputval =  document.getElementById('tasks-t').value;
 
//    console.log(inputval);
// console.log(taskarr);
   
// }

function addlist(){
   // console.log('sss')
  var tasks_t = document.getElementById('tasks-t');
  
//   console.log(tasks_t.value)
let li = document.createElement("li");
let p = document.createElement("p");
const addbtn = document.createElement("button");
const delbtn = document.createElement("button");
addbtn.classList="btn btn-success mx-1 el";
delbtn.classList="btn btn-danger mx-1 dl";
addbtn.id='el';
delbtn.id='dl';
addbtn.innerText="Edit";
delbtn.innerText="Delet";
p.innerText = tasks_t.value;
p.classList = "my-1";
li.appendChild(p);
li.appendChild(addbtn);
li.appendChild(delbtn);
document.getElementById("ul").appendChild(li);
// document.getElementById("ul").appendChild(addbtn);
// document.getElementById("ul").appendChild(delbtn);
delbtn.addEventListener('click',dellist);
addbtn.addEventListener('click',editlist);
// var dl;
// var delal = document.getElementsByClassName('dl');
}
// var dl =  document.getElementById('dl');
// dl.addEventListener('click',dellist);


function dellist(){
   // var dl =  document.getElementById('dl');
   // console.log(this.parentElement)
  this.parentElement.remove()
   //  dl =  document.getElementById('dl');
   // console.log(this)
   // alert();
}
function editlist(){
   
  let result = window.prompt('message', 'Enter new value');
  this.parentElement.children[0].innerText = result;
//   dl.parentElement.
   //  dl =  document.getElementById('dl');
   // console.log(result);
   // alert();
}
function delAll(){
// alert();
var lis = document.getElementById('ul');
lis.innerHTML="";
// var l = lis.children;
// console.log(l);
}



// function delAll(){
//    // var lis = document.querySelector('.ul > li');
//    // lis[1].parentElement.remove();
//    //    console.log(lis.length);
//    // Map
//    var lis = document.getElementById('ul');
//    // console.log(lis.children)
//    var l = lis.children;
//    // lis.children
//    for (let index = 0; index < l.length; index++) {
//       // const element = lis[index];
//    l[index].remove()

      
//    }
// lis.map(element => {
//    console.log(element);
//    // element.parentElement.remove();
// });
// console.log(delal.length)
   // console.log(delal.lenght);
// alert();
// }
