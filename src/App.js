import React, {Component} from 'react';
import Nav from './Nav';
import LinkForm from './LinkForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clarifai from 'clarifai';
import FaceRecognition from './FaceRecognition'
import SignIn from './SignIn'
import Register from './Register'
import './App.css';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
 apiKey: '151e1fc915554311b7d34f7bf1007d56'
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class  App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
  // const [input, setInput] = useState('')
  // const [imgUrl, setImgUrl] = useState('')
  // const [box, setBox] = useState({})
}}
onInputChange =(e)=>{
  this.setState({input:e.target.value});
}

onButtonSubmit =()=>{
  this.setState({imgUrl: this.state.input})
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  .catch(err => console.log(err))
 }


calculateFaceLocation =(data)=>{
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

  const image = document.getElementById('inputimage')
  const width = Number(image.width)
  const height = Number(image.height)
  return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
  }

}

displayFaceBox =(box)=>{
  console.log(box)
  this.setState({box:box})
}
onRouteChange =(route)=>{
  if (route === 'signout') {
    this.setState({isSignedIn:false})
  } else if (route === 'home') {
    this.setState({isSignedIn:true})
  }
  this.setState({route:route});
}


render(){
  return (

      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Nav isSignedIn={this.state.isSignedIn } onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' ?
          <div>
            <LinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box}/>
          </div>
         : (this.state.route === 'signin' 
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          ) 
    }
</div>
  );
}
}

export default App;
