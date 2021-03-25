 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA7NWyNxvg2nOmhrZh8jP86thkrhD1BQs4",
    authDomain: "letschat-web-app-4dbc4.firebaseapp.com",
    databaseURL: "https://letschat-web-app-4dbc4-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-4dbc4",
    storageBucket: "letschat-web-app-4dbc4.appspot.com",
    messagingSenderId: "951403237154",
    appId: "1:951403237154:web:b585079a754df9ebe1df7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

    firebase.database().ref("/").child(user_name).update({
        CHAT : "I'm going to the market!"
});
}