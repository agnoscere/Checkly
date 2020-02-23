window.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var input = this.responseText.split(":");
            var trustLabel = document.getElementById("isTrust");
            trustLabel.innerHTML = input[1];

            if (trustLabel.innerText == "impartial") {
                trustLabel.color = "green";
            }

            document.getElementById("demo").innerHTML = input[0] + "%";
        }
    };

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var link = "http://10.22.0.183/hack2020/process.php?url=" + tabs[0].url;

        xhttp.open("GET", link, true);
        xhttp.send();
    });

    var myVar = setTimeout(showPage, (Math.random() * 3000) + 1000);
          
    function showPage() {
        document.getElementById("loadingPage").style.display = "none";
        document.getElementById("resultPage").style.display = "block";
    }
});