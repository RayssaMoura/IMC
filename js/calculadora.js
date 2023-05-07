function validate(){

    let idoso = document.getElementById('idoso');
    let adulto = document.getElementById('adulto');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    peso.style.border = 'none';
    altura.style.border = 'none';

    if ((!idoso.checked) && (!adulto.checked)){
        alert('Diga se você é um adulto, ou um idoso !');
    }

    if ((idoso.checked) && (adulto.checked)){
        alert('Escolha somente uma caixa de seleção');
    }

    if (!peso.value && !altura.value){
        peso.style.border = '2px solid red';
        altura.style.border = '2px solid red';
        alert('Preencha todos os campos !');
    }

    else if(!peso.value){
        peso.style.border = '2px solid red';
        alert('Insira seu peso !');
    }

    else if(!altura.value){
        altura.style.border = '2px solid red';
        alert('Insira sua altura !');
    }

    else if (altura.value < 0){
        alert('Coloque uma altura maior que 0');
    }

    else if (peso.value < 0){
        alert('Coloque um peso maior que 0');
    }

    else if (altura.value >= 100){
        altura.value = altura.value/100;
        let imc = peso.value / (altura.value * altura.value);
        var result_img = document.querySelector('#result_img');
        if((adulto.checked) && (!idoso.checked)){
            if ((imc >= 0) && (imc < 18.5)){
                result_img.setAttribute('src', '../img/img8.png');
            }
    
            if ((imc >= 18.5) && (imc <= 24.9)){
                result_img.setAttribute('src', '../img/img9.png');
            }
    
            if ((imc >= 25) && (imc <= 29.9)){
                result_img.setAttribute('src', '../img/img10.png');
            }
    
            if ((imc >= 30) && (imc <= 34.9)){
                result_img.setAttribute('src', '../img/img11.png');
            }
    
            if ((imc >= 35) && (imc <= 39.9)){
                result_img.setAttribute('src', '../img/img12.png');
            }
    
            if (imc > 40){
                result_img.setAttribute('src', '../img/img13.png');
            }
        }

        else if((idoso.checked) && (!adulto.checked)){
            if (imc <= 22){
                result_img.setAttribute('src', '../img/img8.png');
            }
    
            if ((imc > 22) && (imc <= 27)){
                result_img.setAttribute('src', '../img/img9.png');
            }
    
            if (imc > 27){
                result_img.setAttribute('src', '../img/img10.png');
            }
        }
    }

    else if ((altura.value >= 0) && (altura.value < 100)){
        altura.value = (altura.value * 100) / 100;
        let imc = peso.value / (altura.value * altura.value);
        var result_img = document.querySelector('#result_img');
        if((adulto.checked) && (!idoso.checked)){
            if ((imc >= 0) && (imc < 18.5)){
                result_img.setAttribute('src', '../img/img8.png');
            }
    
            if ((imc >= 18.5) && (imc <= 24.9)){
                result_img.setAttribute('src', '../img/img9.png');
            }
    
            if ((imc >= 25) && (imc <= 29.9)){
                result_img.setAttribute('src', '../img/img10.png');
            }
    
            if ((imc >= 30) && (imc <= 34.9)){
                result_img.setAttribute('src', '../img/img11.png');
            }
    
            if ((imc >= 35) && (imc <= 39.9)){
                result_img.setAttribute('src', '../img/img12.png');
            }
    
            if (imc > 40){
                result_img.setAttribute('src', '../img/img13.png');
            }
        }

        else if((idoso.checked) && (!adulto.checked)){
            if (imc <= 22){
                result_img.setAttribute('src', '../img/img8.png');
            }
    
            if ((imc > 22) && (imc <= 27)){
                result_img.setAttribute('src', '../img/img9.png');
            }
    
            if (imc > 27){
                result_img.setAttribute('src', '../img/img10.png');
            }
        }
    }
}

function calcular_novamente(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    var result_img = document.querySelector('#result_img');
    result_img.setAttribute('src', '../img/img7.png');
    peso.value = 'none';
    altura.value = 'none';
}