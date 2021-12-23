const fetch = require('node-fetch');

fetch ('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow') 
  .then(res =>res.json())
  .then(json => { 
    function getIsAnswered(){ 
      var cont = 0;
      var no = 0;
      var yes = 0;

      do {
        if(json['items'][cont]['is_answered'] == true) {
             yes = yes + 1
        }
        else { 
            no = no +1
        } 
          cont = cont + 1
      } while (Object.keys(json['items']).length > cont);
      console.log('_______________________________________________')
      console.log('Obtener el numero de respuestas contestadas y no contestadas:'); 
      console.log('Total de preguntas contestadas: ', yes)
      console.log('Total de preguntas no contestadas: ',no)
    }

    function getMoreOwners () { 
      console.log('_______________________________________________')
      console.log('Obtener la respuesta con mayor owners') 
      console.log('La respuesta con mas owners tiene: ')
      console.log(Math.max.apply(Math, json.items.map(function(o){return o.owner.reputation;}))) 
    }

    function getLessCount () { 
      console.log('_______________________________________________')
      console.log('Obtener la respuesta con menor numero de vistas') 
      console.log('La respuesta con menos view es la de: ')
      console.log(Math.min.apply(Math, json.items.map(function(o){return o.view_count;})))

    }

    function getMinMax () {
      console.log('_______________________________________________')
      console.log('Obtener la respuesta mas vieja y mas actual:') 
      console.log('La respuesta mas nueva es: ')
      console.log(Math.max.apply(Math, json.items.map(function(o){return o.creation_date;})))
      console.log('La respuesta mas vieja es: ')
      console.log(Math.min.apply(Math, json.items.map(function(o){return o.creation_date;})))
    }
  
    getIsAnswered();
    getMoreOwners();
    getLessCount();
    getMinMax();
  });
