class Genre {

    constructor(genre) {
        this.name =  genre.name;
        this.show_id = genre.show_id; 
        Genre.genresList.push(this)
    }

    static genresList = [];

    static fetchGenres() {
        fetch(genresURL)
            .then(resp => resp.json())
            .then(genres => {
                for(let genre of genres.data) {
                    let newGenre = new Genre(genre)
                }
                console.log(genres.data)
            })
    }

    // const loadGenres = async () => {
    //     const response = await fetch(genresURL);
    //     const genres = await response.json();
    //     console.log('genres', genres)
    // }

}