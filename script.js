$(function() {
  console.log("_dbg in jquery initialize function")
  $("#getinfo_btn").click(function(){
        console.log("button");
   
  $.ajax({
    url: "https://citizensbank.openbankproject.com/obp/v4.0.0/my/banks/citizens.0201.us-b.cb/accounts/69b1fd57-c7df-4b22-ab2b-5f7cc6e73f70/account",
    //data: myData,
    //url: "https://crossorigin.me/https://citizensbank.openbankproject.com/obp/v4.0.0/my/banks/citizens.0201.us-b.cb/accounts/69b1fd57-c7df-4b22-ab2b-5f7cc6e73f70/account",
    
    type: 'GET',
    async: true,
    //crossDomain: true,
    //dataType: 'jsonp',
    success: function() { console.log("Success"); },
    error: function() { console.log('Failed!'); },
    headers: {
      "authorization": "DirectLogin token=eyJhbGciOiJIUzI1NiJ9.eyIiOiIifQ._WL1_alFDOjxXtmyWr2jE1Sx7nV3Ex-1fnB8HqFQknI",
    "cache-control": "no-cache",
    "postman-token": "8b03836d-2dfa-a3bf-77f3-00c01ba67fb8",
              'Access-Control-Allow-Origin': '*'
          },
    }).done(function(response) {
        renderTable(response);
      });
});

})

function renderTable(obj) {
    var results = "";

    results += "<table> <tr> <td> Bank ID: </td> <td>" + obj.bank_id + "</td> </tr>";
    results += "<tr> <td> Name: </td> <td>" + obj.owners[0].display_name.split(".",1) + "</td> </tr>";
    results += "<tr> <td> Account Number: </td> <td>" + obj.number + "</td> </tr>";
    results += "<tr> <td> Account Balance: </td> <td>" + obj.balance.amount + "</td> </tr>";
    results += "<tr> <td> Currency: </td> <td>" + obj.balance.currency + "</td> </tr>";
    results += "<tr> <td> IBAN: </td> <td>" + obj.account_routings[0].address + "</td> </tr>";
    results += "</table>"
    $("#results").html(results);
};