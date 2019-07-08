import React from 'react';
export default class StepComponent extends React.Component {
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
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }
    render() {
        const { error, isLoaded, items } = this.state;
        const finalArray = items.sort(function (a, b) {
            return a.stepNumber - b.stepNumber;
        }).map(item => {
            const finalItem = {};
            const versionDates = item.versionContent;
            const sortByEffectiveDate = versionDates.sort(function (a, b) {
                return Date.parse(b.effectiveDate) - Date.parse(a.effectiveDate);
            });
            finalItem.stepNumber = item.stepNumber;
            finalItem.title = sortByEffectiveDate[0].title;
            finalItem.body = sortByEffectiveDate[0].body;
            return finalItem;
        });
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (<div className="step-row">
                {finalArray.map((item) => (<div className="step-container" key={item.stepNumber}>
                    <p className="step-stepNumber">0{item.stepNumber}</p>
                    <hr className="step-separator"></hr>
                    <p className="step-title">{item.title.toUpperCase()}</p>
                    <p className="step-body">{item.body}</p>
                </div>))}
            </div>);
        }
    }
}
