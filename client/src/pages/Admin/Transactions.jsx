import TableHead from "./TableHead"
import TableRow from './TableRow'

const usersList = () => {
  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <table className='rounded'
      style={{background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'}}>
          <TableHead 
            titleOne={'UserId'}
            titleTwo={'Status'}
            titleThree={'Date'}
            titleFour={'Transaction type'}
          />
          <tbody className='shadow-sm'>
              <TableRow  
                titleOneValue={'123445'}
                titleTwoValue={'Pending'}
                titleThreeValue={'03/03/2023'}
                titleFourValue={'Purchase'}
              />
          </tbody>
      </table>
    </div>
  )
}

export default usersList