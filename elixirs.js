'use-strict'



function renderAPIElixirs(data){
    clearUI()

    const navElixirSeperator = document.createElement('p')
    navElixirSeperator.textContent = '/'
    navElixirSeperator.setAttribute('id', 'navElixirSeperator')
    navDiv.append(navElixirSeperator)

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


    const elixirMainDiv = document.createElement('div')
    elixirMainDiv.setAttribute('class', 'elixirMainDiv')
    resultsContainer.append(elixirMainDiv)

    for(let i = 0; i < elixirsArr.length; i++ ){

        let printElixirs = document.createElement('button')
        printElixirs.setAttribute('class', 'btnElixirs')  
       
        
        printElixirs.textContent = elixirsArr[i]['name']
        printElixirs.setAttribute('id',`elixirsArr${i}`)
        elixirMainDiv.append(printElixirs) 

        document.querySelector(`#elixirsArr${i}`).style.animation = `1s ease 0s normal forwards 1 fadein`;
 
    }


    for(let i = 0; i < elixirsArr.length; i++ ){
        document.querySelector(`#elixirsArr${i}`).addEventListener('click', function(){
        


        setTimeout(function(){
            clearUI()
            const elixirInfoDiv = document.createElement('div')
            elixirInfoDiv.setAttribute('class', 'elixirInfoDiv')
            resultsContainer.append(elixirInfoDiv)


            const printName = document.createElement('h3')
            printName.textContent = 'Name: ' +   `${elixirsArr[i].name}`
            printName.setAttribute('class', 'elixirInfo')
            elixirInfoDiv.append(printName)

            const printCharacteristics = document.createElement('p')
            printCharacteristics.textContent = 'Characteristics: ' +   `${elixirsArr[i].characteristics}`
            printCharacteristics.setAttribute('class', 'elixirInfo')
            elixirInfoDiv.append(printCharacteristics)

            const printDifficulty = document.createElement('p')
            printDifficulty.textContent = 'Difficulty: ' +   `${elixirsArr[i].difficulty}`
            printDifficulty.setAttribute('class', 'elixirInfo')
            elixirInfoDiv.append(printDifficulty)

            const printEffect = document.createElement('p')
            printEffect.textContent = 'Effect: ' +   `${elixirsArr[i].effect}`
            printEffect.setAttribute('class', 'elixirInfo')
            elixirInfoDiv.append(printEffect)


        },100)

        
        })
    }
    
}