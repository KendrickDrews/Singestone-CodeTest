
import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge")
        .then(res => res.json())
        .then(
          (result) => {            
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    
  
    render() {
      const { error, isLoaded, items } = this.state;
      const finalArray = items.sort(function (a, b) {
        return a.stepNumber - b.stepNumber;
      }).map(item => {
            const finalItem = {};
            const versionDates = item.versionContent
            
            const sortByEffectiveDate = versionDates.sort(function (a,b) {               
                return Date.parse(b.effectiveDate) - Date.parse(a.effectiveDate); 
            });              
            finalItem.stepNumber = item.stepNumber;
            finalItem.title = sortByEffectiveDate[0].title;
            finalItem.body = sortByEffectiveDate[0].body;            
        return finalItem;
      });
    console.log(items);
      console.log(finalArray);      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (            
          <div className="api-row">
            { finalArray.map((item) => (
                <div className="api-container" key={item.stepNumber}>
                    <p className="api-stepNumber">0{item.stepNumber}</p>
                    <hr className="api-separator"></hr>
                    <p className="api-title">{item.title.toUpperCase()}</p>
                    <p className="api-body">{item.body}</p>
                </div>
            )) }
          </div>
        );
      }
    }
  }
  export default MyComponent;