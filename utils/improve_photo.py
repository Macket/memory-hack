import requests
import base64

IMPROVE_SERVICE_URL = 'https://9may.mail.ru/photo'
IMPROVE_SERVICE_HEADERS = {'origin': 'https://9may.mail.ru'}


def improve_photo(file_path):
    file = open(file_path, "rb")
    response = requests.post(IMPROVE_SERVICE_URL, headers=IMPROVE_SERVICE_HEADERS, files={'image[]': file})
    resp_str = response.content.decode('utf-8')
    improved_image_bytes = base64.b64decode(resp_str[resp_str.index('colorized') + 21:resp_str.index('"bw"') - 2])

    with open(file_path[:-4] + "_improved.jpg", "wb") as f:
        f.write(improved_image_bytes)
