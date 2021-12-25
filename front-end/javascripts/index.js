// globals

const showsURL = "http://localhost:3000/shows";
const genresURL = "http://localhost:3000/genres";


//

document.addEventListener("DOMContentLoaded", () => {
    Genre.fetchGenres();
    // renderGenres();
});