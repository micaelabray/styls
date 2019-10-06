import React from 'react';
import axios from 'axios';

class DisplayCloset extends React.Component {
    state = {
        user: {},
        selectedFile: null
    };

    componentDidMount() {
        // verify logged in user
        axios.get('/api/user/current').then(res => {
            this.setState({
                user: res.data
            });
        });
    }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach(b => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
    }

    makeImageStr = imageBuffer => {
        const base64Flag = 'data:image/jpeg;base64,';
        const imageStr = this.arrayBufferToBase64(imageBuffer.data);
        return base64Flag + imageStr;
    };

    onClickHandler = () => {
        const data = new FormData();
        // data.remove('recfile', this.state.selectedFile);
        // data.remove('description', this.state.description);
        // data.remove('category', this.state.category);
        axios
            .remove('/remove', data)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err.response));
    };

    render() {
        const { clothingItems } = this.state.user;

        return (
            <div className="DisplayCloset">
                {this.state.user.clothingItems &&
                    this.state.user.clothingItems.map(item => (
                        <div>
                            <p>Category: {item.category}</p>
                            <p>Description: {item.description}</p>
                            {/* load image here */}

                            <img
                                style={{ height: 200 }}
                                alt="clothing item"
                                src={this.makeImageStr(item.image)}
                            />
                            <button className="btn btn-primary" onClick={this.onClickHandler}>Remove Item</button>
                        </div>
                        
                    ))}   
            </div>
        );
    }
}
export default DisplayCloset;