import { Component } from 'react';
import { Layout, Col, Row, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.scss';
// 导入组件/依赖

const { Header, Footer, Sider, Content } = Layout;

interface waterState {
    suipian: number
}

export default class Water extends Component<any, waterState>{
    constructor(props: any) {
        super(props)
        this.state = {
            suipian: 1
        }
    }
    haa = () => {
    }
    render() {
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
                            </Col>
                            <Col span={12}>
                                <Tooltip title="search">
                                    <Button shape="circle" icon={<SearchOutlined />} />
                                </Tooltip>
                            </Col>
                        </Row>
                    </Sider>
                    <Layout>
                        <Header className='hraderdodo'>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </>
        )
    }
} 