const app = new Realm.App({ id: "application-0-shogw" });

async function loginEmailPassword(email, password) {
    // Create an email/password credential
    const credentials = Realm.Credentials.emailPassword(email, password);
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    return user;
}

async function validateCredentials(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await loginEmailPassword(email, password).then(
        ()=> window.location.href = "calendar.html", 
        ()=> console.log("failure"));

}
