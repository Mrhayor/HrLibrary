import Header from "../components/Header.jsx"
import {NavLink} from "react-router-dom"

export default function Blog (){

    return (
    <div className="jj">
        <Header/>
      <div className="about">
      <header>About HrLibrary</header>

<h2>Welcome to HrLibrary – Unleashing the World of Human Resources and Literature!</h2>
<h3> Who We Are</h3>

HrLibrary is not just your typical Human Resources resource hub; we{`'`}re also passionate about the world of literature. 
Our platform integrates seamlessly with the Open Library API, allowing you to explore a vast collection of books spanning all genres. 
Whether you{`'`}re an HR professional seeking a break from the corporate world or a book enthusiast looking for your next literary adventure, 
HrLibrary is the perfect intersection of HR expertise and the joy of reading.

<h3>What Sets Us Apart</h3>

### 1. Open Library Integration

We have harnessed the power of the Open Library API to bring you a unique experience. Search for any book, across all genres, 
and get detailed information right at your fingertips. From the publication year and author details to the number of reads,
HrLibrary makes exploring the literary world a breeze.

<h3>Seamless Book Discovery</h3>

Discovering your next favorite book has never been easier. Our platform allows you to search, explore, and learn more about books 
that pique your interest. Whether you{`'`}re into fiction, non-fiction, or anything in between, HrLibrary is your go-to source for 
literary exploration.

<h3>HR and Literature Unite</h3>

At HrLibrary, we celebrate the synergy between HR professionals and literature enthusiasts. We believe that a well-rounded individual
is not only knowledgeable in their field but also curious about the world of books. Our platform bridges the gap, offering a unique blend 
of HR insights and literary adventures.

<h3>How It Works</h3>

Simply use our intuitive search feature to look up any book, and let the Open Library API work its magic. Within moments, you{`'`}ll 
have access to valuable information such as the publication year, author details, and the number of reads. It{`'`}s like having a personal 
literary assistant at your service.

## Join Us on this Literary Journey

Whether you{`'`}re here for HR expertise, literary exploration, or both, HrLibrary welcomes you with open arms. Dive into the world of books, 
explore HR resources, and let us be your guide in this exciting journey of knowledge and discovery.

Connect with us on [GitHub] <NavLink to="https://github.com/Mrhayor">(https://github.com/Mrhayor/HrLibrary)</NavLink> to stay updated on our latest features, and don{`'`}t forget to share 
your favorite books with the HrLibrary community!

Happy reading and HR exploring!
      </div>
      </div>
    )
}
