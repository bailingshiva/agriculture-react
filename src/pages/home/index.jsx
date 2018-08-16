import React        from 'react';
import { Link }     from 'react-router-dom';
import TopNav from 'components/top-nav/index.jsx'
class Home extends React.Component{
    render(){
        return (
            <div>
               <TopNav />
                <div className="home-banner">
                    <img src={require('assets/images/banner.jpg')} alt="" />
                </div>
                <div className="home-keywords">
                    <span className="active">推荐</span>
                    <Link to="/goods" >新鲜水果</Link>
                    <Link to="/goods" >特色熟食</Link>
                    <Link to="/goods" >坚果/果干</Link>
                </div>
                <div className="home-recommend">
                    <div className="home-recommend-box">
                        <div className="home-recommend-img"><img src={require('assets/images/zutu-img0.jpg')} alt="" /></div>
                        <div className="home-recommend-title"><p>百香果补充维C必备佳品</p><span>立即预定</span></div>
                    </div>
                    <div className="home-recommend-box">
                        <div className="home-recommend-img"><img src={require('assets/images/zutu-img1.jpg')} alt="" /></div>
                        <div className="home-recommend-title"><p>百香果补充维C必备佳品</p><span>立即预定</span></div>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods-title"><i className="fa fa-bookmark"></i>本周TOP10产品</div>
                    <div className="goods-list">
                        <div className="goods-box">
                            <div className="goods-img">
                                <img src={require('assets/images/tu.jpg')} alt="" />
                            </div>
                            <div className="goods-right">
                                <p>百香果补充维C必备佳品</p>
                                <div>百香果补充维C必备佳品百香</div>
                                <span>立即预定</span>
                            </div>
                        </div>
                        <div className="goods-box">
                            <div className="goods-img">
                                <img src={require('assets/images/tu.jpg')} alt="" />
                            </div>
                            <div className="goods-right">
                                <p>百香果补充维C必备佳品</p>
                                <div>百香果补充维C必备佳品百香</div>
                                <span>立即预定</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;