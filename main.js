const navSlide=()=>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navlist');
    const navList = document.querySelectorAll('.navlist li');

    //toggle nav
    menu.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //animation
    navList.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = ''
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + .5}s`
        }
    });
    //menu animation
    menu.classList.toggle('toggle');
    });

    
}

navSlide();