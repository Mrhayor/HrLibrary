import {useLocation} from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './Header.jsx';

export default function SearchedResuts() {
  const location = useLocation()
  console.log(location)
  console.log(location.state.book)
  console.log(location.state.book.isbn[0]+"njm")
  const varish = location.state.book.isbn[0];

  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://covers.openlibrary.org/b/isbn/${varish}.jpg`);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        setImageURL(response.url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();

    return () => setImageURL('');
  }, [varish]);

  return (
    
    <main className="searched"> 
     <Header/>
      <div className="results">
        <header>Searched Results</header>
        <ul>
          <li> Title - {location.state.book.title}</li>
          <li>Author - {location.state.book.author_name}</li>
          <li>No of Times Read - {location.state.book.already_read_count}</li>
          <li> {location.state.book.key}</li>
          <li>{varish}</li>
          <li>{imageURL && <img src={imageURL} alt="Book cover" />}</li>        
        </ul>  
      </div>
    </main>

  )
}
