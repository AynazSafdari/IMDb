async function Dfeatured() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let dfeatured = res.fslider.map(function(elem){
            return`
             <div class="carousel-item active h-100">
                                    <div class="gl">
                                      <div>
                    <div class="inside">
                      <div class="photo">
                        <a href="#"
                          ><img src="${elem.firstimg}" alt="${elem.firstalt}"
                        /></a>
                        
                      </div>
                      <div class="text">
                        <a href="#" class="firstline">${elem.firsttitle}</a>
                        <a href="#" class="secondline">${elem.firstdescription}</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="inside">
                      <div class="photo">
                        <a href="#"
                          ><img src="${elem.secondimg}" alt="${elem.secondalt}"/></a>
                        
                      </div>
                      <div class="text">
                        <a href="#" class="firstline">${elem.secondtitle}</a>
                        <a href="#" class="secondline">${elem.seconddescription}</a>
                      </div>
                    </div>
                  </div>
                                    </div>
                  
                                  </div>
            `
        });
        document.querySelector("#fs").insertAdjacentHTML("afterbegin",dfeatured.join(""))
    } catch (error) {
        console.log(error.message);
    }
    
}
export default Dfeatured