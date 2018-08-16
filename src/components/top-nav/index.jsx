import React        from 'react';

class TopNav extends React.Component{
    render(){
        return(
            <div className="top-nav">
                <div className="top-nav-title"> Agriculture</div>
                <div className="top-nav-icons">
                    <i className="fa fa-search"></i>
                </div>
            </div>
        )
    }
}
export default TopNav