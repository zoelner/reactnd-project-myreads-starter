import React, { Component } from 'react';

class Books extends Component {
    render() {
        let { data, onMove } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => onMove( data, e.target.value) }>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{data.title}</div>
                    <div className="book-authors" >{data.authors}</div>
                </div>
            </li>

        )
    }
}

export default Books;