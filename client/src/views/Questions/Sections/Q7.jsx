import React from "react"
import {Button, Form, Input} from "antd"
import "../Questions.css"

function embedSpotify(link) {
    var linkArr = link.split('/')
    var embedStr = "embed/"
    linkArr[3] = embedStr.concat(linkArr[3])

    console.log(linkArr[3])

    return linkArr.join("/")
}

export default class Q7 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          spotifyLink: "default"
            
        }
    }

    saveData = values => {
        localStorage.setItem("spotify", values.spotify);
    };


    onFinish = values => {
        console.log('Success:', values.spotify);
        this.setState({ spotifyLink: values.spotify })
    };

    render() {

        const navButton = {
            borderRadius: "10px",
            margin: "10px",
            width: "100px"
        }

        let songLink = this.state.spotifyLink
        console.log(songLink)
        let newLink = embedSpotify(this.state.spotifyLink)
        const linkFrame = (this.state.spotifyLink === "default" ? <br/> : <iframe src={newLink} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)

        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div className="create-text" style={{fontSize: "1.5em", marginBottom: "0.5em"}}>
                    Add a soundtrack
                </div>
                <Form
                    onFinish={this.onFinish}
                    scrollToFirstError>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Form.Item 
                        label="Link"
                        name="spotify"
                        rules={[
                            {
                                type: "url",
                                message: "This field must be a valid url."
                            }
                        ]}>
                            <Input placeholder="Spotify Track Link" style={{width: "15em", borderRadius: "10px"}}/>
                           
                        </Form.Item>
                    </div>
                
                    <br />
                        <button type="primary" type="submit" className= "upload-small">Upload</button>
                    <br />
                    <div>
                    {linkFrame}
                    </div>

                    <div className="create-text" style={{width: "60%", margin: "auto"}}>
                    To find the link of a Spotify Song or Playlist, open up Spotify on your computer and search up the song/playlist 
                    that you would like to upload. Click on the "...", then press "share" and "copy playlist/song link". You can now copy the link into
                    the input box above and hit "upload".
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button type="primary" onClick={this.props.prev} style={navButton}>Previous</Button>
                    
                        <Button type="primary" onClick={this.props.next} style={navButton}>Skip/Next</Button>
                    </div>
                </Form>
            </div>);
    }
}
