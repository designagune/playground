import React, { Component } from "react";
import "./Test4.css";
import Test4Sub1 from "./Test4Sub1";
import Test4Sub2 from "./Test4Sub2";
import Test4Sub3 from "./Test4Sub3";
import Test4Sub4 from "./Test4Sub4";

class Test4 extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occ: "",
        tel: "",
        addr: "",
    };

    onPlusStep = () => {
        this.setState({ step: this.state.step + 1 });
    };

    onMinusStep = () => {
        this.setState((state) => ({ step: state.step - 1 }));
    };

    onChange = (e) => {
        const {
            target: { name, value },
        } = e;

        this.setState({
            [name]: value,
        });
    };

    onBack = () => this.setState(() => ({ step: 1 }));

    render() {
        const { state, onChange, onMinusStep, onPlusStep, onBack } = this;
        const { step } = state;

        switch (step) {
            case 1:
                return <Test4Sub1 onPlusStep={onPlusStep} onChange={onChange} />;
            case 2:
                return (
                    <Test4Sub2
                        onPlusStep={onPlusStep}
                        onMinusStep={onMinusStep}
                        onChange={onChange}
                    />
                );
            case 3:
                return (
                    <Test4Sub3 state={state} onPlusStep={onPlusStep} onMinusStep={onMinusStep} />
                );
            case 4:
                return <Test4Sub4 step={step} onBack={onBack} />;
            default:
                throw new Error("Unhandled Error Component");
        }
    }
}

export default Test4;
