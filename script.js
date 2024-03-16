let boxex=document.querySelectorAll(".btn");
let resetButton=document.querySelector(".reset");
let NewGameBtn=document.querySelector("#new-btn");
let message_container=document.querySelector(".message-container");
let msg=document.querySelector("#message");
let turnO=true;
// winning patterns 
let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxex.forEach((box)=>{
  box.addEventListener("click",()=>{
    box.innerText="abcd";
    if(turnO){
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="x";
      turnO=true;
    }
    box.disabled=true;
    checkWinner();
  })
  
})


const disableBox=()=>{
  for(let btn of boxex){
    btn.disabled=true;
  }
}
const enableBox=()=>{
  for(let btn of boxex){
    btn.disabled=false;
    btn.innerText="";
  }
}
const showWinner=(winner)=>{
msg.innerText= `Congratulations,Winner is, ${winner}`;
message_container.classList.remove("hide");
disableBox();
};
const checkWinner=(()=>{
for( let pattern of arr){
 let posv1val= boxex[pattern[0]].innerText;
 let posv2val= boxex[pattern[1]].innerText;
 let posv3val= boxex[pattern[2]].innerText;
if(posv1val!="" && posv2val!="" && posv3val!=""){
  if(posv1val ===posv2val && posv2val===posv3val){
    showWinner(posv1val);
  }
}
}
})
const resetGame=()=>{
  turnO =true;
  enableBox();
  message_container.classList.add("hide");



}
NewGameBtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);