import requests
import logging
from fake_useragent import UserAgent
from lxml import etree
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED
import openpyxl

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s:%(message)s')

ua = UserAgent()
# url = 'https://www.zhongnongwang.com/quote/product-htm-page-1.html'
headers = {
    "Accept-Encoding": "gzip",  # 使用gzip压缩传输数据让访问更快
    "User-Agent": ua.random
}
# resp = requests.get(url=url, headers=headers)
# # print(resp.text)

# html = etree.HTML(resp.text)
# items = html.xpath('/html/body/div[10]/table/tr[@align="center"]')
# logging.info(f"该页有多少条信息:{len(items)}")
# for item in items:
#     name = ''.join(item.xpath('./td[1]/a/text()'))
#     price = ''.join(item.xpath('./td[3]/text()'))
#     unit = ''.join(item.xpath('./td[4]/text()'))
#     nums = ''.join(item.xpath('./td[5]/text()'))
#     time = ''.join(item.xpath('./td[6]/text()'))
#     logging.info([name, price, unit, nums, time])

#  单线程测试
# wb = openpyxl.Workbook()
# sheet = wb.active
# sheet.append(['品名', '最新报价', '单位', '报价数', '报价时间'])
# start = datetime.now()
# for page in range(1, 51):
#     url = f'https://www.zhongnongwang.com/quote/product-htm-page-{page}.html'
#     resp = requests.get(url=url, headers=headers)
#     html = etree.HTML(resp.text)
#     items = html.xpath('/html/body/div[10]/table/tr[@align="center"]')
#     logging.info(f"该页有多少条信息:{len(items)}")
#     for item in items:
#         name = ''.join(item.xpath('./td[1]/a/text()'))
#         price = ''.join(item.xpath('./td[3]/text()'))
#         unit = ''.join(item.xpath('./td[4]/text()'))
#         nums = ''.join(item.xpath('./td[5]/text()'))
#         time = ''.join(item.xpath('./td[6]/text()'))
#         sheet.append([name, price, unit, nums, time])
#         logging.info([name, price, unit, nums, time])
#
# wb.save(filename='data1.xlsx')
# delta = (datetime.now() - start).total_seconds()
# logging.info(f"用时:{delta}")

#  多线程测试
wb = openpyxl.Workbook()
sheet = wb.active
sheet.append(['品名', '最新报价', '单位', '报价数', '报价时间'])
start = datetime.now()

def get_data(page):
    url = f'https://www.zhongnongwang.com/quote/product-htm-page-{page}.html'
    resp = requests.get(url=url, headers=headers)
    html = etree.HTML(resp.text)
    items = html.xpath('/html/body/div[10]/table/tr[@align="center"]')
    logging.info(f"该页有多少条信息:{len(items)}")
    for item in items:
        name = ''.join(item.xpath('./td[1]/a/text()'))
        price = ''.join(item.xpath('./td[3]/text()'))
        unit = ''.join(item.xpath('./td[4]/text()'))
        nums = ''.join(item.xpath('./td[5]/text()'))
        time = ''.join(item.xpath('./td[6]/text()'))
        sheet.append([name, price, unit, nums, time])
        logging.info([name, price, unit, nums, time])

def run():
    with ThreadPoolExecutor(max_workers=5) as executor:
        future_tasks = [executor.submit(get_data, i) for i in range(1, 51)]
        wait(future_tasks, return_when=ALL_COMPLETED)
    wb.save(filename='data2.xlsx')
    delta = (datetime.now() - start).total_seconds()
    logging.info(f'共用时:{delta}s')

run()