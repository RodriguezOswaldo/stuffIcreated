document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid')
    let width = 10
    let bombAmount = 20
    let squares  = []
    // create Board
    function createBoard(){
        const bombsArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('free')
        //concating the two arrays together
        const gameArray = emptyArray.concat(bombsArray)
        const shuffledArray = gameArray.sort(() => Math.random() -0.5)
        console.log(shuffledArray)
        for(let i = 0; i<width*width; i++){
            const square = document.createElement('div')
            square.setAttribute('id', i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)

            //normal click
            square.addEventListener('click' , function(e){
                click(square)
                
            })
        }

        for(let i = 0; i< squares.length; i++){
            let total = 0;
            const isLeftEdge = (i%width ===0);
            const isRightEde = (i% width=== width -1);
            
            if (squares[i].classList.contains('free')){
                if(i >0 && !isLeftEdge && squares[i-1].classList.contains('bomb')) total++
                if(i >9 && !isRightEde && squares[i+1 - width].classList.contains('bomb')) total++
                if(i>10&& squares[i - width].classList.contains('bomb')) total++
                if (i>11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb ') ) total++
                if(i < 98 && !isRightEde && squares[i+1].classList.contains('bomb')) total++
                if (i < 90 && !isLeftEdge && squares[i -1  + width].classList.contains('bomb')) total++
                if(i < 88 && !isRightEde && squares[i + 1 + width].classList.contains('bomb'))total++
                if(i<89 && squares[i + width].classList.contains('bomb')) total++
                squares[i].setAttribute('data', total)
                console.log(squares[i])
            }
        }
    }
    createBoard()
    function click(square){
        if(square.classList.contains('bomb')){
            console.log('game Over')
        }else{
            let total = square.getAttribute('data')
            if (total !=0){
                square.classList.add('checked')
                square.innerHTML = total;
                return
            }
            square.classList
        }

    }
})
//https://www.youtube.com/watch?v=W0No1JDc6vE