import TableHead from "./TableHead"
import TableRow from './TableRow'

const UsersList = () => {
  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <table className='rounded'
      style={{background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'}}>
          <TableHead 
            titleOne={'Name'}
            titleTwo={'Email'}
            titleThree={'Phone'}
            titleFour={'Action'}
          />
          <tbody className='shadow-sm'>
              <TableRow  
                titleOneValue={'Hart C Justman'}
                titleTwoValue={'hartjust553@gmail.com'}
                titleThreeValue={'0901122334'}
              />
          </tbody>
      </table>
    </div>
  )
}

export default UsersList