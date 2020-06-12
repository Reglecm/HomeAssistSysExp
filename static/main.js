$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })



$(document).ready(function(){


    $('body').on('click', (state) => {
        
        $('.statusColor').css('background-color',state)
    })

})