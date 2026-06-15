
async function fetchAdvice (){


    const response = await fetch("https://api.adviceslip.com/advice");
    //console.log(response);
    //console.log(response.status);
    //console.log(response.statusText);
    //console.log(response.body);
    //console.log(response.headers);
    //console.log(response.headers.get("content-type"));
    
    
    const text = await response.text();
    console.log(text);
    console.log(typeof text);
}

fetchAdvice();