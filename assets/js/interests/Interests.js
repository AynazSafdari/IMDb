async function Interests() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let interests = res.pinterests.map(function(elem){
            return`
             <div class="swiper-slide">
                <div class="photo">
                  <a href="#"><img src="${elem.img}" alt="${elem.alt}" /></a>
                </div>
                <a href="#">${elem.name}</a>
              </div>
              
            `
        });
        document.querySelector("#pi").insertAdjacentHTML("afterbegin",interests.join(""))
    } catch (error) {
        console.log(error.message);
    }
   
   
    
}
export default Interests