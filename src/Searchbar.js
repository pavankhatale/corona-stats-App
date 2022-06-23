import React from "react";
export default function Searchbar() {

  // const [searchInput, setSearchInput] = useState('');




  return (
    <div style={{textAlign:"center",marginTop:"2%"}}>
      <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" placeholder="Search" className="form-control" />
        
        </div>
        <button className="btn btn-primary">
          search
        </button>
      </div>
    </div>
  );
}
