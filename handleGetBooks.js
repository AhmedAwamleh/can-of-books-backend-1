const { BookModel } = require('./booksModel');

function handleGetBooks(req, res) {
    try {
        BookModel.find({}, (error, data) => {
            if (error) console.log(`error reading from the db: ${error}`);
            else res.send(data);
        })
    }
    catch (error) {
        console.log(`error: ${error}`);
    }
}

module.exports = handleGetBooks;