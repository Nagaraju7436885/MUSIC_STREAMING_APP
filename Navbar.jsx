import React, { useEffect, useState } from "react";



const Navbar = ({ handleKeyPress, fetchMusicData }) => {

  const [keyword,setKeyword]=useState('search');
  const fetchTelugu=()=>{
    setKeyword('telugu');
  }
  const fetchEnglish=()=>{
    setKeyword('english');
  }
  const fetchHindi=()=>{
    setKeyword('hindi');
  }
  useEffect(()=>{
    fetchMusicData(keyword);
  })

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">

      
      <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px',backgroundColor:'lightblue'}}>
        <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'10px',fontSize:'15px',width:'300px',paddingTop:'45px'}}>
        <div onClick={fetchTelugu} style={{cursor:'pointer'}}><b>Telugu</b></div>
        <div  onClick={fetchHindi} style={{cursor:'pointer'}}><b>Hindi</b></div>
        <div  onClick={fetchEnglish} style={{cursor:'pointer'}}><b>English</b></div>
        </div>
        <div style={{fontSize:'60px',fontFamily:'cursive'}}><i><b>Let's Play</b></i></div>
        <div>
        <div style={{cursor:'pointer',marginRight:'90px',paddingTop:'50px'}}><b>Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up</b></div>
        </div>

      </div>
      <div className="box" id="navbarSupportedContent" style={{width:'fit-content',borderRadius:'20px',marginRight:'50px',float:'right',marginTop:'10px'}}>
        &nbsp;&nbsp;<i class="bi bi-search"></i>
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={handleKeyPress}
            className="form-control me-2 w-75"
            type="search"
            placeholder="Type any movie name??"
            aria-label="Search"
            style={{marginLeft:'10px',height:'40px',outline:'none',borderRadius:'25px'}}
          />
          &nbsp;&nbsp;
          <button onClick={fetchMusicData} className="btn" style={{display:'none'}}>
            Search
          </button>
        </div>
      
      <center style={{marginTop:'50px'}}>
      <a className="navbar-brand" style={{fontSize:'30px'}}>
        
       <b>Music App UI</b>
      </a>
      <p>728 inspirational designs, illustrations, and graphic elements from the world’s best designers.
Want more inspiration? Browse our search results...</p>
      </center>
    </div>

  </nav>
  );
};

export default Navbar;