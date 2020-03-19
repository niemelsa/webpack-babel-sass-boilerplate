import '../styles/styles.scss';

function component() {
        const container = document.createElement('div');
        container.classList.add('container');

        return container;
}

document.body.appendChild(component());