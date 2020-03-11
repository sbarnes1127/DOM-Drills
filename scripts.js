document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    h1.className = 'h1';
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    h2.className = 'h2';
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    h3.className = 'h3'
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    h4.className = 'h4'
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    h5.className = 'h5'
    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    h6.className = 'h6';
    h1.appendChild(h1Text);
    div.appendChild(h1);
    h2.appendChild(h2Text);
    div.appendChild(h2);
    h3.appendChild(h3Text);
    div.appendChild(h3);
    h4.appendChild(h4Text);
    div.appendChild(h4);
    h5.appendChild(h5Text);
    div.appendChild(h5);
    h6.appendChild(h6Text);
    div.appendChild(h6);
    document.body.appendChild(div);

    function changeColor(e) {
        let colors = ['red', 'green', 'yellow', 'orange', 'purple', 'brown', 'grey', 'pink'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.color = randomColor;
    }

    
    h1.addEventListener('dblclick', changeColor);
    h2.addEventListener('dblclick', changeColor);
    h3.addEventListener('dblclick', changeColor);
    h4.addEventListener('dblclick', changeColor);
    h5.addEventListener('dblclick', changeColor);
    h6.addEventListener('dblclick', changeColor);

    let list = document.createElement('ul');
    document.body.appendChild(list);
    let i = 1

    function addListItem() {
        let listItem = document.createElement('li');
        let itemText = document.createTextNode('This is list item' + [i++]);
        listItem.appendChild(itemText);
        list.appendChild(listItem);
        listItem.addEventListener('click', changeColor);
        listItem.addEventListener('dblclick', function(){
            list.removeChild(listItem);
        })

    }
    document.getElementsByClassName('listButton')[0].addEventListener('click', addListItem);

    
});