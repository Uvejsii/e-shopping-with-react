/*eslint-disable*/
import {useState} from "react";
import {Search} from "react-bootstrap-icons";

const SearchBar = ({searchProduct}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const onSearch = (e) => {
        const query = e.target.value

        setSearchQuery(query)
        searchProduct(query)
    }

    return (
        <div className="d-flex gap-2 search-container">
            <input type="text" placeholder="Search..." className="rounded border-0 ps-2 search-input"
                   value={searchQuery}
                   onChange={onSearch}/>
            <button className="search-button rounded">
                <Search className="fs-4"/>
            </button>
        </div>
    )
}
export default SearchBar;