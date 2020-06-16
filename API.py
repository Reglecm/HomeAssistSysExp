from requests import post, get
import json

token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkOGU5YTIxMDdjODQ0MzI4YjcwMmU3YjliMDQzYmI3OCIsImlhdCI6MTU5MjA2MzYwMSwiZXhwIjoxOTA3NDIzNjAxfQ.zE5hGZcOdvxelz0PZgm46ALM9Gm__PfLww7_zhHv4bo"
baseurl = "http://192.168.2.151:8123/api/"


def HA_GET(apiURL):

    url = baseurl + apiURL
    headers = {
        "Authorization": "Bearer " + token,
        "content-type": "application/json", }
    response = get(url, headers=headers)
    print(response.text)
    return json.dumps(json.loads(response.text))


def HA_POST(apiURL, data):

    url = baseurl + apiURL
    headers = {
        "Authorization": "Bearer " + token,
        "content-type": "application/json"
    }
    response = post(url, headers=headers, data=json.dumps(data))
    print(response.text)
    return json.dumps(json.loads(response.text))