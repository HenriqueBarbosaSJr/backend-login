module.exports = {
    async raiz(req, res){
        const result = await console.log('Servidor Requisitado');

        const html = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Servidor banckend</title>
                        </head>
                        <body>
                            <h1>Servidor Requisitado !!!</h1>
                            <p>Rotas</p>
                            <p>/  - raiz</p>
                            <p>/user  - listar todos os usuários</p>
                            <p>/userauth  - autenticação de usuário</p>

                        </body>
                        </html>

                     `
        return res.send(html);
    }
}