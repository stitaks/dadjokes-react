import { useState } from "react";

export const Jokes = (props) => {

    const [like , setLike] = useState (props.likes);
    const [disLike , setDisLike] = useState (props.dislikes);

    const handleClickLike = () => {
        setLike(like + 1)
    }

    const handleClickDisLike = () => {
        setDisLike(disLike + 1)
    }

return (
    <div className="container">
        <div className="joke">
            <div className="joke__body">
            <div className="joke__user">
                <img className="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
                <p className="user-name">{props.userName}</p>
            </div>

            <p className="joke__text">
                {props.text}
            </p>
            </div>
            <div className="joke__likes">
            <button id="btn-up" className="btn-like btn-like--up" onClick={handleClickLike}></button>
            <span id="likes-up" className="likes-count likes-count--up">{like}</span>
            <button id="btn-down" className="btn-like btn-like--down" onClick={handleClickDisLike}></button>
            <span id="likes-down" className="likes-count likes-count--down">{disLike}</span>
            </div>
        </div>
    </div>
)
}