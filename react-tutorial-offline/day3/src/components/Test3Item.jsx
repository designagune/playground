import React, { Component } from "react";

class Test3Item extends Component {
    render() {
        const {
            props: {
                item: { no, poster, title, actor, director, date },
                onRemove,
            },
        } = this;

        return (
            <article>
                <div className="left">
                    <img src={poster} alt="poster" />
                </div>
                <div className="right">
                    <h3>{title}</h3>
                    <ul>
                        <li>출연진:{actor}</li>
                        <li>감독:{director}</li>
                        <li>개봉일:{date}</li>
                    </ul>
                    <button onClick={() => onRemove(no)}>삭제</button>
                </div>
            </article>
        );
    }
}

export default Test3Item;
