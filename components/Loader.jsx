import { TailSpin } from  'react-loader-spinner'
function Loader(){
    return(
        
        <TailSpin
        height="32"
        width="32"
        color="#4EE1A0"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      
      
        
    )
}
export default Loader