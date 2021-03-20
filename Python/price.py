#prices[10,20,30] prints 60
prices = 0

for items in [10,20,30]:
    prices += items

print(prices)

#below is the second methods
price_items = [10,20,30]
total = 0

for price in price_items:
    total += price

print(f'Total: {total}')