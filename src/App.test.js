// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import delay from 'redux-saga';

it('async test 1', done=> {
  setTimeout(done, 100);
})

it('async test 2', ()=> {
  return new Promise(
    resolve => setTimeout(resolve, 100)
  );
})

// it('async test 3', async => await.delay(100));

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<Form />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

