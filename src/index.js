import React from "react"
import ReactDOM from "react-dom"
const AppHeader = () =>{
  return(
    <h1>Заголовок</h1>
  )
}
const SearchPanel = () => {
  return(
    <p>Абзац текста</p>
  )
}
const TList = () =>{
  return(
    <ul>
      <li>Список </li>
      <li>Список</li>
      <li>Список</li>
    </ul>
  )
}
const App = () =>{
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TList/>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById("root"))