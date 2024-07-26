import PropTypes from 'prop-types';

CvInput.propTypes = {
    label: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
  };
  
  export default function CvInput({label, state, setState }){
return(
    <div className='labelAndInput'>
    <label>{label}</label>
    <input 
      type="text" 
      name = {label} 
      value = {state}
      onChange={(event) => setState(event.target.value)}
    ></input>

    </div>
)
}