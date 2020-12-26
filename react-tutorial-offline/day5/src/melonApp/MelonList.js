import React, { Component } from "react";
import "./melonList.css";

class MelonList extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="melonList">
                <table>
                    <caption>멜론</caption>
                    <colgroup>
                        <col className="w1" />
                        <col className="w2" />
                        <col className="w3" />
                        <col className="w4" />
                        <col className="w5" />
                        <col className="w6" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>곡정보</th>
                            <th>앨범</th>
                            <th>좋아요</th>
                            <th>무비</th>
                            <th>상승/하락</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.key}>
                                <td>{item.rank}</td>
                                <td>
                                    <img src={item.poster} alt="poster" width="50" />
                                    {item.title}
                                </td>
                                <td>{item.singer}</td>
                                <td>{item.like}</td>
                                <td>1</td>
                                <td>{item.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MelonList;
