/*eslint-disable*/
const SearchBar = ({searchProduct}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const onSearch = (e) => {
        const query = e.target.value

        setSearchQuery(query)
        searchProduct(query)
    }

    return (
        <>
            <input type="text" placeholder="Search..."
                   value={searchQuery}
                   onChange={onSearch}/>
            <Search className="fs-4"/>
        </>
    )
}
import {useState} from "react";

import {Search} from "react-bootstrap-icons";

export default SearchBar;