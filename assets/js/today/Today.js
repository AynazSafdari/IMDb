async function Today() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let today = res.birthday.map(function(elem){
            return`
              <div class="swiper-slide">
                  <div class="topic"></div>
                  <a href="#">
                    <div class="top">
                      <img src="${elem.img}" alt="${elem.alt}" />
                    </div>
                    <div class="bottom">${elem.name}</div>
                    <div class="middle">
                      <span>${elem.age}</span>
                    </div>
                  </a>
                </div>
              
            `
        });
        document.querySelector("#btd").insertAdjacentHTML("afterbegin",today.join(""))
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
export default Today