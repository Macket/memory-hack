import requests

url = 'https://pamyat-naroda.ru/heroes/?adv_search=y&last_name={}first_name={}&middle_name={}&date_birth=&group=all&types=pamyat_commander:nagrady_nagrad_doc:nagrady_uchet_kartoteka:nagrady_ubilein_kartoteka:pamyat_voenkomat:potery_vpp:pamyat_zsp_parts:kld_upk:kld_vmf:potery_doneseniya_o_poteryah:potery_gospitali:potery_utochenie_poter:potery_spiski_zahoroneniy:potery_voennoplen:potery_iskluchenie_iz_spiskov&page=1'

response = requests.get(url.format('Макеев'))

