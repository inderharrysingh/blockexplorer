import './DropBox.scss'

function DropBox({ settask, object  }){

    return (
        <>
                <div className="select animated zoomIn">
                    <input type="radio" name="option" />
                    <span className="placeholder">Choose...</span>
                
                    {object.map((it, index) => (
                    <label key={index} onClick={() => { settask(index) }} className="option">
                        <input type="radio" name="option" />
                        <span className="title animated fadeIn"><i className="icon icon-speedometer"></i>{it.method}</span>
                    </label>
                    ))}

                    
                   
                </div>
        </>
    );
}


export default DropBox;