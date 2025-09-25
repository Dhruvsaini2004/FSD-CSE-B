// document.querySelector(".avatar").innerHTML=`<img src="${resp.avatar_url}">`
const url = "https://api.github.com/users/Dhruvsaini2004";

async function fetchAvatar() {
    try {
        const res = await fetch(url);
        const resp = await res.json();
        console.log(resp.avatar_url);
        if (typeof document !== 'undefined') {
            document.querySelector(".avatar").innerHTML = `<img src="${resp.avatar_url}">`;
        }
    } catch (error) {
        console.error("Error fetching avatar:", error);
    }
}

fetchAvatar();