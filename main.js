     $("#contact-form").submit(function(e){
                 document.getElementById("ajax-response1").style.display = "none";
                 document.getElementById("ajax-response2").style.display = "none";
                 var name= $("#c_name").val();
                 var email= $("#c_email").val();
                 var message= $("#c_message").val();
                 if (email == ""){
                  document.getElementById("ajax-response2").style.display = "block";
                 }
                 else{
                  document.getElementById("ajax-response1").style.display = "block";
                  $("#c_email").val('');
                  $("#c_name").val('');
                  $("#c_message").val('');
                  
                  // $.ajax({
                  //     type: 'post',
                  //     url: 'process.php',
                  //    data: $('form').serialize(),
                  //      success: function () {
                  //       alert('form was submitted');
                  //            }
                  //       });
                 }
                e.preventDefault();
                               });