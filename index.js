let value,num;
let salir = false;

// se utilizo un setTimeout() para que carge el contenido html ya que los prompt y los alert lo impiden

// lo utilice para que cargue el fondo negro y el texto, para que se ejecute despues de 2 segundos

setTimeout(()=>{ 

    while(!salir){
        let validInput1 = false;
        let validInput2 = false;
        do{
            value = prompt('Tabla de multiplicar del Numero : ');

            if(value == null){
                continue;
            }else if (value === '' || value.includes(' ')){
                continue;
            }

            if(value.indexOf(',') != -1){
                value = value.replace(',','.');
                value = Number(value);
            }else{
                value = Number(value);
            };
        
            if(isNaN(value)){
                console.log("%cDebes Ingresar solo numeros","color:white;background:black;padding:10px 100px;");
            }else if(value === 0){
                console.log("%cDebes Ingresar un numero diferente de cero","color:white;background:black;padding:10px 100px;");
            }else{
                validInput1 = true;
            }
            
        }while(!validInput1);
        
        do{
            num = prompt(`Hasta que numero deseas multiplicar ${value} :`);
            
            if(num == null){
                continue;
            }else if (num === '' || num.includes(' ')){
                continue;
            }
            
            if(num.indexOf(',') != -1){
                num = num.replace(',','.');
                num = Number(num);
            }else{
                num = Number(num);
            };
            
            if(isNaN(num)){
                console.log("%cDebes Ingresar solo numeros","color:white;background:black;padding:10px 100px;");
            }else if(num === 0){
                console.log("%cDebes Ingresar un numero diferente de cero","color:white;background:black;padding:10px 100px;");
            }else{
                validInput2 = true;
            }
            
            
        
        }while(!validInput2);
        
        console.clear();
        
        if(num < 0){
            for (let i = -1; i > (num - 1); i--) {
                console.log(`${value} X ${i} = ${value * i}`);
            };
        }else{
            for (let i = 1; i < (num + 1 ); i++) {
                console.log(`${value} X ${i} = ${value * i}`);
            };
        }
    
        let opcion;
        let opcionCorrecta = false;
    
        while(!opcionCorrecta){
    
            opcion = prompt('Deseas Calcular la tabla de otro numero?\n- Ingresa 1 para continuar\n- Ingresa 2 o haz click en cancelar para salir');
    
            switch (opcion) {
                case '1':
                    opcionCorrecta = true;
                    continue;
                case '2':
                    opcionCorrecta = true;
                    salir = true;
                    break;
                case null:
                    opcionCorrecta = true;
                    salir = true;
                    break;
                case '':
                    break;
                default:
                    console.log("%cIngresa una opcion correcta","color:white;background:black;padding:10px 100px;");
                    continue;
            };
        };
    };

},2000);

    
