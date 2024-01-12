import {useLocation} from "react-router-dom"

export default function SearchedResuts() {
  const location = useLocation()
  console.log(location)
  console.log(location.state.book)
  return (
    <>
      <div className="results">
        <header>Searched Results</header>
        <ul>
          <li> Title - {location.state.book.title}</li>
          <li>Author - {location.state.book.author_name}</li>
          <li>No of Times Read - {location.state.book.already_read_count}</li>
          <li> {location.state.book.key}</li>
        </ul>  
      </div>
    </>

  )
}
