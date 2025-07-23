async function Explore() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let explore = res.topbox.map(function(elem){
            return`
            <div>
                  <div class="nummber">${elem.number}</div>
                  <div class="line"></div>
                  <span>
                    <svg width="45px" height="53px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#363636">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M5 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 2 7.6 2 9 2h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 3.9 19 4.6 19 6v13.208c0 1.056 0 1.583-.217 1.856a1 1 0 0 1-.778.378c-.349.002-.764-.324-1.593-.976L12 17l-4.411 3.466c-.83.652-1.245.978-1.594.976a1 1 0 0 1-.778-.378C5 20.791 5 20.264 5 19.208V6z"
                            fill="#363636"></path>
                        </g>
                      </svg>
                      <svg class="plus" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        </g>
                      </svg>
                  </span>
                  <a href="#">
                    <div class="firstline">${elem.name}</div>
                    <div class="secondline">${elem.price}</div>
                  </a>
                </div>
              
            `
        });
        document.querySelector(".in").insertAdjacentHTML("afterbegin",explore.join(""))
    } catch (error) {
        console.log(error.message);
    }
    
    
}
export default Explore