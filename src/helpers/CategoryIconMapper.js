import { FaHome } from "react-icons/fa"
import { FaSchool } from "react-icons/fa"
import { FaAddressBook } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa"

export const switchCategoryIconComponent = ( switchParam ) => {
    let component;
   console.log(switchParam);
   switch (switchParam) {
     case "Home":
       component = <FaHome/>;
      break;
     case "School":
       component = <FaSchool/>;
       break;
     case "Office":
     case "Friends":
       component = <FaAddressBook/>;
       break;
     case "General":
       component = <FaGlobe/>;
       break;
     default:
       console.log("Unknwon switch param: ", switchParam);
   }
   console.log(component);
   return component;
 };
