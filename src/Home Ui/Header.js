function Header() {
    return (
    <div> 
       
            <nav class="navbar background"> 
                <ul class="nav-list"> 
                    <div class="logo"> 
                        <img src= 
"https://static-00.iconduck.com/assets.00/tracking-icon-512x512-uhc87mfh.png" /> 
<h2>&nbsp;Application Tracking System</h2>
                    </div> 
                    
                    <li><h2> </h2></li>
                    <li><h2><a href="#Home">Home</a></h2></li> 
                    <li><h2><a href='#Signup'>Sign Up</a></h2></li>
                </ul> 
  
                <div class="rightNav"> 
                    <input placeholder="Search"type="text" name="search" id="search" /> 
                    
                </div> 
            </nav> 
            </div>
    );
}
export default Header;