window.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var input = this.responseText.split(":");
            input[1] = input[1].substr(0, 1).toUpperCase() + input[1].substr(1);
            var trustLabel = document.getElementById("isTrust");
            trustLabel.innerHTML = input[1];

            if (input[1].includes("Impartial") || input[1].includes("Trusted")) {
                trustLabel.style.color = "green";
            } else if (input[1].includes("Bias") || input[1].includes("Conspiracy") || input[1].includes("Satire") || input[1].includes("Clickbait")) {
                trustLabel.style.color = "red";
            } else {
                trustLabel.style.color = "orange";
            }

            document.getElementById("demo").innerHTML = input[0] + "%";
        }
    };

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var link = "http://10.22.0.213/hack2020/process.php?url=" + tabs[0].url;

        xhttp.open("GET", link, true);
        xhttp.send();
    });

    var myVar = setTimeout(showPage, (Math.random() * 3000) + 1000);
          
    function showPage() {
        document.getElementById("loadingPage").style.display = "none";
        document.getElementById("resultPage").style.display = "block";
    }
});