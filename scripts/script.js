function displayMenu(){
    let ul = document.querySelector('ul.menu-items');

    if(ul.classList.contains('active'))
    {
        ul.classList.remove('active');
    }
    else {
        ul.classList.add('active');
    }
}