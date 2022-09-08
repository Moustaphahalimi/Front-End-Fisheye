//Mettre le code JavaScript lié à la page photographer.html

let dataPhotographer = "data/photographers.json";
let test = fetch(dataPhotographer)
.then(response => response.json())
.then(data => {
   JSON.stringify(data.photographers)
   console.log(data.media);


   //récupération de l'url courante.
   let recupUrl = window.location.href 
   let url = new URL(recupUrl);
   //Récupération de l'id dans l'url
   let id = url.searchParams.get("id");
   
   //FILTRE DES PHOTOGRAPHE PAR RAPPORT A L'ID
   const photographersData = data.photographers
   const PhotographerData = photographersData.filter(infoPhotographe => infoPhotographe.id == id)
   const photograph_header = document.querySelector('.photograph-header')
   const photographerModel  = photographerFactory(PhotographerData[0]);
   const userCardDOM = photographerModel.getUserCardDOM();
   photograph_header.appendChild(userCardDOM);

   // FILTRES DES MEDIA PAR RAPPORT A L'ID
   const PhotographersMedia = data.media
   const photographerMedia = PhotographersMedia.filter(imgAndVideos => imgAndVideos.photographerId == id )
   console.log(photographerMedia);
   const mediaSection = document.querySelector('.Medias')
   const mediaModel  = getMediaUserDom(PhotographersMedia[0]);
   
})


