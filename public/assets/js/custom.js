$(window).on('load', function() {
    //$('.set-password').modal('show');
    //$('.password-modal').click()
    
    $('body').on('click', '.upload-the-contacts', function() {
        $('.selected-contacts-message').removeClass('d-none')

    })
    $('body').on('click', '.write-msg-btn', function() {
        $('.email-overlay').removeClass('d-none')
        setTimeout(function() {
            $('.the-message-maker').addClass('email-overlay-transform');
        }, 0)

    });
    $('body').on('click', '.close-message-maker', function() {
        $('.the-message-maker').removeClass('email-overlay-transform')
        setTimeout(function() {
            $('.email-overlay').addClass('d-none');
        }, 200);

    });

    $('body').on('click','.fullscreen', function(){
        // alert("Fullscreen clicked")
        $('.the-message-maker').toggleClass('email-fullscreen')
        $('.email-overlay').toggleClass('email-overlay-fullscreen')
        $('.email-overlay').removeClass('p-relative')
        $(this).parent().parent().parent().parent().siblings().removeClass('d-none');
        $(this).children('i').toggleClass("bx-exit-fullscreen")
        $(this).children('i').toggleClass("bx-fullscreen")
    })

    $('body').on('click', '.minimize', function() {
        $(this).parent().parent().parent().parent().siblings().toggleClass('d-none');
        $('.email-overlay').toggleClass('p-relative')
        $('.the-message-maker').removeClass('email-fullscreen')
        $('.email-overlay').removeClass('email-overlay-fullscreen')

        $(".fullscreen").children('i').removeClass("bx-exit-fullscreen")
        $(".fullscreen").children('i').addClass("bx-fullscreen")
    });
    $("body").on('change', '.contacts-table tbody input', function() {
        var theTable = $(this).parent().parent().parent().parent().parent();
        if ($(this).is(':checked')) {
            $('.delete-tool-bar').removeClass('d-none').prev().addClass('d-none');

            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                if (theColumn.is(':checked')) {
                    // alert('checked');
                    $('#selectAll').prop('checked', true);
                } else {
                    $('#selectAll').prop('checked', false);
                    return false
                }
            });
        } else {
            $('#selectAll').prop('checked', false);
        }
    })
    $('body').on('change', '#selectAll', function() {
        var theTable = $(this).parent().parent().parent().parent().siblings('tbody');

        if ($(this).is(':checked')) {
            $('.delete-tool-bar').removeClass('d-none').prev().addClass('d-none')
            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                theColumn.prop('checked', true)
            });

        } else {
            $('.delete-tool-bar').addClass('d-none').prev().removeClass('d-none');
            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                theColumn.prop('checked', false);
            });
        }
    });

    

    

    
    $('body').on('click', '.btn-sen', function(){
        $('#walletTopUp .modal-footer').addClass('d-none');
        $('#walletTopUp .close-modal').addClass('d-none');
        $('.stk-timer-container').removeClass('d-none').siblings().addClass('d-none');
        $(this).prop('disabled', true);

        var timeleft = 5;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                alert("You took to long to confirm the transaction");
                $(".stk-timer").text("0 s");
                $('.btn-send').prop('disabled', false);
                $('#walletTopUp .close-modal').removeClass('d-none');

                $('#walletTopUp .modal-footer').removeClass('d-none');
                $('.stk-timer-container').addClass('d-none').siblings().removeClass('d-none');
            }

            $(".stk-timer").text(timeleft + " s");
                timeleft -= 1;
               
            }, 1000);
    })

    // converting figures to kenyan currency
    $('body').on('click','.accountsSelector', function(){
        $(this).addClass(active).siblings().removeClass('active')
        alert("clicked")
    })

    // $('.loginPageOnly').next('main').addClass('d-none');
    $('body .loginPageOnly').next('main').addClass('d-none');
    $('body').on('click','.close-alert', function(){
        $(this).parent().addClass('d-none');
    });

    //creating abrevitions
    var theName=$('.profile-abriv-jay').text()
    function initialName(words) {
        
        
        return words
            .replace(/\b(\w)\w+/g, '$1.')
            .replace(/\s/g, '')
            .replace(/\.$/, '')
            
    }
   
    
   
    


    //$('.bg-random').addClass("bgrandom"+randomNum)
    $('body .bg-random').each(function(index) {

        const randomNum=Math.floor(Math.random() * 10) + 1
        $(this).addClass("bgrandom"+randomNum)
    });

    
    

    

});


$('body').on('click','.nav-item .nav-link',function(){
    $(this).addClass('active').parent().siblings().children().removeClass('active')
 })
 $('body').on('click','.select-tbl-filter .btn',function(){
     $(this).addClass('active').siblings().removeClass('active')
 })

const currentYear = new Date().getFullYear();
$('.this-year').text(currentYear);
// $('.loginPageOnly').next('main').addClass('d-none');
$('body .loginPageOnly').next('main').addClass('d-none');

window.onhashchange = function() {
    $('.modal-backdrop').remove();

    $('body').attr('style', function(i, style)
    {
        return style && style.replace(/overflow[^;]+;?/g, '');
    });

    $('body').attr('style', function(i, style)
    {
        return style && style.replace(/padding-right[^;]+;?/g, '');
    });
   }

   $(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        // $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        $('.selected-date').text(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'))
    }

   

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});

$(document).ready(function() {

    // customizing tawk

    


   
    
    
    $('.selectpicker').selectpicker();
    $('.selectpicker').selectpicker('render')
});