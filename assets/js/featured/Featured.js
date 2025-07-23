async function Featured() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let featured = res.feature.map(function(elem){
            return`
             <li>
                <div class="photo">
                  <img src="${elem.img}" alt="${elem.alt}" />
                  <div class="icon">
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <span>list</span>
                  </div>
                </div>
                <div class="text">
                  <a href="#" class="firstline">${elem.title}</a>
                  <a href="#" class="secondline">${elem.description}</a>
                </div>
              </li>
            `
        });
        document.querySelector(".pic").insertAdjacentHTML("afterbegin",featured.join(""))
    } catch (error) {
        console.log(error.message);
    }
    
}
export default Featured