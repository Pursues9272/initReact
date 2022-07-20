import React, {Component } from 'react';
import {Button, Form,Cascader,DatePicker,Select,TreeSelect,Switch, Input, InputNumber, message, Modal, Popconfirm, Radio, Spin, Tag} from 'antd';
import {LoginOutlined, CheckOutlined, CloseOutlined, DeleteFilled, DeleteOutlined, DownloadOutlined} from '@ant-design/icons';
import './AiModelManagePage.scss';
import {ModalActionEnum} from "./emuum"
import RefreshButton from "./RefreshButton"
import { Link } from "react-router-dom";

interface AiModelManagePageState{
    searchInput: string,
    submitting: boolean,
    showModal: boolean,
    // 区分当前modal的动作，是上传还是修改
    action: ModalActionEnum,
    uploadProgress: number
}


export default class AiModelManagePage extends Component<any, AiModelManagePageState>{

        // 构造函数，启动组件时将调用此函数
        constructor(props: any) {
            // 道具传递
            super(props);
            console.log(props)
            // 组件属性
            this.state = {
                searchInput: '', // 搜索框输入内容
                submitting: false, // 
                showModal: false,//模型详情弹窗显示隐藏
                action: ModalActionEnum.UPDATE, // 状态变更
                uploadProgress: 0,
            }
        }

    showUploadModal = () => {
        this.setState({
          showModal: true,
          action: ModalActionEnum.CREATE,
        })
    }
    handleRefresh = () => {
        console.log("你会唱小星星吗");
    }
    handleCancel = () => {
        this.setState({
            showModal: false
        })
    }
    handleSubmit = () => {
        console.log("呜呜呜,提交咯");
    }
    handleFinish = (values: any) => {
        console.log("表单");
    }
    onFormLayoutChange = () => {
        console.log("樱桃山")
    }
    render() {
        const layout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                offset: 1, span: 18
            }
        }
        return (
            <div className='ai-model-manage-page'>
                <div className='functions-container'>
                    <span className='buttons-container'>
                        <Button icon={<DownloadOutlined />} type='primary' onClick={this.showUploadModal}>上传本地模型</Button>
                        <Link to="/">
                            <Button icon={<LoginOutlined />} type='primary'>回家</Button>
                        </Link>
                        <RefreshButton handleClick={this.handleRefresh} useInnerStyle={true} />
                    </span>
                    <Input.Search
                        allowClear
                        value={this.state.searchInput}
                        onChange={(e) => this.setState({searchInput: e.target.value})}
                        placeholder="输入樱桃山信息进行搜索"
                        className='search-input'
                        style={{width: '25vw'}}
                    />
                </div>
                {/* AI模型详情 */}
                <Modal
                    width='60vw'
                    visible={this.state.showModal}
                    title='AI模型详情'
                    onCancel={this.handleCancel}
                    footer={[
                        <Button onClick={this.handleCancel} icon={<CloseOutlined />} key='close'>
                            关闭
                        </Button>,
                        <Button onClick={this.handleSubmit} type='primary'
                            icon={<CheckOutlined />} key='submit' disabled={this.state.submitting}
                        >提交
                        </Button>
                    ]}
                >
                    <Spin spinning={this.state.submitting}
                          tip={
                              this.state.action === ModalActionEnum.UPDATE
                                  ? '修改中...'
                                  : (this.state.uploadProgress < 99.9 ? `${this.state.uploadProgress}%` : '写入到nfs中...')
                          }>
                         <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onValuesChange={this.onFormLayoutChange}
      size={"middle"}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
                    </Spin>
                </Modal>
            </div>
        )
    }
}