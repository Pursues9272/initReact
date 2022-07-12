import { Component } from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux'

interface iiiasdB {
    minini: number
}

class zhujianB extends Component<any,iiiasdB>{
    constructor(props: any) {
        super(props)
        this.state ={
            minini: 0
        }
    }
    fbbioio = () =>{
        console.log('zhujianB', this.props)
        // 发送action
        this.props.sendBbing()
    }
    render(){
        return(
            <>
                <Button type="primary" onClick={this.fbbioio} style={{ margin: '10px 0' }}>加伊</Button>
            </>
        )
    }
}
const fasong = (databbb:any) =>{
    return {
        sendBbing: () =>{
            databbb({
                type: 'add_action'
            })
        }
    }
}
// 加强组件，方法返回给组件内部
export default connect(null,fasong)(zhujianB) 