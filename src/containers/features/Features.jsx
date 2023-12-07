import React from 'react';
import './features.css';
import { Feature } from '../../components';


const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum laboriosam, placeat iusto dolor molestias distinctio'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need To realize It. Step into future today & Make it Happen.</h1>
        <p>Request early Access  to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item) => (
          <Feature title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Features