import TableHead from "./TableHead"
import TableRow from './TableRow'
import { useSelector } from "react-redux"

const Transactions = () => {
  const transactions = useSelector((state) => state.transaction.value)
  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <table className='rounded'
      style={{background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'}}>
        <TableHead 
          titleOne={'UserId'} titleTwo={'Status'}
          titleThree={'Date'} titleFour={'Transaction type'} titleFive={'Action'}
        />
        <tbody className='shadow-sm'>
          {transactions &&
            transactions.map((transaction, index) => 
            <TableRow  titleOneValue={transaction.userId} titleTwoValue={transaction.transaction_status}
              titleThreeValue={transaction.date} titleFourValue={transaction.transaction_type}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions