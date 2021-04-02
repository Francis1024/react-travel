import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './header.module.css';
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import store from '../../redux/store';
import { LanguageState } from '../../redux/languageReducer';

interface State extends LanguageState {}

/**
 * 头部内容
 * @returns Jsx
 */
class HeaderClass extends React.Component<RouteComponentProps, State> {
	constructor(props) {
		super(props);
		const { language, languageList } = store.getState();
		this.state = {
			language,
			languageList
		};
	}
	render() {
		// const { history } = this.props;
		return (
			<div className={styles['app-header']}>
				{/* top header -  start */}
				<div className={styles['top-header']}>
					<div className={styles.inner}>
						<Typography.Text>让旅游更幸福</Typography.Text>
						<Dropdown.Button
							style={{ marginLeft: 20 }}
							overlay={<Menu>{this.state.languageList.map((e) => <Menu.Item>{e.name}</Menu.Item>)}</Menu>}
							icon={<GlobalOutlined />}
						>
							{this.state.language === 'en' ? 'English' : '中文'}
						</Dropdown.Button>
						<Button.Group className={styles['button-group']}>
							<Button>注册</Button>
							<Button>登陆</Button>
						</Button.Group>
					</div>
				</div>
				{/* top header - end */}
				<Layout.Header className={styles['main-header']}>
					<img src={logo} alt="logo" className={styles['App-logo']} />
					<Typography.Title level={3} className={styles.title}>
						{/* 咚咚旅游网 */}
					</Typography.Title>
					<Input.Search className={styles['search-input']} placeholder={'请输入旅游目的地，主题或者关键字'} />
				</Layout.Header>
				<Menu mode={'horizontal'} className={styles['main-menu']}>
					<Menu.Item key={2}>周末游鸭 </Menu.Item>
					<Menu.Item key={3}>跟团游</Menu.Item>
					<Menu.Item key="4"> 自由行 </Menu.Item>
					<Menu.Item key="5"> 私家团 </Menu.Item>
					<Menu.Item key="6"> 邮轮 </Menu.Item>
					<Menu.Item key="7"> 酒店+景点 </Menu.Item>
					<Menu.Item key="8"> 当地玩乐 </Menu.Item>
					<Menu.Item key="9"> 主题游 </Menu.Item>
					<Menu.Item key="10"> 定制游 </Menu.Item>
					<Menu.Item key="11"> 游学 </Menu.Item>
					<Menu.Item key="12"> 签证 </Menu.Item>
					{/* <Menu.Item key="13"> 企业游 </Menu.Item>
					<Menu.Item key="14"> 高端游 </Menu.Item>
					<Menu.Item key="15"> 爱玩户外 </Menu.Item>
					<Menu.Item key="16"> 保险 </Menu.Item> */}
				</Menu>
			</div>
		);
	}
}

export const Header = withRouter(HeaderClass);
