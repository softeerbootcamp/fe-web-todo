export default function sidebar_event(){
document.getElementById('menuicon').addEventListener('click', function(){
    document.getElementById('sidebar').classList.add('active');
    });
document.getElementById('sidebar_close').addEventListener('click', function(){
    document.getElementById('sidebar').classList.remove('active');
    });
}
