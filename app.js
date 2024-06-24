document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '773e2985fc9945d48c0b45abe175daa2';
    const url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-22&to=2024-06-22&sortBy=popularity&apiKey=${apiKey}`;
     
     https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=${apiKey}
    fetch(url)
        .then(response => response.json())
        .then(data => displayArticles(data.articles))
        .catch(error => console.error('Error fetching the news articles:', error));
});

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = '';

    articles.forEach(article => {
      
      
        articlesContainer.innerHTML +=` <div class="d-flex">
<div class="card col-lg-3 col-md-4 col-sm-6 col-12 m-3" style="width: 18rem;">
    <img src="${article.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${article.title}</h5>
      <p class="card-text">${article.description}</p>
      <a href="${article.url}" class="btn btn-primary">Read More</a>
    </div>
  </div>
</div>`;


    });
}
