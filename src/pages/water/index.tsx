import { Component } from 'react';
import './index.scss';
// 导入组件/依赖

interface waterState{
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
        console.log('范冰冰阿斯利康大家发')
    }
    render() {
        return(
            <>
                <div className='home-water'>
                    <div className='water-box'>

                    </div>
                </div>
            </>
        )
    }
} 