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

    let textColor = ['red', 'green', 'yellow', 'orange', 'purple', 'brown', 'grey', 'pink'];
    h1.addEventListener('dblclick', function () {
        h1.style.color = textColor[Math.floor(Math.random() * textColor.length)];
    })
    h2.addEventListener('dblclick', function () {
        h2.style.color = textColor[Math.floor(Math.random() * textColor.length)];
    })
    h3.addEventListener('dblclick', function () {
        h3.style.color = textColor[Math.floor(Math.random() * textColor.length)];
    })
    h4.addEventListener('dblclick', function () {
        h4.style.color = textColor[Math.floor(Math.random() * textColor.length)];
    })
    h5.addEventListener('dblclick', function () {
        h5.style.color = textColor[Math.floor(Math.random() * textColor.length)];
    })
    h6.addEventListener('dblclick', function () {
        h6.style.color = textColor[Math.floor(Math.random() * textColor.length)];
    })

    let list = document.createElement('ul');
    document.body.appendChild(list);
    let i = 1

    function addListItem() {
        let listItem = document.createElement('li');
        let itemText = document.createTextNode('This is list item' + [i++]);
        listItem.appendChild(itemText);
        list.appendChild(listItem);

    }
    document.getElementsByClassName('listButton')[0].addEventListener('click', addListItem);
});