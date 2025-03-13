

const EmailTableItem = ({email ,mongoId, date, }) => {

   const blogDate = new Date(date)
  return (
    <div className="mt-2 flex justify-between mx-2 border border-black">
             <span className='px-6 py-4'>
                {email?email:"No Address"}
             </span>
             <span className='px-6 py-4'>
               {blogDate.toDateString()}
             </span>
             
    </div>
  )
}

export default EmailTableItem