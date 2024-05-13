export const movies = [
    { poster: "/iron-man.jpg", name: "Iron Man"},
    { poster: "/avenger-infinity-war.jpeg", name: "Avenger Infinity War"},
    { poster: "/spider-man.jpg", name: "Spider Man"},
    { poster: "/loki.jpg", name: "Loki"},
    { poster: "/matrix.png", name: "Matrix"},
    { poster: "/john-wick.jpg", name: "Jhon Wick"},
    { poster: "/avenger-endgame.jpg", name: "Avenger Endgame"},
]

export const randomMoviesSet1 = movies.sort(()=> Math.random() - 0.5)
.concat(movies.sort(()=> Math.random() - 0.5))
.concat(movies.sort(()=> Math.random() - 0.5));

export const randomMoviesSet2 = movies.sort(()=> Math.random() - 0.5)
.concat(movies.sort(()=> Math.random() - 0.5))
.concat(movies.sort(()=> Math.random() - 0.5))
.sort(()=> Math.random() - 0.5); 