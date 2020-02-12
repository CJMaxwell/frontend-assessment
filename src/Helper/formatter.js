export const  currencyFormatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    currencyDisplay:'symbol',
    minimumFractionDigits: 2
  })

  export const dateFormatter = new Intl.DateTimeFormat('en-NG')
  