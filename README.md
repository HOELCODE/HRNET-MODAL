# Etapes à suivre pour utiliser ce modal

1/ installer le paquet NPM dans votre projet

- npm install
- npm i hrnet-modal-hoel

2/ Ajouter le code nécessaire pour faire fonctionner le modal

- 2.1/ Dans le composant ou page où vous voulez ajouter le modal ajouter le code suivant pour importer le modal :

import { Modal } from 'hrnet-modal-hoel';

- 2.2/ Dans la partie html ajouter la balise suivante : 

`<Modal />`

- 2.3/ Ajouter le code suivant afin d'afficher le modal : 
```
    const showModal = () => {
        const modal = document.querySelector('.modal');
        const page = document.querySelector('.modal-container');

        page.style.display = 'block';
        modal.style.display = 'block';
        modal.classList.add('modal-showed');
    }
```
- 2.4/ Appeler la fonction lorsque vous voulez afficher le modal

showModal(); // ça peut-être dans un OnClick, dans un Submit...





