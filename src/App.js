import React, { Component } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component {
   state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  updateFeedback = event => {
    Object.keys(this.state).forEach(option => {
      option === event.target.textContent &&
        this.setState(prevState => ({
          [option]: prevState[option] + 1,
        }));
    });    
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return this.total=total + value;
    },0)
  }
  
  countPositiveFeedbackPercentage = (total) => {
    const positive = this.state.good;
    if (total === 0) {
      return '0%';
    }
    return Math.round(positive / total * 100) + '%';    
  }

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <Section title={'Please leave feedback'}>        
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ?
        <Section title={'Statistics'}>    
          <Statistics feedbacks={this.state}
            total={total}
            positivePercentage={percentage} />
        </Section> :
        <Notification message='There is no feedback'/>        
      }
      </>  
    );
  }  
}

export default App;
