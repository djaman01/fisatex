
const CopyrightUpdate = () => {
  return (
    <>
{/* Ne pas mettre div car c'est un block element, et on ne peut aps mettre inline-block dans className */}
    <span className='inline-block ml-2'> 
      © {new Date().getFullYear()}
    </span>
    
    </>
  )
}

export default CopyrightUpdate