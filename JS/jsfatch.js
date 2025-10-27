const url = "https://dummyjson.com/users?limit=1";
// const pr = fetch(url);
// pr.then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log("name=",data.users[0].firstName);
//     console.log("email=",data.users[0].email);
//     console.log("ip=",data.users[0].ip);
//     console.log("Mac address=",data.users[0].macAddress);
    
// }).catch((error)=>{
//     console.error("error:- ",error.message)
// })


const img = document.querySelector(".avatar");
const data = document.querySelector(".data");
const con = document.querySelector(".con");

async function fetchDetails() {
    try {
        const res = await fetch(url);
        const resp = await res.json();
        console.log(resp);
            img.innerHTML = `<img src="${resp.users[0].image}">`;
            data.innerHTML = `
            <h1>Name = ${resp.users[0].firstName}</h1>
            <h1>Email = ${resp.users[0].email}</h1>
            <h1>${resp.users[0].ip}</h1>
            `;
        
    } catch (error) {
        console.error("Error fetching avatar:", error);
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    con.style.flexDirection = "column";
    con.style.justifyContent = "space-around";
    btn.style.display="none";
    img.style.display="block";
    data.style.display="block";
    await fetchDetails();
})
