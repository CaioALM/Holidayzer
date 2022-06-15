
import express from 'express'
import cors from 'cors'

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

    let hoje = new Date();
    let dataFormatada = ((hoje.getMonth() )) + "/" + ((hoje.getDate() + 1)) + "/" + hoje.getFullYear();

//   function dataPadrao(data_americana){
//     let data_brasileira = data_americana.split('/')
//     let aux = data_americana[0]
//     data_americana[0] = data_americana[1]
//     data_americana[1] = aux
//     data_brasileira = data_americana.join('/')
//     return data_brasileira
//   }
    
  const app = express()
  app.use(cors())

  app.get("/holidays", (request,response) => {
        response.send(holidays)
  })


  let contador = 0
  app.get("/is-today-holiday", (request, response) => {
    for (let i=0 ; i<holidays.length ; i++) {
        let feriado = holidays[i].date
    
      
    if( dataFormatada === feriado) {  
            contador = i
    }
    }
    if (contador === 0) {
        response.send('Não, hoje não é feriado')
    } else  {
        response.send(`Sim, hoje é ${holidays[contador].name}`)
    }
    
  }) 
  
  app.listen(5000)
