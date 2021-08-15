// create our document ready function to make sure nothing runs before we load the page.
$(document).ready(function () {

    // onclick function() {
    $('.saveBtn').on('click', function() {

        // create variables to save user input and time
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')

        // save to localStorage
        // alert user that items have been saved to localStorage.
        localStorage.setItem(value, time)
        $('.notification').addClass('show')

        // create some kind of timeOut value that removes the notification
        setTimeout(function() {
            $('.notification').removeClass('show')
        }, 5000)
    })
    // create time updater function()
    function hour() {

        // get the current time
        var currentHour = moment().hours()

        // create our loop to go over all the time blocks
        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split('-')[1])

            // if else statement to
            // check to see if we have passed our time
            if (blockHour < currentHour) {
                $(this).addClass('past')

            // check to see if current hour matches physical hour (actual time/html)
            } else if (blockHour === currentHour) {
                $(this).removeClass('past')
                $(this).addClass('present')

            // check to see if the time is in the future
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
             }
        })
    }

    hour();
    // retrieve localStorage and render items to the correct rows
    var interval = setInterval(hour, 10000)
    $('#Hour-9, .description').val(localStorage.getItem('#Hour-9')) 
    $('#Hour-10, .description').val(localStorage.getItem('#Hour-10'))
    $('#Hour-11, .description').val(localStorage.getItem('#Hour-11'))
    $('#Hour-12, .description').val(localStorage.getItem('#Hour-12'))
    $('#Hour-14, .description').val(localStorage.getItem('#Hour-14'))
    $('#Hour-15, .description').val(localStorage.getItem('#Hour-15'))
    $('#Hour-16, .description').val(localStorage.getItem('#Hour-16'))
    $('#Hour-17, .description').val(localStorage.getItem('#Hour-17'))
    console.log(interval);

    $('#currentDay').text(moment().format('MMMM Do YYYY'))
})