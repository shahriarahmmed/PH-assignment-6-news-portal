// Dynamic categories data fetch 
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
                <a class="nav-link fw-semibold" href="#" id="" onclick="allNews()"> ${category.category_name}</a>
            `;
        newsCategories.appendChild(categoriesDiv);

    });
}

// blogs button click 
function blogs()  {
    document.addEventListener('click', function(){
        window.location.href = 'blogs.html';
    })
}

// news button click
function news()  {
    document.addEventListener('click', function(){
        window.location.href = 'index.html';
        console.log('connect')
    })
}

loadCategories()