import React, { Component } from "react";
import imgPlaceholder from '../images/test.jpg';
import './EnglishPageAbout.css';


class EnglishPageAbout  extends Component {
  state = {
    showProjects:false
  };
   
  toggleMoreProject = ()=>{
    const doesShow = this.state.showProjects;
    this.setState({
      showProjects:!doesShow
    });
  }
  render() {
    return (
      <div>
      <h2>javaScript Project </h2>
    <div className = "topColumn">
    <div className ="EnglishAboutPageMain">
      <div className="projectOne">
        {/*<div src = {imgPlaceholder}/>*/}
        <div >
          <h3>Account Balance App</h3>
        </div>
        <div >Main Function to calculate Income and Expences</div>
        <div>Also check for total balace</div>
        <button>
          <a href ='https://github.com/upretirachita/incomeExpensesProject'>Click Me!!</a>
        </button>
      </div>
    </div>
    <div className ="EnglishAboutPageMain">
      <div top width="100%" src={imgPlaceholder} alt="Card image cap" round />
      <div className="projectOne">
        <div>
          <h3>Gallary Project</h3>
        </div>
        <div>Card subtitle</div>
        <div>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
        <button>
          <a href ='https://github.com/upretirachita/galleryProject'>Click Me!!</a>
        </button>
      </div>
    </div>
    <div className ="EnglishAboutPageMain">
      <divtop width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="div image cap" />
      <div className="projectOne">
        <div>
        <h3>Countries API</h3>
        </div>
        
        <div>Main Function to search country with any letter or by Name</div>
        <button>
          <a href ='https://github.com/upretirachita/countries-API'>Click Me!!</a>
        </button>
      </div>
    </div>
    </div>
    <div className = "topColumn">
    <div className ="EnglishAboutPageMain">
      <div top width="100%" src={imgPlaceholder} alt="div image cap" round />
      <div>
        <div>
          <h3>Account Balance</h3>
        </div>
        <div>Add Income/Expenses </div>
        <div >Calculate Total Balane</div>
        
        <button>
          <a href ='https://github.com/upretirachita/incomeExpensesProject'>Click Me!!</a>
        </button>
      </div>
    </div>
    <div className ="EnglishAboutPageMain">
      <divtop width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="div image cap" />
      <div>
        <div>
        <h3>Table created in DOM</h3>
        </div>
        <div>Table created in DOM</div>
        <button>
          <a href ='https://github.com/upretirachita/tableCreatedInDOM'>Click Me!!</a>
        </button>
      </div>
    </div>
    </div>
    <button className="MoreProjects" onClick={this.toggleMoreProject}>Click Me ForMore Projects on CSS...</button>
        {this.state.showProjects ===true ?
          <div>
          <div className = "topColumn">
          <div className ="EnglishAboutPageMain">
            <div className="projectOne">
              {/*<div src = {imgPlaceholder}/>*/}
              <div >
                <h3>Project on flex</h3>
              </div>
              <button>
                <a href ='https://github.com/upretirachita/Assignment_3'>Click Me!!</a>
              </button>
            </div>
          </div>
          <div className ="EnglishAboutPageMain">
            <div top width="100%" src={imgPlaceholder} alt="Card image cap" round />
            <div className="projectOne">
              <div>
                <h3>Project in flex</h3>
              </div>
              <div>Go through the foloder to find detail</div>
              <div>Have a look in it </div>
              <button>
                <a href ='https://github.com/upretirachita/Integrify-Assi2-'>Click Me!!</a>
              </button>
            </div>
          </div>
          
          </div>
          <div className = "topColumn">
          <div className ="EnglishAboutPageMain">
            <div top width="100%" src={imgPlaceholder} alt="div image cap" round />
            <div>
              <div>
                <h3>CSS Flex</h3>
              </div>
              <div>Go through the foloder to find detail</div>
              <div>Have a look in it </div>
              <button>
                <a href ='https://github.com/upretirachita/intergrifyassignment4flex'>Click Me!!</a>
              </button>
            </div>
          </div>
          <div className ="EnglishAboutPageMain">
            <div top width="100%" src={imgPlaceholder} alt="Card image cap" round />
            <div>
              <div>
                <h3>Form Style</h3>
              </div>
              <div>Go through the foloder to find detail</div>
              <div>Have a look in it </div>
              <button>
                <a href ='https://github.com/upretirachita/integrifyassignment4'> Click Me!!</a>
              </button>
            </div>
          </div>
          
          </div> 
          </div>: null   
     }

    <h2>React Project </h2>
    <div className = "topColumn">
    <div className ="EnglishAboutPageMain">
      <div className="projectOne">
        {/*<div src = {imgPlaceholder}/>*/}
        <div >
          <h3>Burger App </h3>
        </div>
        <div >Main Function to calculate Income and Expences</div>
        <div>Also check for total balace</div>
        <button>
          <a href ='https://github.com/upretirachita/BurgerApp'>Click Me!!</a>
        </button>
      </div>
    </div>
    <div className ="EnglishAboutPageMain">
      <div top width="100%" src={imgPlaceholder} alt="Card image cap" round />
      <div className="projectOne">
        <div>
          <h3>Post App</h3>
        </div>
        <div>Post App React Router</div>
        <div>User can add and delete post</div>
        <button>
          <a href ='https://github.com/upretirachita/postReact'>Click Me!!</a>
        </button>
      </div>
    </div>
    <div className ="EnglishAboutPageMain">
      <divtop width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="div image cap" />
      <div className="projectOne">
        <div>
        <h3>Form App</h3>
        </div>
        <div>Sate Handling </div>

         <button>
          <a href ='https://github.com/upretirachita/FormReact'>Click Me!!</a>
        </button>
      </div>
    </div>
    </div>
    <div className = "topColumn">
    <div className ="EnglishAboutPageMain">
      <div top width="100%" src={imgPlaceholder} alt="div image cap" round />
      <div>
        <div>
          <h3>Coin API</h3>
        </div>
        <div >Main Function sort by Rank and price</div>
        <div>Sort by Name and sort by letter.</div>
        <button>
          <a href ='https://github.com/upretirachita/CryptocurrencyCoins-/tree/master/my-app'>Click Me!!</a>
        </button>
      </div>
    </div>
    <div className ="EnglishAboutPageMain">
      <div top width="100%" src={imgPlaceholder} alt="Card image cap" round />
      <div>
        <div>
          <h3>accountBalanceReact App</h3>
        </div>
        <div>accountBalanceReact</div>
        <div>User Can add Income , Expenses and calculate totalBalance</div>
        <button>
          <a href ='https://github.com/upretirachita/accountBalanceReact/tree/master/my-accountapp'> Click Me!!</a>
        </button>
      </div>
    </div>
    <div className ="EnglishAboutPageMain">
      <divtop width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="div image cap" />
      <div>
        <div>
        <h3>Countries Search App</h3>
        </div>
        <div>Main Function to search country with any letter or by Name</div>
        <div>Count number of searched country.</div>
       <button>
          <a href ='https://github.com/upretirachita/countriesReact/tree/master/my-app'>Click Me!!</a>
        </button>
      </div>
    </div>
    </div>
  </div>
    );
  }
}

export default EnglishPageAbout;
