function photographerFactory(data) {
    const name = data.name
    const portrait = data.portrait
    const city = data.city 
    const price = data.price
    const tagline = data.tagline
    const id = data.id
    const picture = `assets/photographers/${portrait}`;
    function getUserCardDOM() {

        //Création des balise dans le dom.
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const priceDay = document.createElement('div');
        const about = document.createElement('p');
        const country = document.createElement('p');
        const linkPhotographer = document.createElement('a');

        img.setAttribute("src", picture)
       
        // ajout des informations.
        h2.textContent = name;
        priceDay.innerHTML = price + "€/jour"
        about.innerHTML = tagline
        country.innerHTML = city
        
        
        // 
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(priceDay)
        article.appendChild(about)
        article.appendChild(country)
        article.appendChild(linkPhotographer)
        linkPhotographer.appendChild(img)
        linkPhotographer.appendChild(h2)

        // ajout de class au balise.
        h2.classList.add("PhotographerName")
        priceDay.classList.add("priceDay")
        about.classList.add("tagline")
        country.classList.add("country")

        //Mise en forme 
        linkPhotographer.setAttribute("href",`photographer.html?id=${id}`)
        article.style.display = "flex"
        article.style.flexDirection = "column-reverse"
        linkPhotographer.style.alignItems= "center"
        
                
        return (article);
    }

    return {getUserCardDOM}
}






