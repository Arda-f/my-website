import node from "../icons/node.svg"
import js from "../icons/javascript.svg"
import py from "../icons/python.svg"
function content(){
    return(
        <div className="content">
            <div className="news-line">
                <div className="news-container">
                <div className="news-box">
                    <div className="news">
                        <div className="content-head">Python News</div>
                        <div className="content-body">
                            <img className="news-icon" src={py} alt="" />
                        </div>
                        <div className="content-foot"></div>
                    </div>
                </div>
                </div>
                <div className="news-container">
                    <div className="news-box">
                        <div className="news">
                            <div className="content-head">Javascript News</div>
                            <div className="content-body">
                                <img className="news-icon" src={js} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-container">
                    <div className="news-box">
                        <div className="news">
                            <div className="content-head">Nodejs News</div>
                            <div className="content-body">
                                <img className="news-icon" src={node} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
  
export default content
