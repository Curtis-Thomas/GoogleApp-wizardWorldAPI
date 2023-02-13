'use-strict'





function renderAPISpells(data){
    clearUI()

    const navSpells = document.createElement('button')
    navSpells.textContent = 'Spells'
    navSpells.setAttribute('id', 'navSpells')
    navDiv.append(navSpells)


    document.querySelector('#navSpells').addEventListener('click', function(){
        clearNav()
        printNav()
        renderAPISpells(data)
        
    })

    let spellsArr = data

    spellsArr.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    for(let i = 0; i < spellsArr.length; i++ ){

        let printSpells = document.createElement('button')
        printSpells.setAttribute('class', 'btnSpells')   
        printSpells.textContent = spellsArr[i]['name']
        printSpells.setAttribute('id',`spellsArr${i}`)
        resultsContainer.append(printSpells) 
    }


    for(let i = 0; i < spellsArr.length; i++ ){
        document.querySelector(`#spellsArr${i}`).addEventListener('click', function(){
        clearUI()

        const printName = document.createElement('h3')
        printName.textContent = 'Spell: ' +   `${spellsArr[i].name}`
        resultsContainer.append(printName)

        const printIncantation = document.createElement('p')
        printIncantation.textContent = 'Incantation: ' +   `${spellsArr[i].incantation}`
        resultsContainer.append(printIncantation)

        const printEffect = document.createElement('p')
        printEffect.textContent = 'Effect: ' +   `${spellsArr[i].effect}`
        resultsContainer.append(printEffect)

        const printType = document.createElement('p')
        printType.textContent = 'Type: ' +   `${spellsArr[i].type}`
        resultsContainer.append(printType)

        const printLight = document.createElement('p')
        printLight.textContent = 'Light: ' +   `${spellsArr[i].light}`
        resultsContainer.append(printLight)


   

        })
    }
    
}