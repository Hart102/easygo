import Button from "../Button"

const Model = ({
    text,
    positiveAction,
    negativeAction,
}) => {
  return (
    <div className="fixed-top px-4 model d-none" 
    style={{
        height: '100vh', 
        background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9))'
    }}>
        <div className="col-md-3 bg-white shadow mx-auto text-center my-5 p-5 rounded fw-light">
            <p className="text-center py-2">{text}</p>
            <div className="d-flex justify-content-center">
                <Button 
                    classes={'btn text-light border rounded me- py-1 px-5'}
                    background='#54A945'
                    text={'Yes'}
                    func={positiveAction}
                />
                <Button 
                    classes={'btn text-light border rounded me- py-1 px-5'}
                    background='#DC4246'
                    text={'No'}
                    func={negativeAction}
                />
            </div>
        </div>

    </div>
  )
}

export default Model