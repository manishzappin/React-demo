import './App.css';
import Cardss from './component/Cardss';
import NavBar from './component/NavBar';
// import Corousel from './component/Corousel';
import DarkVariantExample from './component/DarkVariantExample';
import TemporaryDrawer from './component/TemporaryDrawer';
import AlertDialogSlide from './component/AlertDialogSlide';

import FormExample from './component/FormExample';

function App() {
  return (
    <div  style={{width:"100%" }} >
      <NavBar/>
      <DarkVariantExample/>
      <div style={{display:"flex" , overflow:"hidden" , flexWrap:"wrap"}} >
      <Cardss/>
      <Cardss/>
      
      </div>
      <TemporaryDrawer/>
      <AlertDialogSlide/>
      <FormExample/>
      <NavBar/>
    </div>
  );
}

export default App;
