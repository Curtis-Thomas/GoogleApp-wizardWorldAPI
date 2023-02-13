'use-strict'





function renderAPIIngredients(data){
    clearUI()

    const navIngredients = document.createElement('button')
    navIngredients.textContent = 'Ingredients'
    navIngredients.setAttribute('id', 'navIngredients')
    navDiv.append(navIngredients)


    document.querySelector('#navIngredients').addEventListener('click', function(){
        clearNav()
        printNav()
        renderAPIIngredients(data)
        
    })

    let ingredientsArr = data

    ingredientsArr.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    for(let i = 0; i < ingredientsArr.length; i++ ){

        let printIngredients = document.createElement('p')
        printIngredients.setAttribute('class', 'btnIngredients')   
        printIngredients.textContent = ingredientsArr[i]['name']
        printIngredients.setAttribute('id',`ingredientsArr${i}`)
        resultsContainer.append(printIngredients) 
    }


    
}