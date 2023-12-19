import scrapy

class CyberSurge(scrapy.Spider):
    name = "CyberCrawler"
    start_urls = ["https://en.wikipedia.org/wiki/Main_Page"]
    def parse(self, response):
        title = response.css(".dyk-img+ ul li::text").extract()
        yield {"titletext": title}