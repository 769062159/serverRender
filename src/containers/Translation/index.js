import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet'
import { getTranslationList } from './store/actions';
import {Redirect} from 'react-router-dom'
import withStyles from '../../WithStyle'
import styles from './style.css'
class Translation extends Component {
	render(){
	    return this.props.login?(
            <Fragment>
                <Helmet>
                    <title>这是苑百琦的SSR翻译页面</title>
                    <meta name='description' content='翻译页面-丰富多彩的资讯'/>
                </Helmet>
            <div className={styles.container}>
                {this.getList()}
            </div>
            </Fragment>)
	    :<Redirect to='/'/>
	}

    getList() {
        const { list } = this.props;
        return list.map(item => <div key={item.id} className={styles.item}>{item.title}</div>)
    }

     componentDidMount() {
         if (!this.props.list.length) {
             this.props.getTranslationList();
         }
     }
}

const mapStateToProps = state => ({
    list: state.translation.translationList,
    login:state.header.login
});

const mapDispatchToProps = dispatch => ({
    getTranslationList() {
        dispatch(getTranslationList());
    }
})
const ExportTranslation=connect(mapStateToProps, mapDispatchToProps)(withStyles(Translation,styles));
ExportTranslation.loadData = (store) => {
    // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getTranslationList())
}
export default ExportTranslation