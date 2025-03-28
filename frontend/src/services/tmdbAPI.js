const ACCESS_KEY = import.meta.env.VITE_APP_TMDB_ACCESS_TOKEN;
const BASE_URL = import.meta.env.VITE_APP_TMBD_BASE_URL;

export const fetchMovie = async (category = 'popular', language = '', page = 1) => {
    let url = `${BASE_URL}/movie/${category}?page=${page}`

    console.log("asdf", ACCESS_KEY, BASE_URL);
    
    
    let langParam = "";
    switch(language) {
        case "english":
            langParam = "en-US";
            break;
        case "vietnamese":
            langParam = "vi-VN";
            break;
        case "japanese":
            langParam = "ja-JP";
            break;
        case "french":
            langParam = "fr-FR";
            break;
        case "korean":
            langParam = "ko-KR";
            break;
        case "chinese":
            langParam = "zh-CN";
            break;
        default:
            langParam = "";
    }

    if (langParam != "") {
        url = `${BASE_URL}/movie/${category}?language=${langParam}&page=${page}`;
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ACCESS_KEY
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.results;
    } catch(error) {
        console.error(error);
        return `Can not fetch. Error: ${error}`;     
    }
}
