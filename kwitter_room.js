var firebaseConfig = {
      apiKey: "AIzaSyAuMPddIe7F_XPYZD0wlYnNaV65g8sEp1c",
      authDomain: "kwitter-78ce5.firebaseapp.com",
      databaseURL: "https://kwitter-78ce5.firebaseio.com",
      projectId: "kwitter-78ce5",
      storageBucket: "kwitter-78ce5.appspot.com",
      messagingSenderId: "1080670464797",
      appId: "1:1080670464797:web:483f306dd9f91a1a9f4ff4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding a room"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
});});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
