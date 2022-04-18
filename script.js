let botao = document.getElementById('botao')
let b = document.getElementById('b')
botao.addEventListener("click",ligareDesliga);

function ligareDesliga(){
    
        let lampada = document.getElementById('luz').src;
        let lamligada='http://127.0.0.1:5500/img/lam-ligada.png'
        let lamdesligada='http://127.0.0.1:5500/img/lam-desligada.png'
    
        if(lampada===lamligada){
            
            document.getElementById('luz').src=lamdesligada
    
        }else{

            document.getElementById('luz').src=lamligada
            }
}


