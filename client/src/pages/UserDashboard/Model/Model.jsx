import Button from "../../../component/Button"

const Model = ({
    text,
    positiveAction,
    negativeAction,
}) => {
  return (
    <div className="fixed-top px-4 model d-none" 
    style={{
        height: '100vh', 
        background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.0))'
    }}>
        <div className="col-md-4 bg-white shadow mx-auto text-center my-5 p-5 rounded fw-light">
            <p className="text-center">{text}</p>
            <div className="d-flex justify-content-center">
                <Button 
                    classes={'btn border me-4 py-1'}
                    text={'Yes'}
                    func={positiveAction}
                />
                <Button 
                    classes={'btn border me-4 py-1'}
                    text={'No'}
                    func={negativeAction}
                />
            </div>
        </div>

    </div>
  )
}

export default Model