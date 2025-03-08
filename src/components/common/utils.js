export const getImageUrl = (path, size) => {
    const sizes = {
        small: "w185",
        medium: "w342",
        large: "w500"
    }

    console.log(sizes[size]);
    
    return `https://image.tmdb.org/t/p/${sizes[size] || "w342"}/${path}`;
}
