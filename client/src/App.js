
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, useParams, useRouteMatch } from "react-router-dom";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Navigator from './Navigator';
import config from './environment'

function App() {
  const [myUrl, setmyUrl] = useState('')
  const [result, setResult] = useState()
  const onInIt = () => {

    // console.log(url)
  }
  useEffect(() => {
    onInIt()
  }, [])
  const onSubmit = async (e) => {
    e.preventDefault();
    if (validURL(myUrl)) {
      try {
        let response = await axios.get(config.BASE_API_URL + 'link/create?url=' + myUrl)
        let data = response.data
        console.log(data)
        setResult(data)
        setmyUrl('')
      } catch (e) {
        console.error(e.response)
        if (e.response) {
          console.log(e.response)
        }
      }
    }
  }
  const onChange = (e) => {
    setmyUrl(e.target.value)
  }
  const validURL = function (str) {
    var pattern = new RegExp('^(https:\\/\\/)' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }
  return (
    <Router>
      <Route exact path="/:url" component={Navigator} />
      <Route exact path="/" render={props => (
        <div className="App">
          <header className="App-header">

            <p>
              URL Shortener
            </p>
            <form onSubmit={onSubmit}>
              <input type="text" name="url" placeholder="Enter URL here...." value={myUrl} onChange={onChange} />
              <input type="submit" value="Submit" />
            </form>

            {result && <div>
              <h4>Url:</h4>
              <p>
                <a href={config.BASE_URL + result.shortened_url}>{config.BASE_URL + result.shortened_url}</a>
              </p>
              <br />
              <h4>Original Url: </h4>
              <p>
                {result.original_url}
              </p>
            </div>}


          </header>
        </div>
      )}
      />

    </Router>

  );
}

export default App;
