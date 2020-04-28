import React from "react";
import TrelloCard from "./trello-card.component";

interface IProps {
    title: String
}
const TrelloList = ({title}: IProps) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            <TrelloCard/>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: 'lightgrey',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default TrelloList;
