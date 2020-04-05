import requests
from bs4 import BeautifulSoup

url = 'https://obd-memorial.ru/html/search.htm?f={}&n={}&s={}&y=&r='


def search_hero(last_name, first_name='', middle_name=''):
    print(last_name,first_name,middle_name)
    response = requests.get(url.format(last_name, first_name, middle_name))
    tree = BeautifulSoup(response.text, 'html.parser')
    results = tree.findAll(attrs={'class': "row search-result"})

    heroes = {}
    for result in results:
        try:
            idx = result['id']
        except:
            idx = None
        try:
            name = result.find("div", {'class': 'search-result__col-name'}).find('span').text
        except:
            name = ''
        try:
            date_birth = result.find("div", {'class': 'search-result__col-date-birth'}).find('span').text
        except:
            date_birth = ''
        try:
            date_out = result.find("div", {'class': 'search-result__col-date-out'}).find('span').text
        except:
            date_out = ''
        try:
            place = result.find("div", {'class': 'search-result__col-place'}).find('span').text
        except:
            place = ''

        if idx:
            heroes[idx] = {'name': name, 'date_birth': date_birth, 'date_out': date_out, 'place': place}

    return heroes
