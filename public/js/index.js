
// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/salesHistory",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  function makeRows() {
    id.forEach(function(id) {
      var $row = $('<tr></tr>');
      $row.append( $('<td></td>').text(salesData));
      rows.push({
        id: salesHistory.id,
        $element: $row
      });
    });
  };



  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $tr = $("<tr>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
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

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);





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
        url: "/api/salesHistorys",
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
          console.log("api/salesHistorys")
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

  refreshData();
  
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

  // Add event listeners to the submit and delete buttons
  // $submitBtn.on("click", handleFormSubmit);
  // $exampleList.on("click", ".delete", handleDeleteBtnClick);








 


// <script type="text/javascript">
// $(document).ready(function($)
// {
// 	//ajax row data
// 	var ajax_data =
//   [
//     {MainCategory="Code", SubCateogry="With Mark", CategoryYear=2002, January=20, February=30, March=40, April=50, May=40, June=30, July=30, August=20, September=20, October=30, November=40, December=55}, 
//     {MainCategory="Code", SubCateogry="With Mark", CategoryYear=2002, January=20, February=30, March=40, April=50, May=40, June=30, July=30, August=20, September=20, October=30, November=40, December=55}, 
//   ]



// 	var random_id = function  () 
// 	{
// 		var id_num = Math.random().toString(9).substr(2,3);
// 		var id_str = Math.random().toString(36).substr(2);
		
// 		return id_num + id_str;
// 	}


// 	//--->create data table > start
// 	var tbl = '';
// 	tbl +='<table class="table table-hover">'

// 		//--->create table header > start
//     tbl +='<thead>';
//       tbl +='<tr>';
//       tbl +='<th>Category</th>';
//       tbl +='<th>SubCategory</th>';
//       tbl +='<th>Year</th>';
//       tbl +='<th>January</th>';
//       tbl +='<th>February</th>';
//       tbl +='<th>March</th>';
//       tbl +='<th>April</th>';
//       tbl +='<th>May</th>';
//       tbl +='<th>June</th>';
//       tbl +='<th>July</th>';
//       tbl +='<th>August</th>';
//       tbl +='<th>September</th>';
//       tbl +='<th>October</th>';
//       tbl +='<th>November</th>';
//       tbl +='<th>December</th>';
//       tbl +='<th>Options</th>';
//       tbl +='</tr>';
//     tbl +='</thead>';
// 		//--->create table header > end

		
// 		//--->create table body > start
// 		tbl +='<tbody>';

// 			//--->create table body rows > start
// 			$.each(ajax_data, function(index, val) 
// 			{
// 				//you can replace with your database row id
// 				var row_id = random_id();

// 				//loop through ajax row data
//           tbl +='<tr row_id="'+row_id+'">';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="MainCategory">'+val['MainCategory']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="SubCateogry">'+val['SubCateogry']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="CategoryYear">'+val['CategoryYear']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="January">'+val['January']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="February">'+val['February']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="March">'+val['March']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="April">'+val['April']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="May">'+val['May']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="June">'+val['June']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="July">'+val['July']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="August">'+val['August']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="September">'+val['September']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="October">'+val['October']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="November">'+val['November']+'</div></td>';
//           tbl +='<td ><div class="row_data" edit_type="click" colName="December">'+val['December']+'</div></td>';

// 					//--->edit options > start
// 					tbl +='<td>';
					 
// 						tbl +='<span class="btn_edit" > <a href="#" class="btn btn-link " row_id="'+row_id+'" > Edit</a> </span>';

// 						//only show this button if edit button is clicked
// 						tbl +='<span class="btn_save"> <a href="#" class="btn btn-link"  row_id="'+row_id+'"> Save</a> | </span>';
// 						tbl +='<span class="btn_cancel"> <a href="#" class="btn btn-link" row_id="'+row_id+'"> Cancel</a> | </span>';

// 					tbl +='</td>';
// 					//--->edit options > end
					
// 				tbl +='</tr>';
// 			});

// 			//--->create table body rows > end

// 		tbl +='</tbody>';
// 		//--->create table body > end

// 	tbl +='</table>'	
// 	//--->create data table > end

// 	//out put table data
// 	$(document).find('.tbl_user_data').html(tbl);

// 	$(document).find('.btn_save').hide();
// 	$(document).find('.btn_cancel').hide(); 


// 	//--->make div editable > start
// 	$(document).on('click', '.row_data', function(event) 
// 	{
// 		event.preventDefault(); 

// 		if($(this).attr('edit_type') == 'button')
// 		{
// 			return false; 
// 		}

// 		//make div editable
// 		$(this).closest('div').attr('contenteditable', 'true');
// 		//add bg css
// 		$(this).addClass('bg-warning').css('padding','5px');

// 		$(this).focus();
// 	})	
// 	//--->make div editable > end


// 	//--->save single field data > start
// 	$(document).on('focusout', '.row_data', function(event) 
// 	{
// 		event.preventDefault();

// 		if($(this).attr('edit_type') == 'button')
// 		{
// 			return false; 
// 		}

// 		var row_id = $(this).closest('tr').attr('row_id'); 
		
// 		var row_div = $(this)				
// 		.removeClass('bg-warning') //add bg css
// 		.css('padding','')

// 		var col_name = row_div.attr('col_name'); 
// 		var col_val = row_div.html(); 

// 		var arr = {};
// 		arr[col_name] = col_val;

// 		//use the "arr"	object for your ajax call
// 		$.extend(arr, {row_id:row_id});

// 		//out put to show
// 		$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>');
		
// 	})	
// 	//--->save single field data > end

 
// 	//--->button > edit > start	
// 	$(document).on('click', '.btn_edit', function(event) 
// 	{
// 		event.preventDefault();
// 		var tbl_row = $(this).closest('tr');

// 		var row_id = tbl_row.attr('row_id');

// 		tbl_row.find('.btn_save').show();
// 		tbl_row.find('.btn_cancel').show();

// 		//hide edit button
// 		tbl_row.find('.btn_edit').hide(); 

// 		//make the whole row editable
// 		tbl_row.find('.row_data')
// 		.attr('contenteditable', 'true')
// 		.attr('edit_type', 'button')
// 		.addClass('bg-warning')
// 		.css('padding','3px')

// 		//--->add the original entry > start
// 		tbl_row.find('.row_data').each(function(index, val) 
// 		{  
// 			//this will help in case user decided to click on cancel button
// 			$(this).attr('original_entry', $(this).html());
// 		}); 		
// 		//--->add the original entry > end

// 	});
// 	//--->button > edit > end


// 	//--->button > cancel > start	
// 	$(document).on('click', '.btn_cancel', function(event) 
// 	{
// 		event.preventDefault();

// 		var tbl_row = $(this).closest('tr');

// 		var row_id = tbl_row.attr('row_id');

// 		//hide save and cacel buttons
// 		tbl_row.find('.btn_save').hide();
// 		tbl_row.find('.btn_cancel').hide();

// 		//show edit button
// 		tbl_row.find('.btn_edit').show();

// 		//make the whole row editable
// 		tbl_row.find('.row_data')
// 		.attr('edit_type', 'click')
// 		.removeClass('bg-warning')
// 		.css('padding','') 

// 		tbl_row.find('.row_data').each(function(index, val) 
// 		{   
// 			$(this).html( $(this).attr('original_entry') ); 
// 		});  
// 	});
// 	//--->button > cancel > end

	
// 	//--->save whole row entery > start	
// 	$(document).on('click', '.btn_save', function(event) 
// 	{
// 		event.preventDefault();
// 		var tbl_row = $(this).closest('tr');

// 		var row_id = tbl_row.attr('row_id');

		
// 		//hide save and cacel buttons
// 		tbl_row.find('.btn_save').hide();
// 		tbl_row.find('.btn_cancel').hide();

// 		//show edit button
// 		tbl_row.find('.btn_edit').show();


// 		//make the whole row editable
// 		tbl_row.find('.row_data')
// 		.attr('edit_type', 'click')
// 		.removeClass('bg-warning')
// 		.css('padding','') 

// 		//--->get row data > start
// 		var arr = {}; 
// 		tbl_row.find('.row_data').each(function(index, val) 
// 		{   
// 			var col_name = $(this).attr('col_name');  
// 			var col_val  =  $(this).html();
// 			arr[col_name] = col_val;
// 		});
// 		//--->get row data > end

// 		//use the "arr"	object for your ajax call
// 		$.extend(arr, {row_id:row_id});

// 		//out put to show
// 		$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>')
		 

// 	});
// 	//--->save whole row entery > end


// }); 
// </script>
// }