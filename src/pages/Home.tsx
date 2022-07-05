import { Component } from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import './Home.scss';
// 导入组件/依赖

// 创建接口，定义组件类别
interface HomeState{
    homeNum: number,
    homeValue: boolean,
    homeModel:string[]
}

// 类组件，传入每个参数的类型
export default class Home extends Component<any, HomeState>{
    // 构造函数，启用组件即调用
    constructor(props: any) {
        // 传递道具
        super(props)
        // 传递属性与接口类别属性一一对应
        this.state = {
            homeNum: 0,
            homeValue: false,
            homeModel: ['8']
        }
    }
    // 组件方法
    haa = () => {
        this.setState({
            homeNum: this.state.homeNum + 1
        })
        console.log(this.state.homeNum)
    }
    hbb = () => {
        if (this.state.homeNum > 0) {
            this.setState({
                homeNum: this.state.homeNum - 1
            })            
        }

        console.log(this.state.homeNum)
    }
    hcc = () => {
        this.setState({
            homeNum: 0
        })
    }

    // 唯一必须实现的方法，渲染组件模板
    render() {
        const huaHua=[];
        for(let i=0;i<this.state.homeNum;i++){
            huaHua.push(<span className='xiaohuahua' key={i}>🌼</span>)
        }
        return (
            // 必须使用一个顶级元素包裹
            <>
                {/* 样式写法class写做className */}
                <div className='angbuild'>
                <h1>My name is WangDaQiang🌞🌜🌼
                    {
                        this.state.homeModel.map( (item,index) =>{
                            return <span key={index}>🌼</span>
                        })
                    }
                </h1>
                <Button className='angelababe' onClick={this.haa} danger>小男孩加伊</Button>
                {/* 行内样式写法 */}
                <Button style={{margin: '0 10px'}} onClick={this.hcc} type="primary" danger>
                清空
                </Button>
                <Button className='angelababe' onClick={this.hbb} danger>小女孩格尔达</Button>
                <Button style={{margin: '0 10px'}} type="primary" danger>
                    <Link to="/">回家</Link>
                </Button>
                <hr />
                <h1>{this.state.homeNum}</h1>
                {huaHua}
                </div>
            </>
        )
    }
}