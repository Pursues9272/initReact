import { Component } from 'react';


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
    render() {
        return (
            <>

            </>
        )
    }
} 