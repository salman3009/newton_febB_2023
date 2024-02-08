import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const LocalThemeBox=()=>{
    
    const {theme,setThemeToggler} = useContext(ThemeContext);

    return (<>
       <div className="box">
             {theme}
       </div>
      </>)
}