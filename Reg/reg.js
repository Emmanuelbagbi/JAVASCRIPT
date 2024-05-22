let btn = document.getElementById("saveButton");
let usersList = document.getElementById("users_list");
const users = [];
btn.addEventListener("click", () => {
  let fullName = document.getElementById("name").value;
  let gender = document.getElementById("gender").value;
  if (!fullName) {
    alert("Please enter your name");
    return;
  }
  if (!gender) {
    alert("please select gender");
  }
  const user = saveUser(fullName, gender);
  if (!user) {
    throw new Error("opps! something went wrong, try again");
    return;
  }
  //   console.log(user);
 displayUser();
});

function saveUser(full_name, gender) {
  const obj = {};
  if (users.indexOf(full_name) !== -1) {
    alert("user with name already exists");
    return;
  }
  obj["name"] = full_name;
  obj["gender"] = gender;
  users.push(obj);
  return users;
}

function displayUser() {
  usersList.innerHTML = "";
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.gender}</td>
    `;
    usersList.appendChild(row);
  });
}
displayUser();