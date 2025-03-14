const connection = require("../data/db")



// index
function index(req, res) {
    // res.json(posts)

    // variabile clone dell' array originale
    // let filteredPosts = arrayPosts;
    // if (req.query.tags) {
    //     filteredPosts = arrayPosts.filter(post => {
    //         return post.tags.includes(req.query.tags)
    //     })
    // }
    // res.json(filteredPosts);

    //INDEX FOR MYSQL2
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            error: 'Query error: INDEX'
        })

        res.json(results)
    })

}


// SHOW
function show(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    // const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    // const posts = arrayPosts.find(posts => posts.id === id);
    // Facciamo il controllo
    // if (!posts) {
    //     res.status(404);
    //     return res.json({
    //         status: 404,
    //         error: "Not Found",
    //         message: "Post non trovato"
    //     })
    // }
    // Restituiamolo sotto forma di JSON   
    // res.json(posts);


    // SHOW FOR MYSQL2
    const { id } = req.params;

    const sql = 'SELECT * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({
            error: 'Qery error: SHOW'
        })

        if (results.length === 0) return res.status(404).json({
            error: 'Post not Found'
        })

        res.json(results[0]);
    });

}




// destroy  
function destroy(req, res) {
    // res.send('Eliminazione del post ' + req.params.id);
    //** recuperiamo l'id dall' URL e trasformiamolo in numero
    // const id = parseInt(req.params.id)
    //**cerchiamo il post tramite id
    // const post = arrayPosts.find(post => post.id === id);
    //** */ Facciamo il controllo
    // if (!post) {
    //     res.status(404);
    //     return res.json({
    //         status: 404,
    //         error: "Not Found",
    //         message: "post non trovata"
    //     })
    // }

    // console.log(arrayPosts)
    //* **** Restituiamo lo status corretto
    // res.sendStatus(204)

    // DESTROY FOR MY SQL2
    const { id } = req.params;

    const sql = 'DELETE FROM posts WHERE id = ?';

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({
            error: 'Query error: DESTROY'
        })

        res.sendStatus(204)
    })
}


// per esportare le funzioni
module.exports = { index, show, destroy };


