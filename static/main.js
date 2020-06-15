$(document).ready(function () {

    GetStatus();

    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })


    $('.statusColor').on('click', (state) => {
        GetStatus();
    })

    $('#iLogo').on('click', (state) => {
        LightToggle();
    })

    $('#LightOn').on('click', (state) => {
        LightOn();
    })

    $('#LampId').on('click', (state) => {
        GetLampId();
    })

    
    
})