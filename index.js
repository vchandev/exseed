var url = "https://citizensbank.openbankproject.com/obp/v4.0.0/root";

console.log(url);

function getUserInfo(url) {
  // var userNum = document.getElementById("usernum").value;

  // var fullUrl = url + "/" + userNum;

  console.log(url);
  
   fetch(url)
    .then(response => response.json())
    .then(data => renderTable(data))
    .catch (error => {
      var errorMsg = "API error";
      console.error(errorMsg);
      document.getElementById("results").innerHTML = errorMsg;
    });
}

 function renderTable(obj) {
      var results = obj;

      // results += "<table> <tr> <td> ID: </td> <td>" + obj.id + "</td> </tr>";
      // results += "<tr> <td> Name: </td> <td>" + obj.name + "</td> </tr>";
      // results += "<tr> <td> Username: </td> <td>" + obj.username + "</td> </tr>";
      // results += "<tr> <td> Company: </td> <td>" + obj.company.name + "</td> </tr>";
      // results += "<tr> <td> E-mail: </td> <td>" + obj.email + "</td> </tr>";
      // results += "<tr> <td> Address: </td> <td>" + obj.address.street + " " + obj.address.suite + "</td> </tr>";
      // results += "<tr> <td> </td> <td>" + obj.address.city + " " + obj.address.zipcode + "</td> </tr>";
      // results += "<tr> <td> Phone: </td> <td>" + obj.phone + "</td> </tr>";
      // results += "<tr> <td> Website: </td> <td>" + obj.website + "</td> </tr>";
      // results += "</table>"
      document.getElementById("results").innerHTML = results;


  };

// function getBankAccount() {

//   var request = new Request('https://citizensbank.openbankproject.com/obp/v4.0.0/my/banks/citizens.0201.us-b.cb/accounts/0fa6f7e9-9b07-486c-b185-052da3f08a17/account', {
// 	method: 'GET',
// 	headers: new Headers({
//     "Authorization": "DirectLogin token=\'eyJhbGciOiJIUzI1NiJ9.eyIiOiIifQ.3b42T1eNoBMwFxqvqZreab5irhb64oeo6FfJL0841RM\'",
//     // "consumer_key": "uhqgfutvdre44f1ofrly11yifca2wgfollb2rnls",
//     // "User-Agent": "PostmanRuntime/7.17.1",
//     // "Accept": "*/*",
//     // "Cache-Control": "no-cache",
//     // "Postman-Token": "b099bf0a-6b5c-4fa9-959f-d619d38f1523,51b6a397-aab3-4582-b44a-f6983b98c0a7",
//     // "Host": "citizensbank.openbankproject.com",
//     // "Accept-Encoding": "gzip, deflate",
//     // "Cookie": "JSESSIONID=lqikempfdw3j1uljd7fcpku19",
//     // "Connection": "keep-alive",
//     // "cache-control": "no-cache"
// 	})
// });

// fetch(request)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch (error => {
//       var errorMsg = "API error";
//       console.error(errorMsg);
//       document.getElementById("results").innerHTML = errorMsg;
//     });
//   }

// function renderTable(obj) {
// var results = "";

// results += "<table> <tr> <td> ID: </td> <td>" + obj.id + "</td> </tr>";
// results += "<tr> <td> Name: </td> <td>" + obj.name + "</td> </tr>";
// results += "<tr> <td> Username: </td> <td>" + obj.username + "</td> </tr>";
// results += "<tr> <td> Company: </td> <td>" + obj.company.name + "</td> </tr>";
// results += "<tr> <td> E-mail: </td> <td>" + obj.email + "</td> </tr>";
// results += "<tr> <td> Address: </td> <td>" + obj.address.street + " " + obj.address.suite + "</td> </tr>";
// results += "<tr> <td> </td> <td>" + obj.address.city + " " + obj.address.zipcode + "</td> </tr>";
// results += "<tr> <td> Phone: </td> <td>" + obj.phone + "</td> </tr>";
// results += "<tr> <td> Website: </td> <td>" + obj.website + "</td> </tr>";
// results += "</table>"
// document.getElementById("results").innerHTML = results;
// }
