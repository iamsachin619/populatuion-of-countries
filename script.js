function handleClick(){
            
    const countryName = capitalize(document.getElementById('countryInput').value);
   
    
    console.log(countryName);
    getDataUsingAJAX(countryName);
    
}

function getDataUsingAJAX(countryName){
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {

            console.log(this.responseText); 
            const response = JSON.parse(this.responseText);
            if(response.ok === true){
              var country = response.body.country_name;
              var population = response.body.population;
              var tag = document.createElement('li');
              var text = document.createTextNode(country +' '+ ": "+ ' ' + population);
              tag.appendChild(text);
              var ulTag = document.getElementById('list');  
              ulTag.appendChild(tag);  
              document.getElementById('countryInput').value = '';                      
            }else{
                alert("Error couldnt find the country");
            }
            
        }
    });

    xhr.open("GET", `https://world-population.p.rapidapi.com/population?country_name=${countryName}`);
    xhr.setRequestHeader("x-rapidapi-host", "world-population.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "b91ee39b6bmshae1e1807b6533a8p110b73jsncc6680d79b75");

    xhr.send(data);
}

const capitalize = (input) => {
    var words = input.split(' ');
var CapitalizedWords = [];
words.forEach(element => {
CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
});
return CapitalizedWords.join(' ');
 }