
function log_ip() {
    let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
    console.log(JSON.stringify(data, null, 2));
    var dataform = new FormData();
    dataform.append("data" , JSON.stringify(data, null, 2));
    var xhr = new XMLHttpRequest();
    xhr.open( 'POST', 'logs', true );
    xhr.send(JSON.stringify(dataform, null, 2));
    });

}