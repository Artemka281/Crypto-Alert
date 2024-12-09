// Загружаем данные о популярных криптовалютах с CoinGecko API
fetch('https://api.coingecko.com/api/v3/search/trending')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news-container');
    data.coins.forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.innerHTML = `
        <h3>${item.item.name}</h3>
        <p>Цена: $${item.item.price_btc.toFixed(8)}</p>
      `;
      newsContainer.appendChild(newsItem);
    });
  })
  .catch(error => console.error('Ошибка при загрузке данных:', error));
