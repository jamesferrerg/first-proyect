import placeholder from "../placeholder.jpg"

export function getItemImg(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` :  placeholder;
}