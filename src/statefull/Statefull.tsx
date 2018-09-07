import * as React from "react";
import {style} from "typestyle/lib";
import {Base} from "../styles";
import "../styles.css";

export interface IStatefullProps {
    id?: string;
    content: string;
}

interface IStatefullDefaultProps {
    id?: string;
}

interface IStatefullState {
    myState: string;
}

const  Statefull: React.ComponentClass<IStatefullProps> =
    class extends React.Component<IStatefullProps & IStatefullDefaultProps, IStatefullState> {

        public static defaultProps: IStatefullDefaultProps = {
            id: "my_id",
        };

        constructor(props: IStatefullProps & IStatefullDefaultProps) {
            super(props);

            this.state = {myState: "useless"};
        }

        public render() {
            return <span id={this.props.id} className={styles}>{this.props.content}</span>;
        }
    };

/**
 * Styles (CSS like) of the component.
 */
const styles = style(Base.text, {
    color: "blue",
    fontSize: "50px",
    padding: "20px 20px 20px 0px",
});

export default Statefull;
