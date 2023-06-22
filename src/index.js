   //steps
//Add event listeners to capture form data and override a form's default behavior
//Fetch data based on what the user types into that form
//Display that data on the page
const init = () => {
    const inputForm=document.querySelector("form")
    inputForm.addEventListener("submit",(e)=> {
      e.preventDefault();
      
      //Accessing input value from an event object
    //   //Value attribute is used to get input value
    //   console.log(e.target.children[1].value);

      //Accessing input value directly
      const input=document.getElementById('searchByID');
      console.log(input.value);

      //Fetch data based on user input
      fetch(`http://localhost:3000/movies/${input.value}`) 
      .then(resp => resp.json())
      .then(data=> {
        // console.log(data);

        //Display fetched data on the page
        const title=document.querySelector('#movieDetails h4');
        const summary=document.querySelector('#movieDetails p');

        title.textContent=data.title;
        summary.textContent=data.summary;
        
      });
    });
}

document.addEventListener('DOMContentLoaded', init);

//In Js-based web,webpages can dynamically update their content as a user interacts with it.
