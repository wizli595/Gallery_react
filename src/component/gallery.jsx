/* eslint-disable react/prop-types */

const Gallary = ({ imgSrc, imgFunc }) => {
    return (<>

        <div className="w-64 " >
            <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={imgSrc} alt="s" onClick={imgFunc} />
        </div>
    </>);
}

export default Gallary;