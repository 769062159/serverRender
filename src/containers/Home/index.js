import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet'
import { getHomeList } from './store/actions';
import styles from './style.css'
import withStyles from '../../WithStyle'

class Home extends Component {
	getList() {
		const { list } = this.props;
		return list.map(item => <div key={item.id} className={styles.item}>{item.title}</div>)
	}
	componentWillMount(){
		if(this.props.staticContext){
            this.props.staticContext.css.push(styles._getCss())
		}
	}
	render() {
		return (
            <Fragment>
                <Helmet>
					<title>这是苑百琦的SSR新闻页面-丰富多彩的资讯</title>
                    <meta name='description' content='这是苑百琦的SSR新闻页面-丰富多彩的资讯'/>
				</Helmet>
                <div className={styles.container}>
                    {this.getList()}
                </div>
			</Fragment>
		)
	}

	componentDidMount() {
		if (!this.props.list.length) {
			this.props.getHomeList();
		}
	}
}

const mapStateToProps = state => ({
	list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
	getHomeList() {
		dispatch(getHomeList());
	}
})
const ExportHome= connect(mapStateToProps, mapDispatchToProps)(withStyles(Home,styles));
ExportHome.loadData = (store) => {
    // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList())
}
export default ExportHome
