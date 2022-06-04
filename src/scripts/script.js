const getInfoButton = document.getElementById("getInfoButton")

getInfoButton.addEventListener("click", function() {
    const URL = "http://localhost:3000"
    const input = document.getElementById("invite-link").value.trim();
    let code = input.substring(input.indexOf("discord.gg/") + 11);

    fetch(URL + "/invite/" + code)
    .then(res => {
        let data = res.json().then(data => {
        //DOM Manipulation
        })
    })
    .catch(err => {
        console.log(err);
    })
})