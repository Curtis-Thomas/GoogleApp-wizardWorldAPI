'use-strict'



function renderAPISpells(data){
    clearUI()

    const navSpellsSeperator = document.createElement('p')
    navSpellsSeperator.textContent = '/'
    navSpellsSeperator.setAttribute('id', 'navSpellsSeperator')
    navDiv.append(navSpellsSeperator)
  

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

    const spellsMainDiv = document.createElement('div')
    spellsMainDiv.setAttribute('class', 'spellsMainDiv')
    resultsContainer.append(spellsMainDiv)

    for(let i = 0; i < spellsArr.length; i++ ){

        let printSpells = document.createElement('button')
        printSpells.setAttribute('class', 'btnSpells')   
        printSpells.textContent = spellsArr[i]['name']
        printSpells.setAttribute('id',`spellsArr${i}`)
        spellsMainDiv.append(printSpells) 

        document.querySelector(`#spellsArr${i}`).style.animation = `1s ease 0s normal forwards 1 fadein`;
    }


    for(let i = 0; i < spellsArr.length; i++ ){
        document.querySelector(`#spellsArr${i}`).addEventListener('click', function(){

            setTimeout(function(){
            clearUI()
            const spellsInfoDiv = document.createElement('div')
            spellsInfoDiv.setAttribute('class', 'spellsInfoDiv')
            resultsContainer.append(spellsInfoDiv)

            const printName = document.createElement('h3')
            printName.textContent = 'Spell: ' +   `${spellsArr[i].name}`
            printName.setAttribute('class', 'spellsInfo')
            spellsInfoDiv.append(printName)

            const printIncantation = document.createElement('p')
            printIncantation.textContent = 'Incantation: ' +   `${spellsArr[i].incantation}`
            printIncantation.setAttribute('class', 'spellsInfo')
            spellsInfoDiv.append(printIncantation)
            
            
            if(`${spellsArr[i].incantation}` === 'null'){
                printIncantation.textContent = 'Incantation: N/A'
            }

            const printEffect = document.createElement('p')
            printEffect.textContent = 'Effect: ' +   `${spellsArr[i].effect}`
            printEffect.setAttribute('class', 'spellsInfo')
            spellsInfoDiv.append(printEffect)

            const printType = document.createElement('p')
            printType.textContent = 'Type: ' +   `${spellsArr[i].type}`
            printType.setAttribute('class', 'spellsInfo')
            spellsInfoDiv.append(printType)

            const printLight = document.createElement('p')
            printLight.textContent = 'Light: ' +   `${spellsArr[i].light}`
            printLight.setAttribute('class', 'spellsInfo')
            spellsInfoDiv.append(printLight)

            },100)


   

        })
    }
    
}