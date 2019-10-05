var url = "https://jsonplaceholder.typicode.com/users";

console.log(url);

function getUserInfo(url) {
  var userNum = document.getElementById("usernum").value;

  var fullUrl = url + "/" + userNum;

  console.log(fullUrl);
  
   fetch(fullUrl)
    .then(response => response.json())
    .then(data => renderTable(data))
    .catch (error => {
      var errorMsg = "API error";
      console.error(errorMsg);
      document.getElementById("results").innerHTML = errorMsg;
    });
}

 function renderTable(obj) {
      var results = "";

      results += "<table> <tr> <td> ID: </td> <td>" + obj.id + "</td> </tr>";
      results += "<tr> <td> Name: </td> <td>" + obj.name + "</td> </tr>";
      results += "<tr> <td> Username: </td> <td>" + obj.username + "</td> </tr>";
      results += "<tr> <td> Company: </td> <td>" + obj.company.name + "</td> </tr>";
      results += "<tr> <td> E-mail: </td> <td>" + obj.email + "</td> </tr>";
      results += "<tr> <td> Address: </td> <td>" + obj.address.street + " " + obj.address.suite + "</td> </tr>";
      results += "<tr> <td> </td> <td>" + obj.address.city + " " + obj.address.zipcode + "</td> </tr>";
      results += "<tr> <td> Phone: </td> <td>" + obj.phone + "</td> </tr>";
      results += "<tr> <td> Website: </td> <td>" + obj.website + "</td> </tr>";
      results += "</table>"
      document.getElementById("results").innerHTML = results;
  };