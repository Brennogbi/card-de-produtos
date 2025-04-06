// Lista de produtos
const produtos = [
   { name: 'Tênis On Running', price: 350, src: 'img/180_tenis_de_corrida_feminino_on_running_cloudswift_4_metal_heather_12161_1_bbf8aba18e1338a89c40761a3d5cb05a.webp' },
   { name: 'Tênis adidas', price: 1500, src: 'img/437002-800-800.webp' },
   { name: 'Tênis Jordan', price: 2000, src: 'img/jordam.avif' },
   { name: 'Tênis Knu Skool Black', price: 200, src: 'img/1002002760001U-02-BASEIMAGE-Midres.webp' },
   { name: 'Tênis Vans Old Skool', price: 700, src: 'img/tenis_vans_old_skool_preto_branco_1150_2_ccabe717191cd8334b43ab7b2eae0fa9.webp' },
   { name: 'Tênis Brand Fila', price: 150, src: 'img/F02TR00016_6170.webp' },
   { name: 'Tênis Knu Skool Black', price: 200, src: 'img/1002002760001U-02-BASEIMAGE-Midres.webp' },
   { name: 'Tênis Vans Old Skool', price: 700, src: 'img/tenis_vans_old_skool_preto_branco_1150_2_ccabe717191cd8334b43ab7b2eae0fa9.webp' },
  
 ];
 
 // Referências aos elementos do DOM
 const listaDeProdutos = document.getElementById('lista-tenis');
 const contadorElemento = document.getElementById('contador-carrinho');
 const valorTotalElemento = document.getElementById('valor-total');
 
 // Carrinho e contador
 let carrinho = [];
 let contadorCarrinho = 0;
 
 // Função para exibir os produtos usando MAP
 function mostrarProdutos() {
   listaDeProdutos.innerHTML = produtos.map((produto, index) => `
     <div class="produto">
       <img src="${produto.src}" alt="${produto.name}">
       <h2 class="product-name">${produto.name}</h2>
       <p class="price">R$ ${produto.price}</p>
       <button class="add-to-cart" data-index="${index}">Adicionar ao carrinho</button>
       <p class="mensage"></p>
     </div>
   `).join('');
 
   adicionarEventosBotoes(); // ativa os botões
 }
 
 // Função para adicionar eventos nos botões de "Adicionar ao carrinho"
 function adicionarEventosBotoes() {
   const botoes = document.querySelectorAll('.add-to-cart');
 
   botoes.forEach(botao => {
     botao.addEventListener('click', (e) => {
       const produtoEl = e.target.closest('.produto');
       const nome = produtoEl.querySelector('.product-name').textContent;
       const precoTexto = produtoEl.querySelector('.price').textContent;
       const mensagem = produtoEl.querySelector('.mensage');
 
       const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.').trim());
 
       // Adiciona o produto ao carrinho
       carrinho.push({ nome, preco });
 
       // Atualiza contador
       contadorCarrinho++;
       contadorElemento.textContent = contadorCarrinho;
 
       // Atualiza mensagem
       mensagem.textContent = 'Tênis adicionado ao carrinho!';
 
       // Atualiza total usando reduce
       const totalFinal = carrinho.reduce((soma, item) => soma + item.preco, 0);
       valorTotalElemento.textContent = `Total: R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
     });
   });
 }
 
 // Quando a página carregar, mostra os produtos
 window.onload = mostrarProdutos;
 