import "./App.css";
import Adress from "./component/Profil/Adress";
import FullName from "./component/Profil/FullName";
import ProfilePic from "./component/Profil/ProfilePic";

function App() {
  return (
    <section>
      <ProfilePic />
      <FullName />
      <Adress />
    </section>
  );
}

export default App;
