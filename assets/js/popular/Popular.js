async function Popular() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let popular = res.celebrities.map(function(elem){
            return`
             <div class="swiper-slide">
                  <div class="topic">${elem.title}</div>
                  <a href="#">
                    <div class="top">
                      <img src="${elem.img}" alt="${elem.alt}" />
                    </div>
                    <div class="middle">${elem.no1}
                      <span>(
                        <button></button>
                        ${elem.no2})
                      </span>
                    </div>
                    <ddiv class="bottom">${elem.name}</ddiv>
                  </a>
                </div>
              
            `
        });
        document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",popular.join(""))
    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
}
export default Popular