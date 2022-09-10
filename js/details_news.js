const allNews = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
    
}

const defaultCategories = async (category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
   defaultCategory(data.data)
}

const displayNewsDetails = data => {
    const newsCard = document.getElementById('news-card');
    newsCard.textContent = '';
    data.forEach(news => {
        const cardBody = document.createElement('div');
        cardBody.classList.add('card');
        cardBody.classList.add('mb-3');
        cardBody.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details.slice(0, 250)}...</p>
                        <div class="d-flex justify-content-between">
                            <div class="d-inline">
                                <img src="${news.author.img}" class="rounded-circle" height="30px" width="30px" alt="image">
                                <b><p class="d-inline">${news.author.name}</p></b>
                            </div>
                            <div class="d-inline">
                                <p class="d-inline"><i class="fa-regular fa-eye"></i> ${news.total_view}</p>
                            </div>
                            <div class="d-inline">
                                <p class=" d-inline">${news.rating.number} </p>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="d-inline">
                                <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        newsCard.appendChild(cardBody);
    });
}

console.log(defaultCategories('08', "All News"));