const URL_USERS = "https://jsonplaceholder.typicode.com/users";

function showUsersData(data){
    const parentTable = document.getElementById('usersDataTable');
    let itemClass ='';

    for(let i = 0; i<data.length; i++){
        itemClass = (i%2==0)?'even':'';
        let user = document.createElement('tr');
        user.className = itemClass;
        user.innerHTML = `<td>${data[i].name} </td>
                          <td>${data[i].email} </td>
                          <td>${data[i].phone}</td>
                          <td>${data[i].address.city}</td>
                          <td>${data[i].company.name}</td>`;
        parentTable.appendChild(user);
    }
}

//  Traigo los datos con el metodo nativo fetch 
function getUsersFetch(){
    try{
        fetch(URL_USERS) // Infiere en que el pedido es un GET
        .then((response) => response.json())
        .then((data) => showUsersData(data)); 
    } catch(error){
        console.log("Error", error);
        console.log("Error Name", error.name);        
    }
}
// Traigo los datos con async await y la lib axios
async function getUsersAsync(){
    try {
        const users = await axios.get(URL_USERS);
        showUsersData(users.data);
    } catch (error) {
        console.log("Error", error);
        console.log("Error Name", error.name);
    }
};
getUsersFetch();    