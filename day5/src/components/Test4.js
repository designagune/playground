import React, { Component } from "react";
// import $ from "jquery";

class Test4 extends Component {
    state = {
        data: [
            { no: 1, name: "홍길동" },
            { no: 2, name: "aaa" },
            { no: 3, name: "abc" },
            { no: 4, name: "Dog" },
            { no: 5, name: "Cat" },
            { no: 6, name: "한지평" },
            { no: 7, name: "선호형" },
        ],
        text: "",
    };

    // componentDidMount() {
    //     let msg = "";
    //     let $li = $("ul li");

    //     $("#text").keyup(function () {
    //         $li.hide();
    //         msg = $(this).val();
    //         let con = $li.find("span:contains(" + msg + ")");
    //         $(con).parent().show();
    //     });
    // }

    onChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    render() {
        const { data, text } = this.state;

        const filterData = data.filter((item) => {
            const re = new RegExp(text, "ig");
            return item.name.match(re);
        });

        return (
            <div>
                <input type="text" onChange={this.onChange} />
                <hr />
                <h2>검색결과</h2>
                {filterData.map((item) => (
                    <p key={item.no}>
                        {item.no} / {item.name}
                    </p>
                ))}
                <hr />
                <ul>
                    {data.map((user) => (
                        <li key={user.no}>
                            {user.no} / <span>{user.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Test4;
