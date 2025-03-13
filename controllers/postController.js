const connection = require("../data/db")

// const arrayPosts = require("../data/postData");
// index
function index(req, res) {
    // res.json(posts)

    // variabile clone dell' array originale
    let filteredPosts = arrayPosts;

    if (req.query.tags) {

        filteredPosts = arrayPosts.filter(post => {
            return post.tags.includes(req.query.tags)
        })
    }
    res.json(filteredPosts);
}


// show
function show(req, res) {

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const posts = arrayPosts.find(posts => posts.id === id);

    // Facciamo il controllo
    if (!posts) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Restituiamolo sotto forma di JSON   
    res.json(posts);
}


// store
function store(req, res) {
    // res.send('Creazione nuovo post');


    // Creiamo un nuovo id incrementando l'ultimo id presente
    //ultimo oggetto di un array: arrayposts[arrayposts.length - 1]
    //estraggo all'oggetto il valore della chiave "id"
    //ottenuto il valore dell'ultimo ID aggiungo + 1
    const newId = arrayPosts[arrayPosts.length - 1].id + 1;

    // Creiamo un nuovo oggetto post
    const newPosts = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiungiamo  nuova post al arrayposts
    arrayPosts.push(newPosts);

    // controlliamo
    console.log(arrayPosts);


    // Restituiamo lo status corretto e il post appena creata
    res.status(201);
    res.json(newPosts);

}

// update
function update(req, res) {
    // res.send('Modifica integrale del post ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = arrayPosts.find(post => post.id === id);

    // Piccolo controllo
    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovata"
        })
    }

    // Aggiorniamo il post



    post.title = req.body.title,
        post.content = req.body.content,
        post.image = req.body.image,
        post.tags = req.body.tags


    // Controlliamo l' arrayPost
    console.log(arrayPosts)

    // Restituiamo il post appena aggiornata
    res.json(post);

};

// modify
function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
};
// destroy  y
function destroy(req, res) {
    // res.send('Eliminazione del post ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = arrayPosts.find(post => post.id === id);

    // Facciamo il controllo
    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovata"
        })
    }


    // Rimuoviamo la post dal menu
    arrayPosts.splice(arrayPosts.indexOf(post), 1);

    console.log(arrayPosts)
    // Restituiamo lo status corretto
    res.sendStatus(204)
}


// per esportare le funzioni
module.exports = { index, show, store, update, modify, destroy }


