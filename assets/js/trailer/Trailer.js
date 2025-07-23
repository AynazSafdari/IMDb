async function Trailer() {
    try {
        let data = await fetch("https://aynazsafdari.github.io/jsonimdb/db.json")
        let res = await data.json()
        let trailer = res.trailers.map(function(elem){
            return`
               <div class="carousel-item active">
                    <div>
                      <div class="top">
                        <img src="${elem.img}"alt="${elem.alt}"/>
                      </div>
                      <div class="bottom">
                        <div class="left">
                          <img src="${elem.poster}" alt="${elem.posteralt}"/>
                          <span
                            ><svg
                              width="64px"
                              height="64px"
                              viewBox="-5 0 20 20"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              fill="#272626"
                              stroke="#272626"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <title>bookmark_fill [#1c1c1c1226]</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-305.000000, -2679.000000)"
                                    fill="#1c1c1c"
                                  >
                                    <g
                                      id="icons"
                                      transform="translate(56.000000, 160.000000)"
                                    >
                                      <polygon
                                        id="bookmark_fill-[#1c1c1c1226]"
                                        points="259 2519 259 2539 254 2534 249 2539 249 2519"
                                      ></polygon>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                            <svg
                              class="plus"
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
                                  d="M6 12H18M12 6V18"
                                  stroke="#ffffff"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div class="text">
                          <div class="play">
                            <svg
                              fill="#ffffff"
                              height="50px"
                              width="50px"
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 512 512"
                              xml:space="preserve"
                              stroke="#ffffff"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <g>
                                    <path
                                      d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496 C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"
                                    ></path>
                                  </g>
                                </g>
                                <g>
                                  <g>
                                    <polygon
                                      points="189.776,141.328 189.776,370.992 388.672,256.16 "
                                    ></polygon>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div class="name">
                            <div class="first">
                              <span>${elem.name}</span>
                              <span class="time">${elem.time}</span>
                            </div>
                            <div class="second">${elem.description}</div>
                            <div class="third">
                              <svg
                                width="24px"
                                height="16px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#bcb8b8"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke="#c9c9c9CCCCCC"
                                  stroke-width="0.096"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path
                                    d="M20.9752 12.1852L20.2361 12.0574L20.9752 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93777 20.4771L6.19056 20.5417L6.93777 20.4771ZM6.12561 11.0844L6.87282 11.0198L6.12561 11.0844ZM13.995 5.22142L14.7351 5.34269V5.34269L13.995 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69814 9.67749L6.20855 9.10933H6.20855L6.69814 9.67749ZM8.13688 8.43769L8.62647 9.00585H8.62647L8.13688 8.43769ZM10.5181 4.78374L9.79208 4.59542L10.5181 4.78374ZM10.9938 2.94989L11.7197 3.13821V3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.042 1.39687L13.042 1.39687L12.8126 2.11093ZM9.86195 6.46262L10.5235 6.81599V6.81599L9.86195 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675V1.45675L11.6742 2.13239ZM3.9716 21.4707L3.22439 21.5353L3.9716 21.4707ZM3 10.2342L3.74721 10.1696C3.71261 9.76945 3.36893 9.46758 2.96767 9.4849C2.5664 9.50221 2.25 9.83256 2.25 10.2342H3ZM20.2361 12.0574L19.5306 16.1371L21.0087 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59635V22.75H13.245V21.25ZM7.68498 20.4125L6.87282 11.0198L5.3784 11.149L6.19056 20.5417L7.68498 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0087 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18773 10.2456L8.62647 9.00585L7.64729 7.86954L6.20855 9.10933L7.18773 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79208 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.042 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79208 4.59542C9.65573 5.12107 9.45699 5.62893 9.20042 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6307 3.05921C14.4252 2.26719 13.819 1.64648 13.042 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7548 3.0032 11.8523 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3873 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM4.71881 21.4061L3.74721 10.1696L2.25279 10.2988L3.22439 21.5353L4.71881 21.4061ZM3.75 21.5127V10.2342H2.25V21.5127H3.75ZM3.22439 21.5353C3.2112 21.3828 3.33146 21.25 3.48671 21.25V22.75C4.21268 22.75 4.78122 22.1279 4.71881 21.4061L3.22439 21.5353ZM14.7351 5.34269C14.8596 4.58256 14.8241 3.80477 14.6307 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59635 21.25C8.12244 21.25 7.72601 20.887 7.68498 20.4125L6.19056 20.5417C6.29852 21.7902 7.3427 22.75 8.59635 22.75V21.25ZM8.62647 9.00585C9.30632 8.42 10.0392 7.72267 10.5235 6.81599L9.20042 6.10924C8.85404 6.75767 8.3025 7.30493 7.64729 7.86954L8.62647 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM3.48671 21.25C3.63292 21.25 3.75 21.3684 3.75 21.5127H2.25C2.25 22.1953 2.80289 22.75 3.48671 22.75V21.25ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87282 11.0198C6.8474 10.7258 6.96475 10.4378 7.18773 10.2456L6.20855 9.10933C5.62022 9.61631 5.31149 10.3753 5.3784 11.149L6.87282 11.0198Z"
                                    fill="#c9c9c9"
                                  ></path>
                                </g>
                              </svg>
                              <span>${elem.view}</span>
                              <svg
                                width="14px"
                                height="14px"
                                viewBox="0 0 24 24"
                                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlns:cc="http://creativecommons.org/ns#"
                                xmlns:dc="http://purl.org/dc/elements/1.1/"
                                fill="#000000"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <g transform="translate(0 -1028.4)">
                                    <path
                                      d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                                      fill="#e74051"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                              <span>${elem.like}</span>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
              
            `
        });
        document.querySelector("#trl").insertAdjacentHTML("afterbegin",trailer.join(""))
    } catch (error) {
        console.log(error.message);
    }
   
   
    
}
export default Trailer