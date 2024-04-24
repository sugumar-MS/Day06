//github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (this.rating === undefined) {
            this.rating = "PG";
        }
    }

    display() {
        console.log(`${this.title}, ${this.studio}, ${this.rating}`);
    }

    movieObject() {
        return {
            title: this.title,
            studio: this.studio,
            rating: this.rating
        };
    }

    static getPG(arr) {
        let data = arr.filter(film => film.rating === "PG");
        console.log(data.map(b => b.title));
    }
}

let Movie1 = new Movie("Athadu", "aaa");
Movie1.display();

let Movie2 = new Movie("Bahubhali", "xxxx", "PG");
let Movie3 = new Movie("Aa Naluguru", "anapurna", "PG");
let Movie4 = new Movie("Bahubhali 2", "xxxx", "PG");
let film = new Movie("Casino Royale", "Eon Productions", "PG13");
film.display();

let arr = [];
arr.push(Movie1.movieObject());
arr.push(Movie2.movieObject());
arr.push(Movie3.movieObject());
arr.push(Movie4.movieObject());

console.log(arr);
Movie.getPG(arr);