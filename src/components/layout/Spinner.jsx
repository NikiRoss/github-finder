import spinner from './assets/draw-spinner.gif'


function Spinner() {
  return (
    <div className="w-100 mt-20">
        <img src={spinner} width={180} alt="Loading ..." />
    </div>
  )
}

export default Spinner