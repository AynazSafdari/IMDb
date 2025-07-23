async function News() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let news = res.neews.map(function(elem){
            return`
               <li>
                <a href="#">
                  <div class="photo">
                    <img src="${elem.img}" alt="${elem.alt}" />
                  </div>
                  <div class="text">
                    <div class="headline">
                      ${elem.headline}
                    </div>
                    <div class="date">
                      <span>${elem.date}</span>
                      <span class="source">${elem.source}</span>
                    </div>
                  </div>
                </a>
              </li>
              
            `
        });
        document.querySelector("#nws").insertAdjacentHTML("afterbegin",news.join(""))
    } catch (error) {
        console.log(error.message);
    }
    
}
export default News