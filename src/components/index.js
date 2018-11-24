/**
 * @description  路由组件出口文件
 * @author Herbert Chow
 * @date 2018-11-16
 */

//组件
import Hbheader from './layout/Hbheader';

//页面
import App from '@appSrc/pages/App/App';
import IndexHome from '@appSrc/pages/IndexHome/IndexHome';
import FlowAnalysis from '@appSrc/pages/FlowAnalysis/FlowAnalysis';
import ReportSheet from '@appSrc/pages/ReportSheet/ReportSheet';
import Login from '@appSrc/pages/Login/Login';
import Register from '@appSrc/pages/Register/Register';
import Common404 from '@appSrc/pages/Common/Common404';
import Sale from '@appSrc/pages/IndexHome/Sale';
import User from '@appSrc/pages/IndexHome/User';
import Event from '@appSrc/pages/FlowAnalysis/Event';
import Funnel from '@appSrc/pages/FlowAnalysis/Funnel';
import Landed from '@appSrc/pages/FlowAnalysis/Landed';
import Product from '@appSrc/pages/ReportSheet/Product';

export default {
    Hbheader,
    FlowAnalysis,
    App,
    IndexHome,
    ReportSheet,
    Login,
    Register,
    Common404,
    Sale,
    User,
    Event,
    Funnel,
    Landed,
    Product,
}