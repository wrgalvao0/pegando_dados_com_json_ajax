const botao = document.querySelector('button')
botao.addEventListener("click", pegarDados)
function pegarDados()
{
    const dadosJson = new XMLHttpRequest()
    dadosJson.open("GET", "https://api.github.com/users/wrgalvao0")
    dadosJson.send(null)
    //
    dadosJson.onreadystatechange = () => {
        if(dadosJson.readyState === 4)
        {
            //convertendo string/json para objeto javascript
            const dadosObjeto = JSON.parse(dadosJson.responseText)
            console.log(dadosObjeto)
            const nome = dadosObjeto.name
            const seguidores = dadosObjeto.followers
            const fotoPerfilUrl = dadosObjeto.avatar_url
            const login = dadosObjeto.login

            const perfil = document.createElement("img")
            perfil.setAttribute("src", fotoPerfilUrl)
            perfil.setAttribute("width", "128")
            //console.log(perfil)

            const nomePagina = document.createElement("h1")
            nomePagina.innerText = nome

            const nomeUsuario = document.createElement("h2")
            nomeUsuario.innerText = `Nome de Usuário: ${login}`

            const seguidoresPagina = document.createElement("p")
            seguidoresPagina.innerHTML = `Seguidores: ${seguidores}`

            document.body.appendChild(perfil)
            document.body.appendChild(nomePagina)
            document.body.appendChild(nomeUsuario)
            document.body.appendChild(seguidoresPagina)
        }
    }
}