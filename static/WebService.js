const GetStatus = () => {
    $('#HaStatus').css('background-color', 'orange');
    $.ajax({
        type: 'GET',
        url: '/webService',
        data: {
            'do': 'GET_HA_Status'
        },
        dataType: 'JSON',
        success: (result) => {
            var state = result.message;
            console.log(state);
            $('#HaStatus').css('background-color', state.includes('API running') ? 'green' : 'red');
        },
        error: () => {
            console.log("Home Assistant is unreachable");
        }
    })
}

const LightToggle = () => {
    $.ajax({
        type: 'GET',
        url: '/webService',
        data: {
            'do': 'POST_LightToggle'
        },
        dataType: 'JSON',
        success: (result) => {
            console.log(`Lampe ${result[0].state == 'on' ? 'allumée' : 'éteinte'}`); //PUSH NOTIF
        },
        error: () => {
            console.log("erreur webservice");
        }
    })
}


const LightOn = () => {
    $.ajax({
        type: 'POST',
        url: '/webService',
        data: JSON.stringify({
            'do': 'POST_LightOn',
            'params': {
                'lampID': 'light.led_esp8266',
                'brightness': 255,
                'color': 'red'
            }
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: (result) => {
            const emptyArray = Array.isArray(result) && result.length == 0;
            emptyArray ? console.log('Lampe déja allumée') : console.log(`Lampe ${result[0].state == 'on' ? 'allumée' : 'éteinte'}`); //PUSH NOTIF
        },
        error: (result) => {
            console.log("erreur webservice", result);
        }
    })
}

const GetLampId = () => {
    $.ajax({
        type: 'POST',
        url: '/webService',
        data: JSON.stringify({
            'do': 'GET_ObjectbyId',
            'params': {
                'id': 'light.led_esp8266'
            }
        }),
        contentType: 'application/json',
        dataType: 'JSON',
        success: (result) => {
            console.log(result.entity_id, result.state); //PUSH NOTIF
        },
        error: (result) => {
            console.log("erreur webservice", result); //PUSH NOTIF
        }
    })
}

const POST_Notification = (title, message) => {
    $.ajax({
        type: 'POST',
        url: '/webService',
        data: JSON.stringify({
            'do': 'POST_Notification',
            'params': {
                'message': message,
                'title': title
            }
        }),
        contentType: 'application/json',
        dataType: 'JSON',
        success: (result) => {
            console.log(result); //PUSH NOTIF
        },
        error: (result) => {
            console.log("erreur webservice", result); //PUSH NOTIF
        }
    })
}


const GetAllObjects = () => {
    return $.ajax({
        type: 'GET',
        url: '/webService',
        data: {
            'do': 'GET_API_States'
        },
        dataType: 'JSON',
        error: (result) => {
            console.log("erreur webservice", result); //PUSH NOTIF
        }
    })
}


/*
BasicPost = () => {
    $.ajax({
        type: 'POST',
        url: '/webService',
        data: JSON.stringify({
            'do': 'FunctionName',
            'params': {
                'a': 'b'
            }
        }),
        contentType: 'application/json',
        dataType: 'JSON',
        success: (result) => {
            console.log(result); //PUSH NOTIF
        },
        error: (result) => {
            console.log("erreur webservice", result); //PUSH NOTIF
        }
    })
}
*/

/*
BasicGet = () => {
    $.ajax({
        type: 'GET',
        url: '/webService',
        data: {
            'do': 'FunctionName'
        },
        dataType: 'JSON',
        success: (result) => {
            console.log(result); //PUSH NOTIF
        },
        error: (result) => {
            console.log("erreur webservice", result); //PUSH NOTIF
        }
    })
}
*/