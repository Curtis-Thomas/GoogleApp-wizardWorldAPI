'use-strict'



function renderAPIElixirs(data){
    clearUI()

    const navElixir = document.createElement('button')
    navElixir.textContent = 'Elixir'
    navElixir.setAttribute('id', 'navElixir')
    navDiv.append(navElixir)


    document.querySelector('#navElixir').addEventListener('click', function(){
        clearNav()
        printNav()
        renderAPIElixirs(data)
        
    })

    let elixirsArr = data

    elixirsArr.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    for(let i = 0; i < elixirsArr.length; i++ ){

        let printElixirs = document.createElement('button')
        printElixirs.setAttribute('class', 'btnElixirs')   
        printElixirs.textContent = elixirsArr[i]['name']
        printElixirs.setAttribute('id',`elixirsArr${i}`)
        resultsContainer.append(printElixirs) 
    }


    for(let i = 0; i < elixirsArr.length; i++ ){
        document.querySelector(`#elixirsArr${i}`).addEventListener('click', function(){
        clearUI()

        const printName = document.createElement('h3')
        printName.textContent = 'Name: ' +   `${elixirsArr[i].name}`
        resultsContainer.append(printName)

        const printCharacteristics = document.createElement('p')
        printCharacteristics.textContent = 'Characteristics: ' +   `${elixirsArr[i].characteristics}`
        resultsContainer.append(printCharacteristics)

        const printDifficulty = document.createElement('p')
        printDifficulty.textContent = 'Difficulty: ' +   `${elixirsArr[i].difficulty}`
        resultsContainer.append(printDifficulty)

        const printEffect = document.createElement('p')
        printEffect.textContent = 'Effect: ' +   `${elixirsArr[i].effect}`
        resultsContainer.append(printEffect)

        // const printIngredients
        // const printInventors

        // const printManufacturer = document.createElement('p')
        // printManufacturer.textContent = 'Manufacturer: ' +   `${elixirsArr[i].manufacturer}`
        // resultsContainer.append(printManufacturer)

        // const printSideEffects = document.createElement('p')
        // printSideEffects.textContent = 'Effetcs: ' +   `${elixirsArr[i].sideEffects}`
        // resultsContainer.append(printSideEffects)

        // const printTime = document.createElement('p')
        // printTime.textContent = 'Time: ' +   `${elixirsArr[i].time}`
        // resultsContainer.append(printTime)

        })
    }
    
}