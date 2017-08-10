import requests

url = 'https://www.packtpub.com/packt/offers/free-learning'
# Without the user agent header the server responds with a 403!
user_agent = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

response = requests.get(url, headers=user_agent)
html_content = response.text
free_book_title = html_content.split('<h2>')[1].split('</h2>')[0].strip()
print ("The PacktPub free eBook of the day is:")
print ("*" * len(free_book_title))
print (free_book_title)
print ("_" * len(free_book_title))
print ("The ebbok is available at: ", url)
