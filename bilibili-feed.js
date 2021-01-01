/*
remove non-av entry from bilibili feed.

QX:
https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index? url script-response-body bilibili-feed.js
*/

let body = $response.body;
let obj = JSON.parse(body);
let i = 0;
while(i < obj['data']['items'].length) {
    if(obj['data']['items'][i].hasOwnProperty('banner_item')) { // remove banner items
        obj['data']['items'][i]['banner_item'] = [];
        i++;
    } else if(!obj['data']['items'][i].hasOwnProperty('goto') || obj['data']['items'][i]['goto'] != 'av') { // remove non-av items
        obj['data']['items'].splice(i, 1);
    } else { // av items
        i++;
    }
}
body = JSON.stringify(obj);
$done({body});
