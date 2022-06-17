var contador = 1;
            var tempo=5000;
            setInterval("Exibindo()",tempo);
          
            function Exibindo() 
            {
                if (contador==1)
                    {			
                        document.getElementById("conteudo").style.backgroundImage="url('Fundo1.jpg')";
                        contador++;
                    }
                else if (contador==2)
                    {
                        document.getElementById("conteudo").style.backgroundImage="url('Fundo2.jpg')";
                        contador++;
                    }
                else if (contador==3)
                    {
                        document.getElementById("conteudo").style.backgroundImage="url('Fundo3.jpg')";
                        contador=1;
                    }
            }

            var num = 1;
            var img1="Propaganda1.png";
            var img2="Propaganda2.png";
            var img3="Propaganda3.png";
            timer=7000;
            var chama=setInterval("Loop()",timer);
            
            function Loop()
            {
                document.images["slide"].src=eval("img"+num);
                
                if (num<3)
                num++;
                else
                num=1;
            }
            
            function Anterior()
            {
                
                if (num == 3)
                num=2;
                else if (num == 2)
                num=1;
                else
                num=3;
                    
                document.images["slide"].src=eval("img"+num);
                
                clearInterval(chama);
                chama=setInterval("Exibindo()",tempo);
            }
            
            function Proximo()
            {
                
                document.images["slide"].src=eval("img"+num);
                
                if (num<3)
                num++;
                else
                num=1;
                
                clearInterval(chama);
                chama=setInterval("Exibindo()",timer);
            }
            function abreMenu() 
			{
			  document.getElementById("menu-lateral").style.width = "30%";
			  document.getElementById("menu-lateral").style.border = "3px outset #ffffff";
			  document.getElementById("faixa").style.visibility = "hidden";
              document.getElementById("conteudo").style.opacity = "0.3";
              document.getElementById("fundo_site").style.opacity = "0.3";
              document.getElementById("menu-lateral").style.zIndex = "1";
              document.getElementById("botao").style.zIndex = "1";
			}
			
			function fechaMenu()
			{
			  document.getElementById("menu-lateral").style.width = "0%";
			  document.getElementById("menu-lateral").style.border = "";
			  document.getElementById("faixa").style.visibility = "visible";
              document.getElementById("conteudo").style.opacity = "1";
              document.getElementById("fundo_site").style.opacity = "1";
			}