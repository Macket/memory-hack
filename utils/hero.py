import requests
from bs4 import BeautifulSoup


search_hero_url = 'https://obd-memorial.ru/html/search.htm?f={}&n={}&s={}&y=&r='


def try_get_search_results(last_name, first_name='', middle_name=''):
    response = requests.get(search_hero_url.format(last_name, first_name, middle_name),
                            headers={"authority": "obd-memorial.ru"})
    tree = BeautifulSoup(response.text, 'html.parser')
    results = tree.findAll('div', {'class': "row search-result"})

    return results


def search_hero(last_name, first_name='', middle_name=''):
    for i in range(10):
        results = try_get_search_results(last_name, first_name, middle_name)
        if len(results) > 0:
            break

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


get_hero_url = 'https://obd-memorial.ru/html/info.htm?id={}'


def try_get_hero_params(idx):
    response = requests.get(get_hero_url.format(idx), headers={"authority": "obd-memorial.ru"})
    tree = BeautifulSoup(response.text, 'html.parser')
    params = tree.findAll('div', {'class': 'card_parameter'})

    return params


def get_hero(idx):
    for i in range(10):
        params = try_get_hero_params(idx)
        if len(params) > 0:
            break

    hero = {}
    for param in params:
        title = param.find('span', {'class': 'card_param-title'}).text
        result = param.find('span', {'class': 'card_param-result'}).text
        hero[title] = result

    return hero
