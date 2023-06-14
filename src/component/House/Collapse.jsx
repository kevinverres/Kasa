import { useState } from "react";
import '../../assets/css/Collapse.css';
import arrow from '../../assets/img/arrow.png';

function Collapse({title, datas}) {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
    };
    
    

    if (title === "Description") {
        return (
            <div className="collapse">
                <button className="collapse-btn" onClick={toggle}>{title}
                    <img 
                        className={ open ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content"
                    />
                </button>
                <div className={open ? "content-show" : "content-parent"}>
                        {[datas].map((data, index) => {
                            return (
                                <p key={index}>{data}</p>
                            )
                        })}
                    </div>
            </div>
        )
    } else if (title === "Équipements") {
        return (
            <div className="collapse">
                <button className="collapse-btn" onClick={toggle}>{title}
                    <img
                        className={ open ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content"
                    />
                </button>
                <div className={open ? "content-show2" : "content-parent2"}>
                        {datas.map((data, index) => {
                            return (
                                <p key={index} className="collapse-equipment">{data}</p>
                            )
                        })}
                    </div>
            </div>
        )
    } else {
        return (
            <div className="collapse2">
                <button className="collapse-btn2" onClick={toggle}>{title}
                    <img 
                        className={ open ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content"
                    />
                </button>
                <div className={open ? "content-show" : "content-parent"}>
                        {[datas].map((data, index) => {
                            // console.log(index, data)
                            return (
                                <p key={index}>{data}</p>
                            )
                        })}
                    </div>
            </div>
        )
    }
    
}

export default Collapse;