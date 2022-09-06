const loadNewsDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}

const displayNewsDetails = data => {
    console.log(data)
}

loadNewsDetails()