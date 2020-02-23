window.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var link = "http://10.22.0.183/hack2020/process.php?url=" + tabs[0].url;

        xhttp.open("GET", link, true);
        xhttp.send();
    });

    var myVar = setTimeout(showPage, 2000);
          
    function showPage() {
        document.getElementById("loadingPage").style.display = "none";
        document.getElementById("resultPage").style.display = "block";
    }
});