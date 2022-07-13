import { Component } from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux'
import store from '../../redux/stores';

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
        console.log(store.getState())
    }
}

const sonBsad = (state:any) =>{
        console.log(store.getState())
        console.log('zhujianC',state)
    return state
}
export default connect(sonBsad,null)(zhujianC) 
