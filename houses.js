'use-strict'





function renderAPIHouses(data){

    clearUI()

    const navHousesSeperator = document.createElement('p')
    navHousesSeperator.textContent = '/'
    navHousesSeperator.setAttribute('id', 'navHousesSeperator')
    navDiv.append(navHousesSeperator)

    

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

    const housesMainDiv = document.createElement('div')
    housesMainDiv.setAttribute('class', 'housesMainDiv')
    resultsContainer.append(housesMainDiv)

    for(let i = 0; i < housesArr.length; i++ ){

        let printHouses = document.createElement('button')
        printHouses.setAttribute('class', 'btnHouses')   
        printHouses.textContent = housesArr[i]['name']
        printHouses.setAttribute('id',`housesArr${i}`)
        housesMainDiv.append(printHouses) 
        document.querySelector(`#housesArr${i}`).style.animation = `${i/4}s ease 0s normal forwards 1 fadein`;
    }


    for(let i = 0; i < housesArr.length; i++ ){
        document.querySelector(`#housesArr${i}`).addEventListener('click', function(){


            setTimeout(function(){
                clearUI()

                const printName = document.createElement('h3')
                printName.setAttribute('class', 'housesInfo')
                printName.textContent = 'House: ' +   `${housesArr[i].name}`
                resultsContainer.append(printName)
        
                const printHouseColours = document.createElement('p')
                printHouseColours.setAttribute('class', 'housesInfo')
                printHouseColours.textContent = 'House Colours: ' +   `${housesArr[i].houseColours}`
                resultsContainer.append(printHouseColours)
        
                const printFounder = document.createElement('p')
                printFounder.setAttribute('class', 'housesInfo')
                printFounder.textContent = 'Founder: ' +   `${housesArr[i].founder}`
                resultsContainer.append(printFounder)
        
                const printElement = document.createElement('p')
                printElement.setAttribute('class', 'housesInfo')
                printElement.textContent = 'Element: ' +   `${housesArr[i].element}`
                resultsContainer.append(printElement)
        
                const printGhost = document.createElement('p')
                printGhost.setAttribute('class', 'housesInfo')
                printGhost.textContent = 'Ghost: ' +   `${housesArr[i].ghost}`
                resultsContainer.append(printGhost)
        
                const printCommonRoom = document.createElement('p')
                printCommonRoom.setAttribute('class', 'housesInfo')
                printCommonRoom.textContent = 'Common Room: ' +   `${housesArr[i].commonRoom}`
                resultsContainer.append(printCommonRoom)
        



            },100)
       
   

        })
    }
    
}