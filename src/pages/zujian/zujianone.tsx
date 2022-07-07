import { Component } from 'react';
import { Col, Row, Button } from 'antd';
import './zujianone.scss'

interface oneSta {
    superone: number,
}

interface cwoneSta {
    daican: (data: any) => void
}
export default class zujianOne extends Component<cwoneSta, oneSta> {
    constructor(props: any) {
        super(props)
        this.state = {
            superone: 1,
        }
    }
    render() {
        const { daican } = this.props
        console.log(daican)
        return (
            <>
                <h2>我有一头小毛驴我从来也不骑</h2>
                <Button type="primary" danger onClick={() => { this.props.daican('我有一头小毛驴我从来也不骑') }}>
                    父传子函数带参传递
                </Button>
                <Row>
                    <Col span={24}>
                        突然有一天我心血来潮，骑它去赶集
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        codesandbox是一个优秀的Web IDE大型开源项目。其中IDE部分使用react+vscode构建，使用了大量的开源模块，代码结构清晰，逻辑严谨。我在学习codesandbox的源码时，开发者们正在将状态管理从mobx + mobx-state-tree + cerebral一整套转移到overmind上。我在阅读这份源码的过程中收获了很多知识技巧，不论从代码的整体结构，还是一些实用模块的使用，还有大型项目的规范构建以及javascript和react的写法上都受益良多。所以我准备用一个系列的文章来简要解读codesandbox的源码，总结一下经验技巧。
                    </Col>
                    <Col span={8}>
                        1，什么是 CodePen？
                        CodePen（代码笔）一款前端所见即所得的工具，我们可以在线编辑制作前端页面，所见即所得。同时网站提供所有常见的 js、css 库，并且支持流行技术（如 SASS），免去了我们自建平台的麻烦。
                        官网地址：https://codepen.io
                        2，CodePen 主要功能
                        即时预览。我们甚至可以本地修改并即时预览别人的作品。支持多种主流预处理器。
                        快速添加外部资源文件。只需在输入框里输入库名， CodePen 就会从 cdnjs 上寻找匹配的 css 或 js 库。
                        免费创建模板。支持创建三个模板，不是每个作品都需要从白板开始。
                        优秀的外嵌体验。在 WordPress 或 Reddit 等支持 oEmbed 的平台上，只要简单地把链接贴入编辑框，发布后会自动转为嵌入作品。
                    </Col>
                    <Col span={8}>
                        StackBlitz 无需注册，使用 Github 账号即可登录。其界面风格和 Visual Studio Code 极为相似，支持前端三驾马车 Angular，React 和 Vue 项目的创建，包含 Web 项目在线开发，自动管理项目依赖，自动编译，页面效果实时预览等实用功能。
                        [此处插入动画]
                        StackBlitz 一个典型的使用场景：Jerry 在开发过程中发现某个 Angular 功能点，没有按照我期望的方式工作。显然是我使用的方法不对，我想寻求团队内 Angular 大佬的帮助。
                        简单地把我遇到问题的代码和错误截图发给大佬们，显然是一种不礼貌的做法。仅仅凭借静态代码和错误提示远远不够，最好能提供一个大佬能够在其本地方便地复现问题的环境：StackBlitz 就是一个比较好的选择。
                        于是我在 StackBlitz 里创建一个简单的 Angular 工程，把我遇到的问题在这个 Angular 工程里复现，然后通过下图的 Share 按钮，将项目 url 发生给团队大佬。对方在浏览器里打开该 url，就可立即复现我的问题。
                    </Col>
                </Row>
            </>
        )
    }
}