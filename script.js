function scroll(n){
    element = document.getElementById("lista-projetos");
    if(n == 0){
        element.scroll(scroll(400, 0))
    }if(n == 1){
        element.scroll(scroll(-400, 0))

    }   
}