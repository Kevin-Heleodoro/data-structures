# Creating new instance of a hashtable
book = dict()

book["apple"] = 0.67
book["milk"] = 1.49
book["avocado"] = 1.49
# print(book)
# print(book["milk"])

# phone_book = dict()
phone_book = {}
phone_book['kevin'] = 1235
phone_book['emergency'] = 911

# print(phone_book['kevin'])

voted = {}

def check_voter(name):
  if voted.get(name):
    print("kick them out!")
  else:
    voted[name] = True
    print('let them vote!')

# check_voter("tom")
# check_voter("mike")
# check_voter("tom")

cache = {}

def get_page(url):
  if cache.get(url):
    return cache[url]
  else:
    data = get_data_from_server(url)
    cache[url] = data
    return data