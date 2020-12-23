/*
remove non-av entry from bilibili feed.

QX:
https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index? url script-response-body bilibili-feed.js
*/

let body = $response.body;
let obj = JSON.parse(body);
let i = 0;
while(i < obj['data']['items'].length) {
    if(obj['data']['items'][i].hasOwnProperty('goto') && obj['data']['items'][i]['goto'] != 'av') {
        obj['data']['items'] = obj['data']['items'].splice(i, i);
    } else {
        i++;
    }
}
body = JSON.stringify(obj);
$done({body});
