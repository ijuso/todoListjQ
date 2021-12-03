$(document).ready(
    function(){
        $('body').css('display', 'none');
        $('body').fadeIn(500);      // Sivu "feidaantuu" auki

        // Enteristä lisää uuden eikä avata sivua uudelleen
        $(document).on('submit', '#toDoList', function() {
            $('#nappi').click();
            return false;
        });

        // Lisäys eventti
        $('#nappi').click(
            function(){
                // localStorage.clear();
                var todoo = $('input[name=kentta]').val();
                if(todoo.trim().length > 2){
                    $('<li>' + todoo + '</li>').appendTo('ol').hide().fadeIn(500);
                    $('input[name=kentta]').val('');    // Tyhjennetään kenttä lisäyksen jälkeen
                }
            }
        );

        // Klikkaus eventti
        $(document).on('click','li', function(){
            $(this).toggleClass('yliviivaus');    
        });
        // Tuplaklikkaus eventti
        $(document).on('dblclick','li', function(){
            $(this).fadeOut(500);  
        });
    }
);