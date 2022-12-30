import './App.css';
import db from './firebase/config';
import { collection, getDocs ,addDoc , doc ,deleteDoc } from "firebase/firestore";

function App() {
  return (
    <div className="App">
      <button onClick={async()=>{

          const data = await getDocs(collection(db, "products"));
          data.forEach((obj) => {
            console.log(obj.data(),obj.id);
          });

      }}>Read</button>



      <button onClick={async()=>{
          try {
            await addDoc(collection(db, "products"), {
              name: "Red Mi",
              Type: "Mobile",
              Price: 2500
            });
            console.log("add aayi");
          } catch (error) {
            console.log("add aayilla");
          }
               

      }}>Add Data</button>



      <button onClick={async()=>{

         await deleteDoc(doc(db, "products", "Hzldnp6fRzsOVrulnNUR"));



      }}>Delete Data</button>


    </div>
  );
}

export default App;
