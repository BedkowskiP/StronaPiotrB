function displayMenu(){
    let ul = document.querySelector('ul.menu-items');

    if(ul != null)
        if(ul.classList.contains('active'))
        {
            ul.classList.remove('active');
        }
        else {
            ul.classList.add('active');
        }
}

function aboutElements(element, i){
    let elementsToDisplay = document.querySelectorAll('div.about-element');
    let parent = element.parentNode.querySelectorAll('li.about-menu');

    if(parent != null){
        parent.forEach(li => {
            if(li.classList.contains('active'))
            {
                li.classList.remove('active');
            }
        });
        parent[i].classList.add('active');
    }
    
    if(elementsToDisplay != null){
        elementsToDisplay.forEach(div => {
            if(div.classList.contains('active'))
            {
                div.classList.remove('active');
                div.classList.add('hidden');
            }
        });
        elementsToDisplay[i].classList.remove('hidden');
        elementsToDisplay[i].classList.add('active');
    }
    

}