import "./App.css";
import Adress from "./component/profile/Adress";
import FullName from "./component/profile/FullName";
import ProfilePic from "./component/profile/ProfilePic";

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