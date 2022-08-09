const mongoose = require('mongoose');
const BooksSchema = require('./Schema');
const BookModel = mongoose.model('BookModel', BooksSchema);



const tItEndsWithUs = new BookModel({
    title: 'It Ends With Us',
    description: 'The newest highly anticipated novel from beloved #1 New York Times bestselling author, Colleen Hoover. Sometimes it is the one who loves you who hurts you the most',
    image: 'https://openlibrary.org/works/OL18020194W/It_Ends_With_Us',
    status: true
});

const LaCousineBette = new BookModel({
    title: 'La Cousine Bette',
    description: 'Set at the time of the July Monarchy this book tells the story of how the dowdy and scorned Cousin Bette brings to its knees the family of the rich libertine Baron Hulot dErvy and his beautiful but sanctimonious wife Adeline',
    image: 'https://openlibrary.org/works/OL85232W/La_cousine_Bette',
    status: true
});

const Talesofspaceandtime = new BookModel({
    title: 'Tales of space and time',
    description: "Tales of Space and Time collects together two novellas and three short stories by the great science fiction writer H.",
    image: 'https://openlibrary.org/works/OL52211W/Tales_of_space_and_time',
    status: true
})
//tItEndsWithUs.save();
//LaCousineBette.save();
//Talesofspaceandtime.save();

module.exports = BookModel