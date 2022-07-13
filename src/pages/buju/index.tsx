import { Component } from 'react';
import { Layout, Col, Row, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import ZujianOne from '../zujian/zujianone';
import Ztwo from '../zujian/ztwo'
import {connect} from 'react-redux'

import './index.scss';
import { stat } from 'fs';
// 导入组件/依赖

const { Header, Footer, Sider, Content } = Layout;

interface waterState {
    suipian: number,
    kaiguan: boolean,
    wenz: string
}

class Water extends Component<any, waterState>{
    constructor(props: any) {
        super(props)
        this.state = {
            suipian: 0,
            kaiguan: true,
            wenz: '我是一个爱动脑筋的小孩'
        }
    }
    faa = () => {
        this.setState({
            kaiguan: !this.state.kaiguan
        })
    }
    chuangezizujian = () => {
        this.setState({ kaiguan: !this.state.kaiguan })
    }
    daican = (data: string) => {
        this.setState({ wenz: data })
    }
    xiaoguangto = () => {
        this.setState({ wenz: '我是一个爱动脑筋的小孩' })
    }
    render() {
        let faa = null;
        if (this.state.kaiguan) {
            faa = <Button type="primary">
                熊大{this.props.count}
            </Button>
        } else {
            faa = <Button type="primary" danger>
                熊二
            </Button>
        }
        return (
            <>
                <Layout>
                    <Sider className='lay-Outermost'>
                        <div className='qut-one'></div>
                        <Row>
                            <Col span={12}>
                                <Button type="primary" icon={<SearchOutlined />}>
                                    Search
                                </Button>
                                {faa}
                                <Button type="primary" danger onClick={this.faa} ghost>
                                    光头强
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Tooltip title="search">
                                    <Button shape="circle" icon={<SearchOutlined />} />
                                </Tooltip>
                            </Col>
                        </Row>
                        {this.state.wenz}
                        <Button type="primary" danger onClick={this.xiaoguangto}>
                            小光头
                        </Button>
                    </Sider>
                    <Layout>
                        <Header className='hraderdodo'>Header
                            <Button style={{ margin: '0 10px' }} type="primary" danger>
                                <Link to="/">回家</Link>
                            </Button>
                        </Header>
                        <Content>
                            <ZujianOne daican={this.daican}></ZujianOne>
                        </Content>
                        <Footer>Footer
                            <Ztwo dieceibo={this.state.kaiguan} dizifuc={'父组件向子组件传值'} chuangezizujian={this.chuangezizujian}></Ztwo>
                        </Footer>
                    </Layout>
                </Layout>
            </>
        )
    }
} 

const sonWsad = (state: any) => {
    console.log("Water", state)
    return state
}
export default connect(sonWsad,null)(Water) 
