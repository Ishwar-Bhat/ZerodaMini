export const ApiCalls = (url, callback) => {
    if (window.location.hostname === "localhost") {
        url = `http://127.0.0.1:8000/${url}`;
    }
    fetch(url)
    .then(res => res.json())
    .then(res => callback(res))
    .catch(err => console.log(err));
};
