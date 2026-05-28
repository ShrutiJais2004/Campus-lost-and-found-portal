const API = "http://localhost:3000";

async function registerUser() {

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  const role =
    document.getElementById("role").value;

  const response = await fetch(API + "/register", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      username,
      password,
      role
    })
  });

  const data = await response.json();

  alert(data.message);

  window.location = "login.html";
}

async function loginUser() {

  const username =
    document.getElementById("loginUsername").value;

  const password =
    document.getElementById("loginPassword").value;

  const response = await fetch(API + "/login", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,
      password
    })
  });

  const data = await response.json();

  if(data.success){

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    if(data.role === "admin"){
      window.location = "admin.html";
    }
    else{
      window.location = "index.html";
    }

  }else{
    alert(data.message);
  }
}

async function addItem(){

  const title =
    document.getElementById("title").value;

  const category =
    document.getElementById("category").value;

  const location =
    document.getElementById("location").value;

  const image =
    document.getElementById("image").value;

  const description =
    document.getElementById("description").value;

  const status =
    document.getElementById("status").value;

  await fetch(API + "/items",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      title,
      category,
      location,
      image,
      description,
      status
    })
  });

  loadItems();
}

async function loadItems(){

  const response =
    await fetch(API + "/items");

  const items = await response.json();

  const container =
    document.getElementById("itemsContainer");

  if(!container) return;

  container.innerHTML = "";

  items.forEach(item=>{

    container.innerHTML += `
      <div class="item">

        <h2>${item.title}</h2>

        <p><b>Status:</b> ${item.status}</p>

        <p><b>Category:</b> ${item.category}</p>

        <p><b>Location:</b> ${item.location}</p>

        <p>${item.description}</p>

        <img src="${item.image}">

        <button onclick="claimItem()">
          Claim Request
        </button>

        <button onclick="deleteItem(${item.id})">
          Delete
        </button>

      </div>
    `;
  });
}

function claimItem(){
  alert("Claim Request Sent");
}

async function deleteItem(id){

  await fetch(API + "/items/" + id,{
    method:"DELETE"
  });

  loadItems();
}

function logout(){

  localStorage.removeItem("user");

  window.location = "login.html";
}

loadItems();