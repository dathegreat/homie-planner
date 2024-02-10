import * as Realm from "realm-web";

const app = new Realm.App({ id: "application-0-shogw" });


async function createNewUser(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await app.emailPasswordAuth.registerUser({ email, password }).then(
        ()=> console.log("created"), 
        ()=> console.log("failure"));
}
