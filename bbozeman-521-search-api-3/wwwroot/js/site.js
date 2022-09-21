var len;
var results = '';
var count = 1;

function getTime() {
    console.log("test");
    document.getElementById("time").style.visibility = "visible";
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    $('#time').html(time);
    $('#time').dialog();
};

function searchOnClick() {
    results = "";
    document.getElementById("searchResults").style.visibility = "visible";
    apiSearch();
};
function apiSearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "dbf2c871fc5448f8876c06bda4fb184d");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert("error");
        });
}
function backgroundSwitch() {
    if (count % 2 == 0) {
        document.body.style.background = 'url(https://media.istockphoto.com/photos/canary-wharf-district-at-night-london-united-kingdom-picture-id1371290125?s=612x612)';
    }
    else {
        document.body.style.background = 'url(https://media.istockphoto.com/photos/office-buildings-in-canary-wharf-the-downtown-financial-district-in-picture-id1390124896?s=612x612)';
    }
    count++;

}