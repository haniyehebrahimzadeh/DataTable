	
				$(document).ready(documentReady);

                function documentReady() { 
                  
					// FETCHING DATA FROM JSON FILE 
                   
                    var student = null; 
                    var person =null;
                        
					    $.getJSON("https://jsonplaceholder.typicode.com/users", 
							function (data) { 
                       
						// ITERATING THROUGH OBJECTS 
                        i=1;
						$.each(data, function (key, value) { 

							//CONSTRUCTION OF ROWS HAVING 
							// DATA FROM JSON OBJECT 
							student += '<tr>';
							student += '<td>' + 
                                value.id + '</td>';
                                 

							student += '<td>' + 
                                value.name + '</td>'; 

                                //person
                                person += ' <option value="'+ i++ +'"> ' +
                                value.name+'</option>';
                                

							student += '<td>' + 
								value.username + '</td>'; 

							student += '<td>' + 
								value.email + '</td>'; 

							student += '</tr>';

                            
						}); 
						
						//INSERTING ROWS INTO TABLE 
                        
                        $('#table').html(student);
                        $('#select').html('<option value="no">No item has selected</option>' + person); 
                        
					}); 
                
                }; 


                // SERACH BOX
                $("#myInput").on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $("#table tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });


                // COMBO BOX
                $('#select').change(function() {
                    var selection = $(this).val();
                    if(selection=="no"){
                        documentReady(); 
                    }
                    var dataset = $('#table').find('tr');
                    dataset.show();
                    dataset.filter(function(index, item) {
                        return $(item).find('td:first-child').text().split(',').indexOf(selection) === -1;
                    }).hide();

                 });     
		