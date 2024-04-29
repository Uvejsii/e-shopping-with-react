/*eslint-disable*/
const SearchBar = ({searchProduct}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const onSearch = (e) => {
        const query = e.target.value

        setSearchQuery(query)
        searchProduct(query)
    }

    return (
        <div>
            <input type="text" placeholder="Search..."
                   value={searchQuery}
                   onChange={onSearch}/>
            <Search className="fs-4"/>
        </div>
    )
}
import {useState} from "react";

import {Search} from "react-bootstrap-icons";

export default SearchBar;