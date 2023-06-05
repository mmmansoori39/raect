import React from "react";

function Calc(){
    var fnum= 40;
    var snum= 28;
    function sum(a,b){
        return a+b;
    }
    return(
        <div className="calc">
            <ul>
                <li>The sum of {fnum} and {snum} is {sum(fnum,snum)}</li>
                <li>The sum of {fnum} and {snum} is {sum(fnum,snum)}</li>
                <li>The sum of {fnum} and {snum} is {sum(fnum,snum)}</li>
                <li>The sum of {fnum} and {snum} is {sum(fnum,snum)}</li>
            </ul>
        </div>
    );
}

export default Calc;