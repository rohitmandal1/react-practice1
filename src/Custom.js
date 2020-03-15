import { useState } from "react";

function useCustomeCounter() {
    const [sno,rollNumber] = useState(1);
    const increseRollnum = () => {
        rollNumber(sno+1);
    };
    return{
        sno,
        increseRollnum 
    }
}

export default useCustomeCounter;