document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Bolo', price: 'R$ 100,00', image: 'assets/img/img-bolo-amarelo.png' },
        { name: 'Bolo', price: 'R$ 100,00', image: 'assets/img/img-bolo-beauti.png' },
        { name: 'Bolo', price: 'R$ 100,00', image: 'assets/img/img-bolo-casamento.png' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-coco.png' },
        { name: 'Bolo', price: 'R$ 65,00', image: 'assets/img/img-bolo-ferrero.png' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-flores-4.png' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-flores-niver.png' },
        { name: 'Bolo', price: 'R$ 100,00', image: 'assets/img/img-bolo-frutas.png' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-red.png' },
        { name: 'Bolo', price: 'R$ 65,00', image: 'assets/img/img-bolo-rosa.png' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-simples.png' },
        { name: 'Bolo', price: 'R$ 65,00', image: 'assets/img/img-bolo-beauti-2.png' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-simples-2.png' },
        { name: 'Bolo', price: 'R$ 100,00', image: 'assets/img/img-bolo-sonho-valsa.jpg' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-frutas-vermelhos.jpg' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-choco-colorido.png' },
        { name: 'Bolo', price: 'R$ 65,00', image: 'assets/img/img-bolo-colorido-morango.png' },
        { name: 'Bolo', price: 'R$ 100,00', image: 'assets/img/img-bolo-girasol.png' },
        { name: 'Bolo', price: 'R$ 45,00', image: 'assets/img/img-bolo-sorvete.png' },
        { name: 'Bolo', price: 'R$ 65,00', image: 'assets/img/img-bolo-blue.png' },
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.price}</p>
            <button>Comprar</button>
        `;
        productList.appendChild(productItem);
    });

    document.getElementById('contact-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Mensagem enviada!');
    });
});