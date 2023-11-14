function myfetch(url) {
    let p = new Promise((res, rej) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const myresponse = new Response(xhr.response, null);
                    res(myresponse);
                }
                else {
                    const myresponse = new Response(xhr.response, null)
                    rej(myresponse);
                }
            }
        }
    })
    return p;
}
const ressult = document.querySelector('.result');

myfetch('http://127.0.0.1:3000')
    .then(res => {
        return res.text();
    }, rej => {
        console.log(rej);
    })
    .then(data => {
        ressult.innerHTML = data;
    })

