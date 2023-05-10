function verificarTabela(){
    var tabela = document.getElementById('tabela');

    if(tabela == null){
        tabela = document.createElement('table')
        var body = document.querySelector("body")
        tabela.id = 'tabela'
        body.appendChild(tabela)
        var thead = document.createElement('thead');
        tabela.appendChild(thead);
        var th1 = document.createElement('th')
        th1.innerText = 'Matrícula'
        thead.appendChild(th1);
        var th2 = document.createElement('th')
        th2.innerText = 'Nome'
        thead.appendChild(th2);
        var th3 = document.createElement('th')
        th3.innerText = 'Faltas'
        thead.appendChild(th3);
        var th4 = document.createElement('th')
        th4.innerText = 'Nota B1'
        thead.appendChild(th4);
        var th5 = document.createElement('th')
        th5.innerText = 'Nota B2'
        thead.appendChild(th5);
        var th6 = document.createElement('th')
        th6.innerText = 'Média Parcial'
        thead.appendChild(th6);
        var th7 = document.createElement('th')
        th7.innerText = 'Nota PR'
        thead.appendChild(th7);
        var th8 = document.createElement('th')
        th8.innerText = 'Média Final'
        thead.appendChild(th8);
        var th9 = document.createElement('th')
        th9.innerText = 'Situação'
        thead.appendChild(th9);
    }

    return tabela;
}

function inserirAlunoNaTabela(aluno){
    var tabela = verificarTabela();

    var linha = tabela.insertRow(-1)

    linha.insertCell(0).innerText = aluno.matricula;
    linha.insertCell(1).innerText = aluno.nome;
    linha.insertCell(2).innerText = aluno.faltas;
    linha.insertCell(3).innerText = aluno.notab1;
    linha.insertCell(4).innerText = aluno.notab2;
    linha.insertCell(5).innerText = aluno.mediaparcial;
    linha.insertCell(6).innerText = aluno.notapr;
    linha.insertCell(7).innerText = aluno.mediafinal;
    linha.insertCell(8).innerText = aluno.situacao;
}

function inserirAluno(total_aulas){
    
    var aluno = {}

    aluno.matricula = prompt('Digite a matrícula do aluno ...');
    aluno.nome = prompt('Digite o seu nome ... ');
    aluno.faltas = parseInt(prompt('Digite a quantidade de faltas ...'))
    aluno.notab1 = parseFloat(prompt('Digite a nota do B1 ...'))
    aluno.notab2 = parseFloat(prompt('Digite a nota do B2 ...'))

    aluno.mediaparcial = (aluno.notab1 + aluno.notab2) / 2;

    var percentual_faltas = aluno.faltas / total_aulas;

    if(percentual_faltas > 0.25){
        aluno.situacao = 'Reprovado por falta';
        aluno.notapr = '-'
        aluno.mediafinal = aluno.mediaparcial
    }else{
        if(aluno.mediaparcial >= 7){
            aluno.mediafinal = aluno.mediaparcial
            aluno.situacao = 'Aprovado'
            aluno.notapr = '-'
        }else{
            aluno.notapr = parseFloat(prompt('Digite a nota da prova de recuperação ...'))
            aluno.mediafinal = (aluno.mediaparcial + aluno.notapr) / 2
            if(aluno.mediafinal >= 5){
                aluno.situacao = 'Aprovado'
            }else{
                aluno.situacao = 'Reprovado por nota'
            }
        }
    }

    inserirAlunoNaTabela(aluno)

}