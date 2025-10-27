function register()
{
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
     console.log("register end");
     resolve();
     },2000)
    });
}
function sendemail()
{
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
     console.log("sendmail");
     resolve();
     },2000)
    });
}
function login()
{
return new Promise((resolve,reject)=>{
     setTimeout(() => {
     console.log("login end");
     reject();
     },2000)
    });
}
function getData()
{
return new Promise((resolve,reject)=>{
     setTimeout(() => {
     console.log("get data");
     resolve();
     },2000)
    });
}
function displayData()
{
return new Promise((resolve,reject)=>{
     setTimeout(() => {
     console.log("display data");
     resolve();
     },2000)
    });
}
register()
.then(sendemail)
.then(login)
.then(getData)
.then(displayData)
.catch((err)=>{
    console.log(error);
    });