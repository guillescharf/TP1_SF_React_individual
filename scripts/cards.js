var URL_CARDS_API = "https://rickandmortyapi.com/api/character/";


function createPagination(totalPages, actualPage){
    let HTMLcontent = "";
    if(1 < actualPage){
        HTMLcontent += `<button onclick="getCardsData(${actualPage-1});"> <<== </button>`;
    }
    HTMLcontent += ` Page ${actualPage} of ${totalPages}. `;
    if(actualPage < totalPages){
        HTMLcontent += `<button onclick="getCardsData(${actualPage+1});"> ==>> </button>`;
    }
    document.getElementById('cardsPagination').innerHTML = HTMLcontent;
}

function showCards(completeData, currentPage){
    const parentContainer = document.getElementById('cardsContainer');
    parentContainer.innerHTML = "";
    const data = completeData.results;
    console.log(completeData);
    for(let i = 0; i<data.length; i++){      
        let card = document.createElement('div');
        card.className = "cardDetail";
        card.innerHTML = `<div class="cardPhoto">
                            <img src="${data[i].image}" />
                          </div>
                          <div class="cardName">
                            <h3>${data[i].name}</h3>
                          </div>`;        
        parentContainer.appendChild(card);
    }
    createPagination(completeData.info.pages, currentPage)
}

function getCardsData(page=0){
    const actualPage = (parseInt(page) > 0)? `?page=${page}` : "";
    const URL_CARDS = URL_CARDS_API + actualPage;

    fetch(URL_CARDS) // Infiere en que el pedido es un GET
        .then((response) => response.json())
        .then((data) => showCards(data,page));    
}


getCardsData(1);