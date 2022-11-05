//Mettre le code JavaScript lié à la page photographer.html

let dataPhotographer = "data/photographers.json";
let test = fetch(dataPhotographer)
.then(response => response.json())
.then(data => {
   JSON.stringify(data.photographers)

   //récupération de l'url courante.
   let recupUrl = window.location.href 
   let url = new URL(recupUrl);
   //Récupération de l'id dans l'url
   let id = url.searchParams.get("id");
   
   //FILTRE DES PHOTOGRAPHE PAR RAPPORT A L'ID
   const photographersData = data.photographers
   const PhotographerData = photographersData.filter(infoPhotographe => infoPhotographe.id == id)
   //UTILISIATION DE LA FACTORY.
   const photograph_header = document.querySelector('.photograph-header')
   const photographerModel  = photographerFactory(PhotographerData[0]);
   const userCardDOM = photographerModel.getUserCardDOM();
   photograph_header.appendChild(userCardDOM);
   // FILTRES DES MEDIA PAR RAPPORT A L'ID
   const PhotographersMedia = data.media
   const photographerMedia = PhotographersMedia.filter(imgAndVideos => imgAndVideos.photographerId == id )
   console.log(PhotographerData);
   const main = document.getElementById('main')
   const section = document.createElement('section')
   section.classList.add('articleContainer')
   main.appendChild(section);

   let totaleLikes = 0
   photographerMedia.forEach(element => {
      const nom = PhotographerData[0].name.split(" ")
      let photo = ""
      if(element.video == undefined){
         photo = document.createElement('img')
         photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.image}`)
        

      }
      else{
         photo = document.createElement('video')
         photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.video}`)
         console.log("par la 2");

      }
   
      section.appendChild(photo)
      photo.classList.add('photoOfPortfolio')

      const paragraphe = document.createElement('p')
      paragraphe.textContent = element.title
      section.appendChild(paragraphe)

      const like = document.createElement('p')
      like.textContent = element.likes + "font"
      section.appendChild(like)
      const article = document.createElement('article')


      const containerPhoto = document.createElement('div')
      const containerdescription = document.createElement('div')
      containerdescription.classList.add('containerDescription')

      section.appendChild(containerPhoto)
      section.appendChild(containerdescription)

      containerPhoto.appendChild(photo)
      containerdescription.appendChild(paragraphe)
      containerdescription.appendChild(like)
      section.appendChild(article)
      article.appendChild(containerPhoto)
      article.appendChild(containerdescription)

      totaleLikes+= element.likes

   })
      
      const encart = document.createElement('span')
      encart.textContent = totaleLikes
      section.appendChild(encart)
      encart.style.color = "red"


      

      let LikesTrie = photographerMedia.sort((a,b)=>(a.likes > b.likes ? 1 : -1))
      console.log(LikesTrie);

      let dateTrie = photographerMedia.sort((a,b)=> {
         return new Date(a.date) - new Date (b.date)
      })

      let titreTrie = photographerMedia.sort((a,b)=>{
         (a.title > b.title ? 1 : -1)
      })

      //Filtre 
      const listeFiltre = document.createElement('select')
      listeFiltre.setAttribute('id', "selectFiltre")
      photograph_header.appendChild(listeFiltre)
      const filtrePopularite = document.createElement('option')
      const filtretitre = document.createElement('option')
      const filtredate = document.createElement('option')
      listeFiltre.appendChild(filtrePopularite)
      filtrePopularite.textContent = "Popularité"
      filtrePopularite.value = "popularite"
      filtredate.textContent = "Date"
      filtredate.value = "date"
      filtretitre.textContent = "Titre"
      filtretitre.value = "titre"
      listeFiltre.appendChild(filtretitre)
      listeFiltre.appendChild(filtredate)

      let filtrePopulaireValue = filtrePopularite.value

      

      listeFiltre.addEventListener("change",function(){
         d = document.getElementById("selectFiltre").value;
         console.log(d);
         section.innerHTML = ""

         if (d == "date"){
            console.log(dateTrie);
            dateTrie.forEach(element => {
               const nom = PhotographerData[0].name.split(" ")
               let photo = ""
               if(element.video == undefined){
                  photo = document.createElement('img')
                  photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.image}`)
                 
         
               }
               else{
                  photo = document.createElement('video')
                  photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.video}`)
                  console.log("par la 2");
         
               }
            
               section.appendChild(photo)
               photo.classList.add('photoOfPortfolio')
         
               const paragraphe = document.createElement('p')
               paragraphe.textContent = element.title
               section.appendChild(paragraphe)
         
               const like = document.createElement('p')
               like.textContent = element.likes
               section.appendChild(like)
               const article = document.createElement('article')
         
         
               const containerPhoto = document.createElement('div')
               const containerdescription = document.createElement('div')
               containerdescription.classList.add('containerDescription')
         
               section.appendChild(containerPhoto)
               section.appendChild(containerdescription)
         
               containerPhoto.appendChild(photo)
               containerdescription.appendChild(paragraphe)
               containerdescription.appendChild(like)
               section.appendChild(article)
               article.appendChild(containerPhoto)
               article.appendChild(containerdescription)
         
               totaleLikes+= element.likes
         
            })
         } 
         else if (d == "titre"){
            console.log(titreTrie);
            titreTrie.forEach(element => {
               const nom = PhotographerData[0].name.split(" ")
               let photo = ""
               if(element.video == undefined){
                  photo = document.createElement('img')
                  photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.image}`)
                 
         
               }
               else{
                  photo = document.createElement('video')
                  photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.video}`)
                  console.log("par la 2");
         
               }
            
               section.appendChild(photo)
               photo.classList.add('photoOfPortfolio')
         
               const paragraphe = document.createElement('p')
               paragraphe.textContent = element.title
               section.appendChild(paragraphe)
         
               const like = document.createElement('p')
               like.textContent = element.likes
               section.appendChild(like)
               const article = document.createElement('article')
         
         
               const containerPhoto = document.createElement('div')
               const containerdescription = document.createElement('div')
               containerdescription.classList.add('containerDescription')
         
               section.appendChild(containerPhoto)
               section.appendChild(containerdescription)
         
               containerPhoto.appendChild(photo)
               containerdescription.appendChild(paragraphe)
               containerdescription.appendChild(like)
               section.appendChild(article)
               article.appendChild(containerPhoto)
               article.appendChild(containerdescription)
         
               totaleLikes+= element.likes
         
            })
         } 
         else if (d == "populatrite"){
            console.log(LikesTrie);
            LikesTrie.forEach(element => {
               const nom = PhotographerData[0].name.split(" ")
               let photo = ""
               if(element.video == undefined){
                  photo = document.createElement('img')
                  photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.image}`)
                 
         
               }
               else{
                  photo = document.createElement('video')
                  photo.setAttribute('src',`assets/photographers/${nom[0]}/${element.video}`)
                  console.log("par la 2");
         
               }
            
               section.appendChild(photo)
               photo.classList.add('photoOfPortfolio')
         
               const paragraphe = document.createElement('p')
               paragraphe.textContent = element.title
               section.appendChild(paragraphe)
         
               const like = document.createElement('p')
               like.textContent = element.likes
               section.appendChild(like)
               const article = document.createElement('article')
         
         
               const containerPhoto = document.createElement('div')
               const containerdescription = document.createElement('div')
               containerdescription.classList.add('containerDescription')
         
               section.appendChild(containerPhoto)
               section.appendChild(containerdescription)
         
               containerPhoto.appendChild(photo)
               containerdescription.appendChild(paragraphe)
               containerdescription.appendChild(like)
               section.appendChild(article)
               article.appendChild(containerPhoto)
               article.appendChild(containerdescription)
         
               totaleLikes+= element.likes
         
            })
         } 

         
      })
      

      
})



