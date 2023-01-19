const currencyFormat = new Intl.NumberFormat('en-IN', { currency: 'EUR', style:'currency'})

export const currencyFormatter = (value: number) => {
    return currencyFormat.format(value)
}