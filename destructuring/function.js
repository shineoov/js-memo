
function saveSettings({follow, alert, color = "blue"}) {

    console.log(follow, alert, color);
}


saveSettings({
    follow: true,
    alert: true,
    mkt: true,
    color: "green"
})
