// Define a class in JavaScript

class Movie {
    constructor(title, genre, year, company, time_length) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.productionCompany = company;
        this.duration = time_length;
        this.cast = [];
    }

    // Method 
    addCastMember(newMember) {
        this.cast.push(newMember);
    }
}

// Create an instance of a movie
var myMovie = new Movie("Titanic","Romance",1996,"20th Century Fox",210);
myMovie.addCastMember("Kate Winslet");