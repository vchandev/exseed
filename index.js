function getUserInfo() {

  var url = "https://citizensbank.openbankproject.com/obp/v4.0.0/root";

  console.log(url);
  
   fetch(url)
    .then(data => renderTable(data))
    .catch (error => {
      var errorMsg = "API error";
      console.error(error);
      document.getElementById("results").innerHTML = error;
    });
}

 function renderTable(obj) {

      document.getElementById("results").innerHTML = obj.organisation;

  };