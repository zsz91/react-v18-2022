export default function requestGetData(url = '/index/index', data = {}){

    const prefix = 'http://localhost/thinkphp5/index.php/index';

    return fetch(prefix + url, {
        method: 'get',
        // body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    })
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log(data);
        })
}

export function requestPostData(url = '/index/index', data = {}){

    const prefix = 'http://localhost/thinkphp5/index.php/index';

    return fetch(prefix + url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    })
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log(data);
        })
}