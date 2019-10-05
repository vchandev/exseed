var url = "https://citizensbank.openbankproject.com/obp/v4.0.0/root";

console.log(url);

function getUserInfo(url) {

  console.log(url);
  
   fetch(url)
    .then(response => console.log(response))
    .catch (error => {
      var errorMsg = "API error";
      console.error(error);
      document.getElementById("results").innerHTML = error;
    });
}

//  function renderTable(obj) {
//       var results = obj;

//       document.getElementById("results").innerHTML = results;


//   };