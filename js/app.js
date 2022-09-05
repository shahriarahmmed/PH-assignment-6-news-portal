// Dynamic categories
const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}

const displayCategories = data => {
    
    const newsCategories = document.getElementById('news-categories');
    
    data.forEach(category => {
        const categoriesDiv = document.createElement('div');
        categoriesDiv.classList.add('nav-item');
        categoriesDiv.innerHTML = `
                <a class="nav-link fw-semibold" href="#"> ${category.category_name}</a>
            `;
        newsCategories.appendChild(categoriesDiv);
        console.log(newsCategories);

    });
}

loadCategories()