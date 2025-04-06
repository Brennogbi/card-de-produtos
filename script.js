//SELECIONAR O BOTAO CARD

    const button = document.querySelector('.add-to-cart')
     const mensagem = document.querySelector('.mensage')

     //adicionar eventos de clique no botao

     button.addEventListener('click',()=>{
      
        const productname = document.querySelector('.product-name').textContent
        const produtctprice = document.querySelector('.price')


        //exibir console(simulando a edicao do carrinho)

     console.log(`produto: ${productname}  & Preço: ${produtctprice} mensagem: ${mensagem.innerHTML= 'tenis adicionado oa carinho'}`

        
     )



     })