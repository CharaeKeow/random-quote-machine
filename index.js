class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currQuote: '',
      currAuthor: '',
      index: 0      
    }
    /*
    this.newQuote = this.newQuote.bind(this);    
    */
  }  
  
  /*
  newQuote() {    
  }
  */
    
  render() {
    const QuoteList = [
  {
  quotes: "Life isn’t about getting and having, it’s about giving and being.",
  author: "Kevin Kruse"
  },
  {
  quotes: "Whatever the mind of man can conceive and believe, it can achieve.",
  author: "Napoleon Hill"
  },
  {
  quotes: "Strive not to be a success, but rather to be of value.",
  author: "Albert Einstein"
  },
      {
  quotes: "I attribute my success to this: I never gave or took any excuse.",
  author: "Florence Nightingale"
  },
  {
  quotes: "You miss 100% of the shots you don’t take.","author":"Wayne Gretzky",
  author: "Wayne Gretzky",
  },
  {
  quotes: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
  author: "Michael Jordan"
  },
  {
  quotes: "The most difficult thing is the decision to act, the rest is merely tenacity.",
  author: "Amelia Earhart"
  },  
]
    function randomIndex() {
      return Math.floor(Math.random() * QuoteList.length);          
  }     
    let index = randomIndex();        
    return(
      <div id='quote-box'>
        <div className='quote-author'>
          <div id='text'>
            <h3>
              "{QuoteList[index].quotes}"
            </h3>
          </div>
          <div id='author'>
            <h6>
              {QuoteList[index].author}
            </h6>
          </div>
        </div>
        <div className='button'>
          <button id='tweet-quote'>
            <i class="fab fa-twitter"></i>
          </button>
          <button id='facebook-quote'>
            <i class="fab fa-facebook-square"></i>
          </button>            
          <button id='new-quote'  onClick={index}>New Quote</button>
        </div>
      </div>
    );
  }    
}

ReactDOM.render(
  <QuoteMachine />,
  document.getElementById('root')
)
