export const fetchMovie = async (category = 'popular', language = '', page = 1) => {
    const params = new URLSearchParams();

    if (language !== '') {
        const langMap = {
            english: "en-US",
            vietnamese: "vi-VN",
            japanese: "ja-JP",
            french: "fr-FR",
            korean: "ko-KR",
            chinese: "zh-CN"
        };
        const langParam = langMap[language] || '';
        if (langParam) params.append('language', langParam);
    }

    params.append('page', page);

    const url = `/api/movies/${category}?${params.toString()}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.results;
    } catch(error) {
        console.error("Fetch movie error:", error);
        return [];
    }
};

export const getMovieInfo = async (id) => {
    const url = `api/movies/movie/${id}`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json
    } catch(error) {
        console.error("Fetch movie error: ", error);
        return [];
    }
}