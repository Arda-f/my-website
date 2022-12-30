import "../css/chat.css"
import "../css/news.css"
function content(){
    function sendMsg(){
        var message = document.getElementById("message")
        var chat = document.getElementById("chat")
        chat.innerHTML += `<p>${message.value}</p>` 
        message.value = ""
        chat.scrollTo(chat.scrollHeight, chat.scrollHeight)
    }
    return(
        <div>
            <div className="general">
                <div className="chat" id="chat"></div>
                <div className="stat"></div>
                <div className="controls">
                    <input type="text" id="message"/>
                    <button className="send" 
                    id="send"
                    onClick={sendMsg}
                    >Send</button>
                </div>
            </div>

            <div className="news">
                <div className="new">
                    <h3>Pytube Hazır Altyapı</h3>
                    <p>
                        Python kullanarak hazırlanmış basit bir altyapı 
                        ile çalışan bir video 
                        indirici <u>konsol</u> uygulaması
                    </p>
                </div>
                <div className="new"></div>
                <div className="new"></div>
            </div>
        </div>
        
    )
}
  
export default content
