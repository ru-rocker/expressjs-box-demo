function reloadPage(){
    var refreshEnabled = document.getElementById('auto-refresh-checkbox');
    if(refreshEnabled.checked) {
        window.location.reload(1);
    }
}

setInterval(reloadPage, 5000);