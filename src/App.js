import './App.css';
// import Card from './component/Card';
// import contacts from './component/Contact';
import Reduce from './reducecomponent/Reduce';
import Note from './keepercomponent/Note';
import notes from './note';
import Header from './keepercomponent/Header';
import Footer from './keepercomponent/Footer';

function App() {
  //  const createNote = <Note title={notes.title} content={notes.content} />;
  return (
    <div className="App">
      {/* <h1 className='"heading'>My Contacts</h1>
      {contacts.map()}

      <Card />
      <Card />
      <Card /> */}
      <Header />
      <Reduce />
      
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
