import { useState } from "react";
import Gallary from "./gallery";
import { imgList } from "./img";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Display = () => {
    const [indx, setIndex] = useState(0)
    const [show, setShow] = useState(true)
    const handlShow = (i) => {
        setShow(false)
        setIndex(i)
    }
    const handleBack = () => {
        if (indx === 0) return;
        setIndex(pr => pr - 1)
    }
    const handleForword = () => {
        if (imgList.length - 1 === indx) return;
        setIndex(pr => pr + 1)
    }
    return (<>
        {!show && <div className="box relative max-w-lg  m-auto">
            <img src={imgList[indx]} alt="pic" className="w-full h-auto max-w-full rounded-lg " />
            <FontAwesomeIcon icon={faAngleLeft} beatFade={indx === 0 ? false : true} size="2xl" className="absolute  right-full" onClick={handleBack} />
            <FontAwesomeIcon icon={faAngleRight} beatFade={imgList.length - 1 === indx ? false : true} size="2xl" className="absolute  left-full" onClick={handleForword} />
            <FontAwesomeIcon icon={faXmark} beat size="xl" style={{ color: "white", }} className="absolute top-0 right-1" onClick={() => { setShow(true) }} />
        </div>}
        {show &&
            <div className="flex flex-wrap justify-center items-center gap-4 m-5">{imgList.map((el, i) => (<Gallary key={i} imgSrc={el} imgFunc={() => { handlShow(i) }} />))}</div>}

    </>);
}

export default Display;