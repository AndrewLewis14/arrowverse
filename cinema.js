function calcularNota() {
    const atuacao = parseFloat(document.getElementById('atuacao').value);
    const direcao = parseFloat(document.getElementById('direcao').value);
    const roteiro = parseFloat(document.getElementById('roteiro').value);
    const ato1 = parseFloat(document.getElementById('ato1').value);
    const ato2 = parseFloat(document.getElementById('ato2').value);
    const ato3 = parseFloat(document.getElementById('ato3').value);
    const personagens = parseFloat(document.getElementById('personagens').value);
  
    const notaFinal = atuacao + direcao + roteiro + ato1 + ato2 + ato3 + personagens;
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Nota Final: ${notaFinal.toFixed(2)}</p>`;
  }