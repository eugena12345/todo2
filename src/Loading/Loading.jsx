import React from "react";
import style from './Loading.module.css'

const Loading = () => {
return (
    <div>
    
<div className={style["load-wrapp"]}>
      <div className={style["load-3"]}>
        <p>Loading</p>
        <div className={style["line"]}></div>
        <div className={style["line"]}></div>
        <div className={style["line"]}></div>
      </div>
    </div>
</div>
)

}

export default Loading;