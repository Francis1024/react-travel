import React from 'react';
import styles from './App.module.css';
import { Header, Footer,SideMenu,Carousel } from './components';
import {Row,Col} from 'antd'
// import sideImage from './assets/images/sider_2019_12-09.png';
// import sideImage2 from './assets/images/sider_2019_02-04.png';
// import sideImage3 from './assets/images/sider_2019_02-04-2.png';

const App: React.FC = () => {
	return (
		<div className={styles.App}>
      <Header />
      {/* 页面内容 - start */}
      <div className={styles['page-content']}>
        <Row style={{marginTop:20}}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      {/* 页面内容 - end */}
			<Footer />
		</div>
	);
};

export default App;
