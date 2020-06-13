from requests import get

url = "http://192.168.2.151:8123/api/"
headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkOGU5YTIxMDdjODQ0MzI4YjcwMmU3YjliMDQzYmI3OCIsImlhdCI6MTU5MjA2MzYwMSwiZXhwIjoxOTA3NDIzNjAxfQ.zE5hGZcOdvxelz0PZgm46ALM9Gm__PfLww7_zhHv4bo",
    "content-type": "application/json",
}

response = get(url, headers=headers)
print(response.text)