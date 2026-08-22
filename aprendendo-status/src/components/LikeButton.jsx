import { useState } from "react"
import "./CSSassets/LikeButton.css"

export default function LikeButton()
{
    const [liked, setLike] = useState(false)
    const [randomId] = useState(() => Math.ceil(Math.random() * 70));
    return(
        <div className="curtindo-fotos">
            <div className="foto_perfil" style={{
                backgroundColor:"red",
                backgroundImage:`url(https://i.pravatar.cc/150?img=${randomId})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"50%",
                }}>
                <img src={`https://i.pravatar.cc/150?img=${randomId}`} alt="" />
            </div>
            <p data={liked ? "<3":"</3"} className="btn_like" onClick={()=>{setLike(!liked)}}>{liked ? "❤️ 1":"🤍"}</p>
        </div>
    )
}
