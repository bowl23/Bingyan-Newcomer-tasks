function myfetch(url) {
    let p = new Promise((res, rej) => {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    res(xhr.response);
                }
                else {
                    rej(xhr.response)
                }
            }
        }
        xhr.send();
    })
    return p;
}


myfetch('http://127.0.0.1:3000')
    .then(function (res) {
        console.log(res);
    }, function () {
        console.log('err');
    })


console.log('test');
