const loadNewsDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
    
}
console.log(displayNewsDetails);
const displayNewsDetails = data => {
    const newsCard = document.getElementById('news-card');

    data.forEach(news => {
        const cardBody = document.createElement('div');
        cardBody.classList.add('card');
        cardBody.classList.add('mb-3');
        cardBody.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card titless</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between">
                            <div class="d-inline">
                                <img src=".." alt="image">
                                <p class="d-inline">Aurther Name</p>
                            </div>
                            <div class="d-inline">
                                <p class="d-inline"><i class="fa-regular fa-eye"></i> Views</p>
                            </div>
                            <div class="d-inline">
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

loadNewsDetails()