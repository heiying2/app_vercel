export async function getMarketingAdvice(keyword) {
  const res = await fetch(`/app/marketing?keyword=${keyword}`);
  return await res.json();
}

export async function getFinanceAdvice(cost, price) {
  const res = await fetch(`/app/finance?cost=${cost}&price=${price}`);
  return await res.json();
}

export async function getProcurementAdvice(stock, forecast) {
  const res = await fetch(`/app/procurement?stock=${stock}&forecast=${forecast}`);
  return await res.json();
}

