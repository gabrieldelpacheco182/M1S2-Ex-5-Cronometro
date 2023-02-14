let contador = 11;

      function inicio_Contagem() {
        let time = setInterval(cronometro, 1000);

        function cronometro() {
          if (contador == 0) {
            alert("Seu tempo acabou!! Tente novamente!!");
            clearTimeout(time);
          } else {
            contador--;
            console.log(contador);
          }
        }
      }