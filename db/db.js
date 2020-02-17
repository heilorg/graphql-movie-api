let movies = [
    {
        id: 1,
        name: "스타워즈",
        score: 9
    },
    {
        id: 2,
        name: "어벤져스",
        score: 8
    },
    {
        id: 3,
        name: "영화 뭐 없나?",
        score: 7
    },
    {
        id: 4,
        name: "그러게 더 생각나는게 없네",
        score: 6
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};
