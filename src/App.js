import "./App.css";
import imageHamza from "./assets/hamza.jpg";
import Profile from "./Component/Profile/Profile";
function App() {
 
  const handelFullName = e => alert(e);
  const name='Hamza Ben Thabet 2';
  const bios='young developper works with angular';
  const work='fullstack Developer';
  return (
    <div>
  
        <Profile
          fullname={name}
          bio={bios}
          profession= {work}
          handelFullName={handelFullName}
        >
          {imageHamza}
        </Profile>
      
    </div>
  );
}

export default App;
