import { Component } from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux'

interface iiiasdC {
    minini: number
}

class zhujianC extends Component<any,iiiasdC>{
    constructor(props: any) {
        super(props)
        this.state ={
            minini: 0
        }
    }
    render(){
        return(
            <div>
                {/* 1 */}
                {this.props.count}
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}

const sonBsad = (state:any) =>{
    console.log('zhujianC',state)
    return state
}
export default connect(sonBsad,null)(zhujianC) 
