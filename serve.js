const express = require('express');
const mongo = require('mongodb');

async function main(){
    try{
    const app = express();

       const clienteDoBanco = 
            await mongo.connect('mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/nerdzao-rick-and-morty', {
                useNewUrlParser: true,
            });

        const bancoDeDados = clienteDoBanco.db('nerdzao-rick-and-morty');
        const personagens = await bancoDeDados.collection('characters');

        app.get('/personagens',async (req,res) => {
            const todosPersonagens = await personagens.find().toArray();
            res.send(todosPersonagens);
        });

        app.listen(5000,()=>console.log('Escutando na porta 5000'));
    }catch(e){
        console.log('Erro -> ',e);
    }
}

main();