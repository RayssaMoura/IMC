const Passo1 = document.querySelector('.Passo1');
const Passo2 = document.querySelector('.Passo2');
const Passo3 = document.querySelector('.Passo3');

function go(currentStep, nextStep){
    let dNone, dBlock;
    if (currentStep == 1){
        dNone = Passo1;
    }
    else if (currentStep == 2){
        dNone = Passo2;
    }
    else{
        dNone = Passo3;
    }

    dNone.style.display = 'none';

    if (nextStep == 1){
        dBlock = Passo1;
    }
    else if (nextStep == 2){
        dBlock = Passo2;
    }
    else{
        dBlock = Passo3;
    }

    dBlock.style.display = 'block';

}

function validate(){
    const Nota1 = document.getElementById('peso');
    const Nota2 = document.getElementById('altura');
    Nota1.style.border = 'none';
    Nota2.style.border = 'none';

    if (!Nota1.value || !Nota2.value){
        if (!Nota1.value && !Nota2.value){
            console.log('Digite algo!');
            Nota1.style.border = '2px solid red';
            Nota2.style.border = '2px solid red';
        }

        else if(!Nota1.value){
            Nota1.style.border = '2px solid red';
        }

        else{
            Nota2.style.border = '2px solid red';
        }
    
    }

    else{
        const Nota1_Formatada = parseFloat(Nota1.value);
        const Nota2_Formatada = parseFloat(Nota2.value);
        let media_n1 = (Nota1_Formatada + Nota2_Formatada)/2 ;
        let quanto_precisa = (6 * 5 - media_n1 * 2) / 3; 

        if (Nota1_Formatada <= 3 && Nota2_Formatada <= 3){
            document.getElementById("res").innerHTML = "Reprovado";

        }

        else{
            document.getElementById("res").innerHTML = quanto_precisa.toFixed(1);
        } 
        
        go(2, 3);

        document.getElementById("nota1"). value = "";
        document.getElementById("nota2"). value = "";
    }
}