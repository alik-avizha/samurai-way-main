import loading from "../../../assets/images/loading.gif";
import React from "react";


let Preloader = (props: any) => {
    return (
        <div style={ {backgroundColor: "white"}}>
            <img src={loading} alt={'loading'} />
        </div>
    )
}
export default Preloader;