import {FaSearch} from "../../assets/icons";


export const SearchBar = () => {
    return (
        <div className="nav-section search-div md-screen-hidden mr-1">
            <label htmlFor="search-box">
                <input className="input-search btn-border-none bg-transparent" id="search-box" type="text" placeholder="Search" aria-label="Search Box"/>
            </label>
            <button className="nav-search-btn btn-border-none bg-transparent" type="submit">
                    <FaSearch className="icon-vr-align"/>
            </button>
        </div>
    )
}


