const TableHead = ({
    titleOne, titleTwo, titleThree, titleFour, titleFive
}) => {
  return (
    <thead>
      <tr className='col-md-12 bg-dark'>
        <th className='col-md-4 p-3 text-light'>{titleOne}</th>
        <th className='col-md-4 p-3 text-light'>{titleTwo}</th>
        <th className='col-md-4 p-3 text-light'>{titleThree}</th>
        <th className='col-md-4 p-3 text-light'>{titleFour}</th>
        <th className='col-md-4 p-3 text-light'>{titleFive}</th>
      </tr>
    </thead>
  )
}

export default TableHead