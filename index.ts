const affichageElt = document.getElementById('affichage') 

let precedent: number = 0  ;
let affichage = '';
let operation: string | null = null;



let touches = document.querySelectorAll('.number');

for (let touche of touches){
    touche.addEventListener('click',gestionTouches )
}

function gestionTouches(this: Element){
    let touche = this.innerHTML

    if (parseFloat(touche) >= 0 ){
        affichage = (affichage === '') ? touche.toString() : affichage + touche.toString();
        affichageElt!.innerHTML = affichage

    } else if (touche === '.' && affichage.includes('.') === false){
        affichage = (affichage === '') ? touche.toString() : affichage + touche.toString();
        affichageElt!.innerHTML = affichage
    } if (affichage !== ''){
        switch(touche){
            case 'C':
              precedent = 0;
              affichage = '';
              operation = null;
              if (affichageElt !== null) affichageElt.innerText = '0' 
              break;
            
            case '+':
            case '*':
            case '/':
            case '-':    
                precedent = (precedent === 0 ) ? parseFloat(affichage) : 
                calculate(precedent,parseFloat(affichage),operation!)!;
                affichageElt!.innerHTML = precedent.toString();
                operation = touche;
                affichage = '';
                break;
            case '=':
                precedent = (precedent === 0) ? parseFloat(affichage) : 
                calculate(precedent,parseFloat(affichage),operation!)!;
                affichageElt!.innerHTML = precedent.toString();
                operation = touche;
                affichage = precedent.toString();
                precedent = 0;
                break;
               
                


                
        }
    }


}

function calculate(nb1: number , nb2: number , operation: string){
    
    
        if (operation === '+') return nb1 + nb2
        else if (operation === '-') return nb1 - nb2
        else if (operation === '*') return nb1 * nb2
        else if (operation === '/') return nb1 / nb2
    
    }