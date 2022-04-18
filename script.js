let botao = document.getElementById('botao')
let b = document.getElementById('b')
botao.addEventListener("click",ligareDesliga);

function ligareDesliga(){
    
        let lampada = document.getElementById('luz').src;
        let lamligada='https://raw.githubusercontent.com/AugustoXavier/github-pages/main/lam-ligada.png'
        let lamdesligada='https://raw.githubusercontent.com/AugustoXavier/github-pages/main/lam-desligada.png'
    
        if(lampada===lamligada){
            
            document.getElementById('luz').src=lamdesligada
    
        }else{

            document.getElementById('luz').src=lamligada
            }
}


