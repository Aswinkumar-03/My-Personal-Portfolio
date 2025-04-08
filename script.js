const menu=document.querySelector('.menu');
const menuLIst = document.querySelector('nav');

menu.addEventListener('click',()=>{
    menuLIst.classList.toggle('showmenu');
})