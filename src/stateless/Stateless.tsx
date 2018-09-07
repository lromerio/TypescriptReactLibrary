import * as React from "react";
import {style} from "typestyle/lib";
import {Base} from "../styles";
import "../styles.css";

export interface IStatelessProps {
    id?: string;
    content: string;
}

const Stateless: React.StatelessComponent<IStatelessProps> = (props: IStatelessProps) => {
    return <span id={props.id} className={styles}>{props.content}</span>;
};

Stateless.defaultProps = {
    id: "my_id",
};

/**
 * Styles (CSS like) of the component.
 */
const styles = style(Base.text, {
    fontSize: "50px",
    padding: "20px 0px 20px 20px",
});

export default Stateless;
