function photographerFactory(data) {
    /*const { name, portrait, city, price, tagline} = data.photographers;*/
    const name = data.name
    const portrait = data.portrait
    const city = data.city 
    const price = data.price
    const tagline = data.tagline
    

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        
        const country = document.createElement('span')
        country.setAttribute('src',city)
        const about = document.createElement('p')
        about.innerHTML = tagline
        const priceDay = document.createElement('div')
        priceDay.innerHTML = price + "€/jour"
        article.appendChild(country)
        article.appendChild(tagline)
        article.appendChild(price)
        return (article);
    }
    return {getUserCardDOM}
}

