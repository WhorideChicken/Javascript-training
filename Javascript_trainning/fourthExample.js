class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}


function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

function koreanMovie() {
    return loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`)
        .then(res => {
            console.log(`${res.author}: ${res.quote}`)
            return res;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log(`${res.author}: ${res.quote}`)
                return koreanMovie();
            } else {
                throw err;
            }
        });
}

async function ayncLoadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    }
    else {
        throw new HttpError(response);
    }
}

let ayncKoreanMovie = async () => {
    try {
        let res = await ayncLoadJson("https://klassic-quote-api.mooo.com/v1/random-quote");
        console.log(`${res.author}: ${res.quote}`)
    }
    catch (err) {
        console.log("인터넷 오류 " + err);
    }

}

ayncKoreanMovie();