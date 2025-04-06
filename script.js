// Lista de produtos (exemplo)
const produtos = [

   { name: 'Tênis On Running ', price: 350,  src: `img/180_tenis_de_corrida_feminino_on_running_cloudswift_4_metal_heather_12161_1_bbf8aba18e1338a89c40761a3d5cb05a.webp` },
   
   { name: 'Tênis adidas', price: 1500,  src: 'img/437002-800-800.webp' },
   { name: 'Tênis Jordan ', price: 2000,  src: `img/jordam.avif` },
   
   { name: 'Tênis Knu Skool Black', price: 200,  src: 'img/1002002760001U-02-BASEIMAGE-Midres.webp' },
   { name: 'Tênis Vans Old Skool ', price: 700,  src: `img/tenis_vans_old_skool_preto_branco_1150_2_ccabe717191cd8334b43ab7b2eae0fa9.webp` },
   
   { name: 'Tênis Brand Fila', price: 150,  src: 'img/F02TR00016_6170.webp' },
   
   { name: 'Tênis On Running ', price: 350,  src: `img/180_tenis_de_corrida_feminino_on_running_cloudswift_4_metal_heather_12161_1_bbf8aba18e1338a89c40761a3d5cb05a.webp` },
   
   { name: 'Tênis adidas', price: 1500,  src: 'img/437002-800-800.webp' },
 
  
   

   ]
  
 
 const listadeprodutos = document.getElementById('lista-tenis');
 
 function mostraprodutod() {
   let mylist = '';
 
   produtos.forEach((produto, index) => {
     mylist += `
       <div class="produto">
         <img src="${produto.src}" alt="${produto.name}">
         <h2 class="product-name">${produto.name}</h2>
         <p class="price"> R$ ${produto.price}</p>
         <button class="add-to-cart" data-index="${index}">Adicionar ao carrinho</button>
         <p class="mensage"></p>
       </div>
     `;
   });
 
   listadeprodutos.innerHTML = mylist;
 
   // Depois que os produtos foram adicionados ao DOM
   adicionaEventosBotoes();
 }


 let contadordecarrinho = 0
 const contadordeelemento = document.getElementById('contador-carrinho')
 
 
 function adicionaEventosBotoes() {
   const botoes = document.querySelectorAll('.add-to-cart');
  
 
   botoes.forEach(botao => {
     botao.addEventListener('click', (e) => {
       const produtoEl = e.target.closest('.produto');
       const nome = produtoEl.querySelector('.product-name').textContent;
       const preco = produtoEl.querySelector('.price').textContent;
       const mensagem = produtoEl.querySelector('.mensage'); // Agora é individual!
 
       console.log(`Produto: ${nome} | Preço: ${preco}`);
       mensagem.innerHTML = 'Tênis adicionado ao carrinho!';

       contadordecarrinho++; // aumenta o número
       contadordeelemento.textContent =  contadordecarrinho; // atualiza na tela
       
     });
   });
 }
 
 window.onload = mostraprodutod;
 