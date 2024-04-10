
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartList = document.getElementById('cart');


  cartList.innerHTML = '';


  if (cart && cart.length > 0) {

    cart.forEach(item => {
      const cartItem = document.createElement('li');

      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.name;
      cartItem.appendChild(itemImage);

      const itemName = document.createElement('p');
      itemName.textContent = item.name;
      cartItem.appendChild(itemName);

      const itemPrice = document.createElement('p');
      itemPrice.textContent = item.price;
      cartItem.appendChild(itemPrice);

      cartList.appendChild(cartItem);
    });
  } else {
   
    cartList.innerHTML = '<p>Carrinho vazio</p>';
  }
}

function addToCart(event) {
  const product = event.target.parentNode;
  const productName = product.querySelector('h2').innerText;
  const productImage = product.querySelector('img').src;
  const productPrice = product.querySelector('p:nth-child(4)').innerText;

  const productData = {
    name: productName,
    image: productImage,
    price: productPrice
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(productData);

  localStorage.setItem('cart', JSON.stringify(cart));
  
}

const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function buscarEndereco() {
  var cep = document.getElementById('cepInput').value;
  var url = `https://viacep.com.br/ws/${cep}/json/`;
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
      if(data.erro) {
          document.getElementById('endereco').innerText = "CEP não encontrado.";
      } else {
          var endereco = `CEP: ${data.cep}, ${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
          document.getElementById('endereco').innerText = endereco;
      }
  })
  .catch(error => console.error('Erro:', error));
}

