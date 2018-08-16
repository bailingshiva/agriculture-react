import React        from 'react';
import { Link }     from 'react-router-dom';
import TopNav from 'components/top-nav/index.jsx'
class Goods extends React.Component{
    render(){
        return (
            <div>
                <TopNav />
                <div className="goods">
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

export default Goods;