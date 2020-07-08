import React from "react";
import {Button, Upload, notification} from "antd";
import InboxOutlined from "@ant-design/icons/lib/icons/InboxOutlined";
import {uploadMedia} from "../QuestionsAPI";


export default class ShareMedia extends React.Component {
    uploadFile = (file) => {
        uploadMedia(file)
            .done(function(response) {
                if (response.success) {
                    console.log('file uploaded');
                } else {
                    notification.error({
                        message: 'Media upload failed',
                        description: response.message,
                        placement: 'bottomRight',
                    });
                }
            })
            .fail((error) => {
                notification.error({
                    message: 'Media upload failed',
                    description: (error.responseJSON && error.responseJSON.message) ? error.responseJSON.message : "Something went wrong, Please try again later.",
                    placement: 'bottomRight',
                });
            });
    };

    render() {
        return (
            <div id="shareMediaRoot">
                <div style={{fontSize: "2rem", marginBottom: "0.5rem"}}>
                    Share some of your favorite memories
                </div>
                <Upload.Dragger
                    action={this.uploadFile}
                    showUploadList="showDownloadIcon"
                    multiple>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Upload photos and videos</p>
                </Upload.Dragger>
                <div className="flexHCenter mt-4">
                    <Button type="primary" className="myButton mr-4" onClick={this.props.prev}>Back</Button>
                    <Button type="primary" className="myButton" onClick={this.props.next}>Skip/Next</Button>
                </div>
            </div>);
    }
}
