## Your Restaurant Finder

### How to use this app
On the very first page you can enter the name of a restaurant and API key is not necessary needed if you do not have one. 


![](/public/images/Screen%20Shot%202019-10-20%20at%2022.56.07.png)


Click on the button to search for restaurants. You will now get a list of 50 restaurants currently found in Foursquare and you will be able to choose to see the similar restaurants to the restaurant you clicked on ot go back to the search page.


![](/public/images/Screen%20Shot%202019-10-20%20at%2022.57.59.png)




if you choose to see the similar restaurants you will then get a graph of those restaurants. (I am very sorry but this graph is not currently working the way it should so for the time being you can just see a simplified and a little bit different version of the graph). 


![](/public/images/Screen%20Shot%202019-10-20%20at%2022.58.19.png)


### How to run this app
In order to run the app, you would need to run 
#### npm install
this would install all the dependency packages for the app on your machine
then you would need to run 
#### npm start
which would start the app in the browser for you at localhost port 3000

### Tech Stack
This app is built using React framework, styled with Bootstrap and D3 is used for creating the graph. Foursquare API has been used to pull  data on restaurants. In order to get data in the most efficient JSONlike format way, Axios is used.

### Code snippet
In order to access the data in this app, you do not need to use the APIP key as this is solved by using developer's keys in the url. 

``searchRestaurants = (event) => {
    event.preventDefault();
    axios.get('https://api.foursquare.com/v2/venues/explore?client_id=M5JXUH3CLTCV5QUBOZLCT4XFKYZZGO2GYIMJYA2KXLACLHCB&client_secret=G3EU2UIZDHKV2L1IXGKDPMNTMUW3LK0LCT3PSXL2NOXJHTOC&v=20180323&ll=51.4996089,-0.22557100000000002&radius=100000&limit=100&query=Restaurant')
    .then(res => {
      this.setState({
        allRestArr: res.data.response.groups[0].items,
        visibleForm: false,
        visibleRestList: true
      })
    })
    .catch(err => console.log('There was an error:' + err));
  }``







## REACT DOCS NOTES 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




<!-- Please allow the browser to take your location in order to accurately display results of your search -->
