console.log("script loaded");



let getDataBtn = document.createElement('button');
getDataBtn.textContent = 'Get Data';
document.body.appendChild(getDataBtn);


//button clicked and get data
getDataBtn.addEventListener('click',function(e){
    //console.log('clicked');
    
    //this function will make connection and send request 
    getApiData();
    
    
});


let newData;
function getApiData(){
    
    const newRequest = new XMLHttpRequest();
    newRequest.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos', true);
    //newRequest.onreadystatechange = function () {
    //if(newRequest.readystate == 4 && newRequest.status == 200){
    
    newRequest.onload = function(){
    newData = JSON.parse(newRequest.responseText);
      
        //this function will create HTML
      createHtml(); 
            
    };
    newRequest.send();
};

function createHtml(){
    
    //create new HTML Elements 
        let ul = document.createElement('ul');
        document.body.appendChild(ul);
        
        
        Array.from(newData).forEach(function(data){
        let li = document.createElement('li');
        let a = document.createElement('a');
        let linkText = document.createTextNode(data.name);    
        
        ul.appendChild(li);
            
        a.appendChild(linkText);
        a.title = data.name;
        a.href= data.html_url;            
        //li.innerHTML = data.name;
        
        li.appendChild(a);
     
      });
}

    
   