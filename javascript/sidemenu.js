//for side menu function, log sorting, time counting
function SideMenuShow(){
    const SideMenu = document.getElementsByClassName('SideMenu')[0];

    if(SideMenu.style.visibility != 'visible'){
        SideMenu.style.right = '0%';
        SideMenu.style.visibility = 'visible';
    }
    else{
        SideMenu.style.visibility = 'hidden';
        SideMenu.style.right = '-25%';
    }
}