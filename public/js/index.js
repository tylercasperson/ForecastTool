
    // Get references to page elements
    var $mainCategory = $("#mainCategory");
    var $subCategory = $("subCategpry");
    var $categoryYear = $("categoryYear");
    var $january = $("#january");
    var $february = $("#february ");
    var $march = $("#march");
    var $april = $("#april");
    var $may = $("#may");
    var $june = $("#june");
    var $july = $("#july");
    var $august = $("#august");
    var $september = $("#september");
    var $october = $("#october");
    var $november = $("#november");
    var $december = $("#december");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveSalesHistory: function(id) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/salesHistorys/" + id,
        data: JSON.stringify(salesHistory)
      });
    },
    getSalesHistory: function() {
      return $.ajax({
        url: "api/salesHistorys",
        type: "GET",
        dataType: "json",
        success: (data) => {
            console.log('Success', data);
        }
      });
    },
    deleteSalesHistory: function(id) {
      return $.ajax({
        url: "api/salesHistorys/" + id,
        type: "DELETE"
      });
    }
  };

  $('#clickme').click(() => {
    return $.ajax({
      url: "api/salesHistorys",
      type: "GET",
      dataType: "json",
      success: (data) => {
          console.log('Success', data);
          $("#tyler").html(data.SalesData);
      }
    });
  });

  // refreshExamples gets new examples from the db and repopulates the list
  var refreshData = function() {
    API.getSalesHistory().then(function(data) {
      var $salesHistory = data.map(function(salesHistory) {
        var $january = $("#january")
          .text(salesHistory.SalesData)
          .prepend($january);
          console.log("1");
        return $january;
      });


    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();

    var example = {
      text: $exampleText.val().trim(),
      description: $exampleDescription.val().trim()
    };

    if (!(example.text && example.description)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveExample(example).then(function() {
      refreshExamples();
    });

    $exampleText.val("");
    $exampleDescription.val("");
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
      refreshExamples();
    });
  };

console.log(API.getSalesHistory);

  // Add event listeners to the submit and delete buttons
  // $submitBtn.on("click", handleFormSubmit);
  // $exampleList.on("click", ".delete", handleDeleteBtnClick);
