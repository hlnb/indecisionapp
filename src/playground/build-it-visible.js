const app = {
   title: 'Make it Visible'
};
let visibility = false;
const toggleVisibility = () =>
{
   visibility = !visibility;
   render();
};
const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>

      {visibility && (
         <div>
            <p>Here are some details that were hidden!!!!</p>
         </div>
      )}
     
    
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();