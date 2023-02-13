'use-strict'





function renderAPIHouses(data){

    clearUI()

    const navHouses = document.createElement('button')
    navHouses.textContent = 'Houses'
    navHouses.setAttribute('id', 'navHouses')
    navDiv.append(navHouses)


    document.querySelector('#navHouses').addEventListener('click', function(){
        clearNav()
        printNav()
        renderAPIHouses(data)
        
    })

    let housesArr = data

    housesArr.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    for(let i = 0; i < housesArr.length; i++ ){

        let printHouses = document.createElement('button')
        printHouses.setAttribute('class', 'btnHouses')   
        printHouses.textContent = housesArr[i]['name']
        printHouses.setAttribute('id',`housesArr${i}`)
        resultsContainer.append(printHouses) 
    }


    for(let i = 0; i < housesArr.length; i++ ){
        document.querySelector(`#housesArr${i}`).addEventListener('click', function(){
        clearUI()

        const printName = document.createElement('h3')
        printName.textContent = 'House: ' +   `${housesArr[i].name}`
        resultsContainer.append(printName)

        const printHouseColours = document.createElement('p')
        printHouseColours.textContent = 'House Colours: ' +   `${housesArr[i].houseColours}`
        resultsContainer.append(printHouseColours)

        const printFounder = document.createElement('p')
        printFounder.textContent = 'Founder: ' +   `${housesArr[i].founder}`
        resultsContainer.append(printFounder)

        const printElement = document.createElement('p')
        printElement.textContent = 'Element: ' +   `${housesArr[i].element}`
        resultsContainer.append(printElement)

        const printGhost = document.createElement('p')
        printGhost.textContent = 'Ghost: ' +   `${housesArr[i].ghost}`
        resultsContainer.append(printGhost)

        const printCommonRoom = document.createElement('p')
        printCommonRoom.textContent = 'Common Room: ' +   `${housesArr[i].commonRoom}`
        resultsContainer.append(printCommonRoom)

   

        })
    }
    
}