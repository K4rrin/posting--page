const tituloInput = document.querySelector("#titulo")
        const conteudoInput = document.querySelector("#texto")
        const form = document.querySelector("#postagem-usuario")
        const tituloRender = document.querySelector("#postagem-titulo")
        const conteudoRender = document.querySelector("#postagem-conteudo")

        form.addEventListener("submit", event => {
            event.preventDefault()
            renderizar(tituloInput.value, conteudoInput.value)
            })

        const renderizar = (titulo, conteudo) => {
           const data = {
              title: titulo,
              body: conteudo, 
              userId:1
           };
           return fetch("https://jsonplaceholder.typicode.com/posts", {
               method: "POST",
               body: JSON.stringify(data),
               headers: {"Content-type": "application/json; charset=UTF-8"}
           }).then(resposta => resposta.json()).then(dados => {    
               console.log(dados)
               tituloRender.textContent = dados.title
               conteudoRender.textContent = dados.body
           })
        }
