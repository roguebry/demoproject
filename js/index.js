$(function(){
    console.log('js/index.js loaded');

    //Generate Gameboard
    $('#mainContainer').append('<div id="gameBoard"></div>');

    //Create Tiles for gameboard
    for(var i = 0; i< 64;i++){
        $('#gameBoard').append('<div id="locationNumber_'+ i + '"' + 'class="location" data-value="' + i + '" ' + ">" + '</div>');
    }

    //Event listener for when a player clicks on a tile
    $(document).on('click','.location',function(){
        console.log('click .location');
        var id = $(this).attr('data-value');

        //Define effected tiles
        var locationBelow = $('#locationNumber_' + (parseInt(id)+8).toString());
        var locationAbove = $('#locationNumber_' + (parseInt(id)-8).toString());
        var locationLeft = $('#locationNumber_' + (parseInt(id)-1).toString());
        var locationRight = $('#locationNumber_' + (parseInt(id)+1).toString());

        if(locationBelow.attr('data-switchValue') == 'true'){
            locationBelow.removeClass('switch');
            locationBelow.attr('data-switchValue', 'false');
        } else{
            locationBelow.addClass('switch');
            locationBelow.attr('data-switchValue', 'true');
        }

        if(locationAbove.attr('data-switchValue') == 'true'){
            locationAbove.removeClass('switch');
            locationAbove.attr('data-switchValue', 'false');
        } else{
            locationAbove.addClass('switch');
            locationAbove.attr('data-switchValue', 'true');
        }

        if(locationLeft.attr('data-switchValue') == 'true'){
            locationLeft.removeClass('switch');
            locationLeft.attr('data-switchValue', 'false');
        } else{
            locationLeft.addClass('switch');
            locationLeft.attr('data-switchValue', 'true');
        }

        if(locationRight.attr('data-switchValue') == 'true'){
            locationRight.removeClass('switch');
            locationRight.attr('data-switchValue', 'false');
        } else{
            locationRight.addClass('switch');
            locationRight.attr('data-switchValue', 'true');
        }

    });
});