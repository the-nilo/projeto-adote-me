function showMenu() {
    const menuBtn = document.getElementById('menu-btn')
    const nav = document.getElementById('nav')
    const menuIcon = document.getElementById('menu-icon')
    
    if (nav.classList.contains('nav-closed')) {
        nav.classList.add('nav-opened')
        nav.classList.remove('nav-closed')

        nav.style.display = 'flex'
        menuBtn.style.color = '#fff'
        menuIcon.classList.replace('fa-bars', 'fa-xmark')
        
    } else {
        nav.classList.add('nav-closed')
        nav.classList.remove('nav-opened')
        
        nav.style.display = 'none'
        menuBtn.style.color = '#1f1f1f'
        menuIcon.classList.replace('fa-xmark', 'fa-bars')
    }
}