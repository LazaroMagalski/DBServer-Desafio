class Forca {
  constructor(nome){
    this.nome = nome;
    this.palavra = Array(nome.length).fill('_');
    this.letrasChutadas = [];
    this.vidas = 6;
  }
  
  chutar(letra) {
    let acertou = false;
    if(letra.length == 1){
      //Verifica se a letra é repetida
      for(let i =0; i< this.letrasChutadas.length; i++){
        if(this.letrasChutadas[i] == letra){
          return;
        }
      } 
      //preenche o array com a letra
      for(let i = 0; i < this.nome.length; i++){
          if(this.nome[i] == letra){
            this.palavra[i] = this.nome[i];
            acertou = true;
          }
        }
      //Se a letra não foir escolhida diminui a vida 
      if(acertou == false){
        this.vidas--;
      }
      console.log("letra chutada:"+ letra);
      this.letrasChutadas.push(letra);
    }
  }

  buscarEstado() { 
    if(this.nome == this.palavra.toString().replaceAll(",", "")){
      return "ganhou";
    }else if(this.vidas == 0){
      return "perdeu";
    }else if(this.vidas > 0){
      return "aguardando chute";
    }
    return "saiu"; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
