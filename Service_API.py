from API import HA_GET, HA_POST
import json


class API_Service:

    def GET_HA_Status():
        return HA_GET('')

    def GET_API_States():
        return HA_GET('states')

    def GET_API_Service():
        return HA_GET('services')

    def GET_ObjectbyId(objectID):
        return HA_GET('states/' + objectID)

    def POST_LightToggle(lampID='light.led_esp8266'):
        url = 'services/light/toggle'
        data = {'entity_id': lampID}
        return HA_POST(url, data)

    def POST_LightOn(lampID='light.led_esp8266', brightness=255, color='red'):
        url = 'services/light/turn_on'
        data = {
            'entity_id': lampID,
            'brightness': brightness,
            'color_name': color
        }
        return HA_POST(url, data)

    def POST_Notification(message, title):
        notif = {
            'message': message,
            'title': title
        }
        url = 'services/persistent_notification/create'
        return HA_POST(url, notif)
