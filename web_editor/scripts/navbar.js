document.addEventListener('DOMContentLoaded', () => {
    for (currentNavElement of document.getElementsByClassName('nav-item')) {
        currentNavElement.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            for (element of document.getElementsByClassName('selected')) {
                element.classList.remove('selected');
            }

            const clickedElement = e.target;
            clickedElement.classList.add('selected');

            const action = clickedElement.getAttribute('href');
            switch(action) {
                case '#about':
                    document.getElementById('editor').style.display = 'none';
                    document.getElementById('about').style.display = 'block';
                    break;
                case '#editor':
                    document.getElementById('editor').style.display = 'block';
                    document.getElementById('about').style.display = 'none';
                    break;
                default:
                    // Do nothing
                    break;
            }
        });
    }
});