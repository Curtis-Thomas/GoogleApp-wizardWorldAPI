'use-strict'

const resultsContainer = document.querySelector('#main')
const clearUI = function(){
    document.querySelector('#main').textContent= ''
  
}

const printHome = function(){
    clearUI()

   
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('id', 'mainDiv')
    resultsContainer.append(mainDiv)



    const btnElixirs = document.createElement('button')
    btnElixirs.setAttribute('id', 'btnElixirs')
    btnElixirs.setAttribute('class', 'btnMain')
    btnElixirs.textContent = 'Elixirs'
    mainDiv.append (btnElixirs)

    document.querySelector('#btnElixirs').addEventListener('click', function(){
        url = 'https://wizard-world-api.herokuapp.com/Elixirs'
        function fetchAPIElixirs(){
     
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data)) 
                .then((data)=> renderAPIElixirs(data) )       
        }
        fetchAPIElixirs()
    
    })

    const btnHouses = document.createElement('button')
    btnHouses.setAttribute('id', 'btnHouses')
    btnHouses.setAttribute('class', 'btnMain')
    btnHouses.textContent = 'Houses'
    mainDiv.append(btnHouses)

    document.querySelector('#btnHouses').addEventListener('click', function(){
        url = 'https://wizard-world-api.herokuapp.com/Houses'
        function fetchAPIHouses(){
     
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data)) 
                .then((data)=> renderAPIHouses(data) )       
        }
        fetchAPIHouses()
    
    })



    const btnSpells = document.createElement('button')
    btnSpells.setAttribute('id', 'btnSpells')
    btnSpells.setAttribute('class', 'btnMain')
    btnSpells.textContent = 'Spells'
    mainDiv.append(btnSpells)

    document.querySelector('#btnSpells').addEventListener('click', function(){
        url = 'https://wizard-world-api.herokuapp.com/Spells'
        function fetchAPISpells(){
     
            fetch(url)
                .then((response) => response.json())
                // .then((data)=> console.log(data)) 
                .then((data)=> renderAPISpells(data) )       
        }
        fetchAPISpells()
    
    })

    


}

document.querySelector('#h1').addEventListener('click',function(){
    clearNav()
    printHome()
    printNav()
})

printHome()

const navContainer = document.querySelector('#mainNav')
const clearNav = function(){
    document.querySelector('#mainNav').textContent = ''
}

const printNav = function(){
    clearNav()

    const navDiv = document.createElement('div')
    navDiv.setAttribute('id', 'navDiv')
    navContainer.append(navDiv)

    const navHome = document.createElement('button')
    navHome.setAttribute('id', 'navHome')
    navHome.textContent = 'Home'
    navDiv.append(navHome)

    document.querySelector('#navHome').addEventListener('click', function(){
        clearNav()
        printHome()
        printNav()
    })

}

printNav()
