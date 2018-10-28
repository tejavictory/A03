         //modified by Kancharla, Sai Krishna Teja
         
         const game = (function () {

                const cellElements = [
                document.getElementById("upper-left"),
                document.getElementById("upper-mid"),
                document.getElementById("upper-right"),
                document.getElementById("center-left"),
                document.getElementById("center-mid"),
                document.getElementById("center-right"),
                document.getElementById("lower-left"),
                document.getElementById("lower-mid"),
                document.getElementById("lower-right")
                ];
                var count = 0;
/*                 for (let i = 0; i < cellElements.length; i++) {
                    const headingElement = document.createElement("h5");
                    const textNode = document.createTextNode("-");
                    headingElement.appendChild(textNode);
                    cellElements[i].appendChild(headingElement);
                } */
/*                 console.log("Before:");
                console.log(cellElements[0].firstChild.firstChild.nodeValue);
                console.log(cellElements[1].firstChild.nextSibling.firstChild.nodeValue);
                console.log(cellElements[2].firstChild.firstChild.nodeValue);
                console.log(cellElements[3].firstChild.firstChild.nodeValue);
                console.log(cellElements[4].firstChild.nextSibling.firstChild.nodeValue);
                console.log(cellElements[5].firstChild.nextSibling.firstChild.nodeValue);
                console.log(cellElements[6].firstChild.nextSibling.firstChild.nodeValue);
                console.log(cellElements[7].firstChild.nextSibling.firstChild.nodeValue);
                console.log(cellElements[8].firstChild.firstChild.nodeValue); */
                for (let i = 0; i < cellElements.length; i++) {

                cellElements[i].addEventListener('click', async function () {
                    // add player's X
/*                     if(cellElements[i].firstChild.nodeName=="H5")
                    cellElements[i].removeChild(cellElements[i].firstChild);
 */
/*                     const isValidMove = await addX(cellElements[i]); */
                    if(count==9){
                        window.alert("GAME TIED");
                        console.log("Game Tied");
                        reset();
                        return;
                    }
                    cellElements[i].innerHTML="X";
                    count++;
                    console.log(count);


/*                     console.log("after addx:");
                    console.log(cellElements[0].firstChild.firstChild.nodeValue);
                    console.log(cellElements[1].firstChild.nextSibling.firstChild.nodeValue);
                    console.log(cellElements[2].firstChild.firstChild.nodeValue);
                    console.log(cellElements[3].firstChild.firstChild.nodeValue);
                    console.log(cellElements[4].firstChild.nextSibling.firstChild.nodeValue);
                    console.log(cellElements[5].firstChild.nextSibling.firstChild.nodeValue);
                    console.log(cellElements[6].firstChild.nextSibling.firstChild.nodeValue);
                    console.log(cellElements[7].firstChild.nextSibling.firstChild.nodeValue);
                    console.log(cellElements[8].firstChild.firstChild.nodeValue); */



                    if (cellElements[0].innerHTML=="X"&&cellElements[1].innerHTML=="X"&&cellElements[2].innerHTML=="X" ||
                    cellElements[0].innerHTML=="X"&&cellElements[3].innerHTML=="X"&&cellElements[6].innerHTML=="X" ||
                    cellElements[0].innerHTML=="X"&&cellElements[4].innerHTML=="X"&&cellElements[8].innerHTML=="X" ||
                    cellElements[1].innerHTML=="X"&&cellElements[4].innerHTML=="X"&&cellElements[7].innerHTML=="X" ||
                    cellElements[2].innerHTML=="X"&&cellElements[5].innerHTML=="X"&&cellElements[8].innerHTML=="X" ||
                    cellElements[3].innerHTML=="X"&&cellElements[4].innerHTML=="X"&&cellElements[5].innerHTML=="X" ||
                    cellElements[6].innerHTML=="X"&&cellElements[7].innerHTML=="X"&&cellElements[8].innerHTML=="X" ||
                    cellElements[2].innerHTML=="X"&&cellElements[4].innerHTML=="X"&&cellElements[6].innerHTML=="X" 
                    ){
                        window.alert("Congratulations!!! You won the game.");
                        console.log("You won game");
                        reset();
                        return;
                    }


                    
/*                     if (isValidMove) {
 */                        
                    // choose computer's O
                    const j = await findBestMove(cellElements);
/*                     if(cellElements[i].firstChild.nodeName=="H5")
                    cellElements[i].removeChild(cellElements[i].firstChild); */
                    // pause, then add computer's O
                    await new Promise((resolve) => setTimeout(() => resolve(), 0));
 /*                    if(cellElements[i].firstChild.nodeName=="H5")
                    cellElements[i].removeChild(cellElements[i].firstChild); */
                    if(count==9){
                        window.alert("GAME TIED");
                        console.log("Game Tied");
                        reset();
                        return;
                    }
                    cellElements[j].innerHTML="O";
                    count++;
                    console.log(count);


/*                     await addO(cellElements[j]);

 *//*                     }
 */
                    console.log("Working");
                        if (cellElements[0].innerHTML=="O"&&cellElements[1].innerHTML=="O"&&cellElements[2].innerHTML=="O" ||
                        cellElements[0].innerHTML=="O"&&cellElements[3].innerHTML=="O"&&cellElements[6].innerHTML=="O" ||
                        cellElements[0].innerHTML=="O"&&cellElements[4].innerHTML=="O"&&cellElements[8].innerHTML=="O" ||
                        cellElements[1].innerHTML=="O"&&cellElements[4].innerHTML=="O"&&cellElements[7].innerHTML=="O" ||
                        cellElements[2].innerHTML=="O"&&cellElements[5].innerHTML=="O"&&cellElements[8].innerHTML=="O" ||
                        cellElements[3].innerHTML=="O"&&cellElements[4].innerHTML=="O"&&cellElements[5].innerHTML=="O" ||
                        cellElements[6].innerHTML=="O"&&cellElements[7].innerHTML=="O"&&cellElements[8].innerHTML=="O" ||
                        cellElements[2].innerHTML=="O"&&cellElements[4].innerHTML=="O"&&cellElements[6].innerHTML=="O" 
                        ){
                            window.alert("Sorry, You Lost. CPU won the game.");
                            console.log("computer won game");
                            reset();
                            return;
                        }


                    
            
                });
                }
            
                async function findBestMove(arr) {
                for (let n = 0; n < arr.length; n++) {
                    if(arr[n].innerHTML!="X"&&arr[n].innerHTML!="O")
                        return n;
/*                     if(n==0||n==2||n==3||n==8){
                        if (arr[n].firstChild.firstChild.nodeValue==="-") {
                            return n;
                            }
                    }

                    else
                    if (arr[n].firstChild.nextSibling.firstChild.nodeValue==="-") {
                        return n;
                        } */
                }
                }
            

                function reset(){
                    for (let n = 0; n < cellElements.length; n++) {
                        cellElements[n].innerHTML="";
                    }
                    count=0;
                }
                async function addX(cellElement) {
                    
/*                 if (cellElement.childElementCount === 1) { return false; }
                const headingElement = document.createElement("h6");
                const textNode = document.createTextNode("X");
                headingElement.appendChild(textNode);
                cellElement.appendChild(headingElement);
 */
                    cellElement


                return true;
                }
            
                async function addO(cellElement) {

                if (cellElement.childElementCount === 1) { return; }
                const headingElement = document.createElement("h6");
                const textNode = document.createTextNode("O");
                headingElement.appendChild(textNode);
                cellElement.appendChild(headingElement);
                }

                document.getElementById("resetbtn").addEventListener('click', function(){
                    reset();
                });
            
            })();

