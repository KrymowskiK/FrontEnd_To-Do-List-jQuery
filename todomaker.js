$(document).ready(
    function(){
        $('#button').click(
            function(){
                var dodanie = $('input[name=wpr_txt]').val();
                 $('ol').append('<li>' + dodanie + '</li>');
            });
       
       $("input[name=wpr_txt]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $(document).on('click','li', function(){
        $(this).toggleClass('klikniecie').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
      
    }
);