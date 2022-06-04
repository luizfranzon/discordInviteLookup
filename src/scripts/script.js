const getInfoButton = document.getElementById("getInfoButton");
const serverInfoDiv = document.getElementById("serverInfoDiv");
const inviterInfoDiv = document.getElementById("inviterInfoDiv");

getInfoButton.addEventListener("click", function () {
    const URL = "http://localhost:3000";

    let input = document.getElementById("invite-link").value.trim();

    //Check if the invite is complete and get only the invite code
    let code = input.includes("/") ? input.split("/")[3] : input;

    fetch(URL + "/invite/" + code).then((res) => {
        let data = res
            .json()
            .then((data) => {
                serverInfoDiv.classList.add("hidden");
                inviterInfoDiv.classList.add("hidden");
                if (data == 404) {
                    serverName.innerText = "Server not found!";
                } else {

                    serverInfoDiv.classList.remove("hidden");

                    let serverSizeIncrease = data.guild.iconURL;
                    serverIcon.src = serverSizeIncrease.replace("size=64", "size=512");

                    serverName.innerText = "Server name: " + data.guild.name;
                    serverMembros.innerText = "Approximate Member Count: " + data.approximate_member_count;
                    serverExpireAt.innerText = "Expires at: " + new Date(data.expires_at).toLocaleString();
                    serverID.innerText = "Server ID: " + data.guild.id;
                    channelInviteFor.innerText = "Channel invite for: " + data.channel.name;

                    if (data.inviter) {

                        inviterInfoDiv.classList.remove("hidden");

                        let inviterSizeIncrease = data.inviter.avatarURL;
                        InviterIcon.src = inviterSizeIncrease.replace("size=64", "size=512");

                        InviterTag.innerText = "Inviter name: " + data.inviter.tag;
                        InviterID.innerText = "ID: " + data.inviter.id;
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
});
