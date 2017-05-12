import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCv2JaZAflEsoCTY31cx4TRLOlWkssmAMc'

//create a new component to produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

//take this component's generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
