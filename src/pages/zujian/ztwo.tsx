import { Component } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Upload } from 'antd';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from "redux-thunk";


interface oneSta {
    superone: number,
    dsjfh: string
}

interface initoneSta {
    dieceibo: boolean,
    dizifuc: string,
    chuangezizujian: any,
    // daican: (data: string) => void
}

export default class zujianOne extends Component<initoneSta, oneSta> {
    constructor(props: any) {
        super(props)
        this.state = {
            superone: 1,
            dsjfh: '黄梅戏'
        }
    }
    fbb = () => {
        // console.log(this.props.dieceibo)
        // console.log(this.props.dizifuc)
    }
    render() {
        const { chuangezizujian } = this.props
        // console.log(Provider)
        return (
            <>
                <Space>
                    Space
                    <Button type="primary" onClick={this.fbb}>Button</Button>
                    <Button type="primary" onClick={chuangezizujian}>胡图图子传父</Button>
                    {/* <Button type="primary" onClick={this.fbb}>欸！嘿！嘿！嘿！</Button> */}
                    <Upload>
                        <Button>
                            <UploadOutlined /> Click to Upload
                        </Button>
                    </Upload>
                    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                        <Button>Confirm</Button>
                    </Popconfirm>
                </Space>

            </>
        )
    }
    // 挂载生命周期之4，挂载后 插入 DOM 树中）立即调用
    componentDidMount() {
        // console.log(applyMiddleware)
        // console.log(compose)
        // console.log(createStore)
        // console.log(thunk)
    }
}