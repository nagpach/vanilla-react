import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card } from "../Card/Card";

export class CardList extends Component {
    render() {
        return (
            <ul className="c-card-list">
                {this.props.cardListItems.map(function(listItem, index) {
                    return (
                        <Card
                            key={`c-card-${index}`}
                            theme={listItem.theme}
                            title={listItem.title}
                            description={listItem.description}
                        />
                    );
                })}
            </ul>
        );
    }
}

CardList.propTypes = {
    listItems: PropTypes.array
}
