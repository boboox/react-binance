const mainMarketList = ['BNB', 'BTC', 'ETH', 'USDT']

export const splitMarketPair = (marketPair) => {
    if (!marketPair) {
        return []
    }
    const mainMarketList = ['BNB', 'BTC', 'ETH', 'USDT']
    let matchedMarket = mainMarketList.find((m) => marketPair.indexOf(m) > -1);
    if (!matchedMarket) {
        return [marketPair]
    }
    let pos = marketPair.indexOf(matchedMarket);
    if (pos > 0) {
        return [marketPair.slice(0, pos), matchedMarket]
    } else {
        return [matchedMarket, marketPair.slice(matchedMarket.length)]
    }
}
