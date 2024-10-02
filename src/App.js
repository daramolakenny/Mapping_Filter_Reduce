import './App.css';
import Card from './component/Card';
import contacts from './component/Contact';
import Reduce from './reducecomponent/Reduce';
import Note from './keepercomponent/Note';
import notes from './note';
import Header from './keepercomponent/Header';
import Footer from './keepercomponent/Footer';

function App() {
  //  const createNote = <Note title={notes.title} content={notes.content} />;
  return (
    <div className="App">
      <Header />

      <h1 className='"heading'>My Contacts</h1>
      {contacts.map((contact) => (
        <Card  
         key={contact.id} name={contact.name} imgURL={contact.imgURL} phone={contact.phone} email={contact.email}
        />
      ))}
      
      <Reduce />
      
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
