
import './App.css';
import SearchIcon from './search.svg';

function SearchBar({ placeholder, value, setValue, fn }){


    return (
         <div className='search'>
          <input placeholder={placeholder}
          value={value}
          onChange={(event) => {setValue(event.target.value)}}
          >
          </input>
           <img src={SearchIcon} alt="Search" onClick={ ()=> {
            fn()}}  />
        </div>
    )
}

export default SearchBar;