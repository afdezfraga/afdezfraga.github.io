from scrapy.item import Field
from scrapy.item import Item
from scrapy.spiders import Spider
from scrapy.selector import Selector
from scrapy.loader import ItemLoader

class Repo(Item):
    author = Field()
    name = Field()
    Top = Field()


class GitHubSpider(Spider):
    name = "GitHubSpider"
    start_urls = ['https://github.com/trending?since=monthly']
    def parse(self, response):
        sel = Selector(response)
        repositorios = sel.xpath('//article[@class="Box-row"]/h1/a/@href')
        for i, elem in enumerate(repositorios):
            [author, name] = elem.get().split("/")[-2:]
            item = ItemLoader(Repo(), elem)
            item.add_value('author', author)
            item.add_value('name', name)
            item.add_value('Top', str(i + 1))
            yield item.load_item()

# scrapy crawl GitHubSpider -o github.csv -t csv