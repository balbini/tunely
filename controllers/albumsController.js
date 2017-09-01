/************
 * DATABASE *
 ************/
let db = require("../models")





// GET /api/albums
function index(req, res) {
  // send back all albums as JSON

db.Album.find({}, function (err, allAlbums) {
  if(err) console.log(err);
  res.json(allAlbums);
})
}

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
console.log("whats up");
db.Album.create(req.body, (err, createdAlbumsObject) => {  
    if (err) {
        res.send(err);
    }
    console.log(req.body);
    console.log("hello it works "+res.send(createdAlbumsObject));
});
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
