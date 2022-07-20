import React, {Component} from 'react';
import './RefreshButton.scss';
import {Tooltip} from 'antd';
import {SyncOutlined} from '@ant-design/icons';

interface RefreshButtonProps {
	handleClick: (e: any) => void,
	useInnerStyle: boolean,
	className?: string,
	refreshText?: string,
	style?: any
	disabled?: boolean
}

interface RefreshButtonState{
	spin: boolean
}

export default class RefreshButton extends Component<RefreshButtonProps, RefreshButtonState>{

	state = {
		spin: false
	}

	handleClick = (e: any) => {
		if(this.state.spin || this.props.disabled)
			return;

		this.setState({
			spin: true
		}, () => {
			setTimeout(() => {
				this.setState({spin: false});
			}, 1000);
		});

		this.props.handleClick(e);
	}

	render(){
		return (
			<span className={`sync-button-container ${this.props.className}`.trim()} style={{...this.props.style}}>
				<span
					className={`${this.props.useInnerStyle ? 'my-style' : ''} ${(this.state.spin || this.props.disabled) ? 'disabled' : ''}`.trim()}
					onClick={this.handleClick}
				>
					<Tooltip placement="top" title='刷新数据'>
						<SyncOutlined spin={this.state.spin} disabled={this.state.spin}/>
						<span>{this.props.refreshText}</span>
					</Tooltip>
				</span>
			</span>
		)
	}
}