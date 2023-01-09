//for side menu function, log sorting, time counting
function SideMenuShow(){
    const SideMenu = document.getElementsByClassName('SideMenu')[0];

    if(SideMenu.style.width != '452px'){
        SideMenu.style.width = '452px';
    }
    else{
        SideMenu.style.width = '0px';
    }
}