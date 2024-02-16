import Header from '../components/Header.jsx'

export default function Home() {
  return (
    <main>  
        <Header/>
            <div className="reading all content">
                <ul>
                    <li>
                        <h1> Books are a uniquely portable magic.</h1>
                        <div>
                            <p>
                                Reality doesn’t always give us the life that we desire, 
                                but we can always find what we desire between the pages of books.
                                Maybe this is why we read, and why in moments of darkness we return to books:
                                to find words for what we already know.
                            </p>
                        </div>
                    </li>

                    <li>
                        <figure>
                            <img src="https://res.cloudinary.com/dz0drrrvm/image/upload/v1704930008/n6jw4lnrehot2jxfglj0.jpg" alt="A place to read" />
                        </figure>
                    </li>
                </ul>
            </div>
            <div className="space"></div>
        <section className="world-library">  
            <div className="world-library-books">
                <h2>The worlds best trusted library</h2>
                <p className='slide-text'>
Libraries are portals to worlds unknown, where each book is a key and every reader a traveler on the journey of knowledge.</p>
            </div>

            <div className="library-shelf room">
                Nothing is pleasanter than exploring a library. <br/>
                Libraries store the energy that fuels the imagination. <br/>
                They open up windows to the world and inspire us to explore and achieve, 
                <br/>
                and contribute to improving our quality of life.
            </div>
        </section>
        <section className="romance fiction love science">
            <div className="rae">
                <div className="romanceFiction">
                    <span>
                        <h2>Fiction</h2>
                        <div>is a type of book or story that is written about imaginary characters and events and not based on real people and facts:</div>
                    </span>
                    <span className="nov">
                        <h2>Non-fiction</h2>
                        <div>is about real events and facts, rather than stories that have been invented</div>
                    </span>
                </div>
                <div className="loveScience">
                    <span>
                        <h2>Historical-Fiction</h2>
                        <div>takes readers to a time and place in the past,  it’s set in the past, with every element of the story conforming to the norms of the day. </div>
                    </span>
                    <span>
                        <h2>Science-Fiction</h2>
                        <div> deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.</div>
                    </span>
                </div>
            </div>
           
        </section>
        <footer>
        <header>HrLibrary</header>
            <div className="footerCompany">
                
                <div className="genres">
                    <div className='list'>
                        <div>manga</div>
                        <div>manga</div>
                        <div>manga</div>
                        <div>manga</div>
                    </div>
                    
                    <div className='list'>
                        <div>Mystery/Thriller</div>
                        <div>Historical Fiction</div>
                        <div>Dystopian</div>
                        <div>Adventure</div>
                        <div>Romance</div>
                    </div>

                    <div className='list'>
                        <div>Fantasy:</div>
                        <div>Science Fic</div>
                        <div>Coming-of-Age</div>
                        <div>Horror</div>
                    </div>

                    <div className='list'>
                    <div>Romance</div>
                    <div>Historical Fiction</div>
                    <div>Western</div>
                    <div>Satire</div>
                    </div>
               
                </div>
            </div>
            {/* <div className="space"></div> */}
            <div className="subscribe">
            
                    <p>
                        Join our newsletter to stay up to date on features and releases 
                    </p>
                    <form action=""><input type="
                        " name="" id="" />
                        <button>onSubmit</button>
                        </form>
            
                 {/* <div className="space"></div>  */}
            </div>
            <hr />
            {/* (c) soluwaseun946@gmail.com */}
        </footer>
    </main>
  )
}

