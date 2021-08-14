// create our document ready function to make sure nothing runs before we load the page.
$(document).ready(function () {
// onclick function() {
$('.saveBtn').on('click', function() {
    var value = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id')

    localStorage.setItem(value, time)
    $('.notification').addClass('show')

    setTimeout(function() {
        $('.notification').removeClass('show')
    },5000)
})

function hour() {
    var currentHour = moment().hours()

    $('.time-block').each(function() {
        var blockHour = parseInt($(this).attr('id').split('-')[1])
        
        if (blockHour < currentHour) {
            $(this).addClass('past')
        } else if (blockHour === currentHour){
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

hour();

var interval = setInterval(hour, 10000)
$('Hour-9, .description').val(localStorage.getItem('Hour-9')) 
$('Hour-10, .description').val(localStorage.getItem('Hour-10'))
$('Hour-11, .description').val(localStorage.getItem('Hour-11'))
$('Hour-12, .description').val(localStorage.getItem('Hour-12'))
$('Hour-13, .description').val(localStorage.getItem('Hour-13'))
$('Hour-14, .description').val(localStorage.getItem('Hour-14'))
$('Hour-15, .description').val(localStorage.getItem('Hour-15'))
$('Hour-16, .description').val(localStorage.getItem('Hour-16'))
$('Hour-17, .description').val(localStorage.getItem('Hour-17'))

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    // grab the save $('Hour-9, .description').val(localStorage.getItem('Hour-9'))event options
        // create variables to save user input and time
    // save to localStorage

    // alert user that items have been saved to localStorage.

    // create some kind of timeOut value that removes the notification


//}



// create time updater function()
    // get the current time

    // create our loop to go over all the time blocks

    // if else statement to
    // check to see if we have passed our time
        // check out removeClass and addClass
        // ().removeClass()
    // check to see if current hour matches physical hour (actual time/html)

    // check to see if the time is in the future




// retrieve localStorage and render items to the correct rows

//get one working then copy paste and change the values
})