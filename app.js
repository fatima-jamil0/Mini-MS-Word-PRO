let size =document.getElementById('size');
let para =document.getElementById('para');
let bold =document.getElementById('bold');
let italic =document.getElementById('italic');
let underline =document.getElementById('underline');
let color=document.getElementById('color');
let bg=document.getElementById('bg');
let font=document.getElementById('font');
let clear =document.getElementById('clear');
let left =document.getElementById('left');
let center =document.getElementById('center');
let justify =document.getElementById('justify');
let right =document.getElementById('right');


size.addEventListener('click',()=>{
    para.style.fontSize=size.value +'px';
})

bold.addEventListener('click' , ()=>{
    para.style.fontWeight='bold';
})
italic.addEventListener('click' , ()=>{
    para.style.fontStyle='italic';
})
underline.addEventListener('click' , ()=>{
    para.style.textDecoration='underline';
})
clear.addEventListener('click' , ()=>{
    para.style='none';
})

color.addEventListener('input',()=>{
    para.style.color=color.value;
})
bg.addEventListener('input',()=>{
    para.style.backgroundColor=bg.value;
})
font.addEventListener('click',()=>{
    para.style.fontFamily=font.value;
})
left.addEventListener('click',()=>{
para.style.textAlign='left';
})
right.addEventListener('click',()=>{
    para.style.textAlign='right';
})
center.addEventListener('click',()=>{
    para.style.textAlign='center';
})
justify.addEventListener('click',()=>{
    para.style.textAlign='justify';
})




