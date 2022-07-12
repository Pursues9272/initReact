import { Component } from 'react';
import { Button } from 'antd';
import ZhujianB from './zhujianB'
import ZhujianC from './zujianC'
import './xaa.scss'
import { Link } from "react-router-dom";

interface iiiasdA {
    minini: number
}

export default class zhujianA extends Component<any,iiiasdA>{
    constructor(props: any) {
        super(props)
        this.state ={
            minini: 0
        }
    }
    render(){
        return(
            <>
                <div className='abb'>
                    <ZhujianB></ZhujianB>
                    <ZhujianC></ZhujianC>
                    <Button style={{ margin: '10px 0' }} type="primary" danger>
                        <Link to="/">回家</Link>
                    </Button>
                </div>
            </>
        )
    }
}