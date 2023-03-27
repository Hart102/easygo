import Button from "../../component/Button"
const Table = ({
    titleOneValue, titleTwoValue, titleThreeValue,
    titleFourValue
}) => {
  return (
    <tr className='col-md-12'>
        <td className='col-md-4 p-3 text-light fw-light'>{titleOneValue}</td>
        <td className='col-md-4 p-3 text-light fw-light'>{titleTwoValue}</td>
        <td className='col-md-4 p-3 text-light fw-light'>{titleThreeValue}</td>
        <td className={titleFourValue ? 'col-md-4 p-3 text-light fw-light' : 'd-none'}>{titleFourValue}</td>
        <td  className='col-md-4 p-3 d-flex'>
            <Button classes='btn rounded text-light mx-1' text='view' background='#C83B3E'/>
            <Button classes='btn rounded text-light' text='Block' background='#4A973F'/>
        </td>
    </tr>
  )
}

export default Table