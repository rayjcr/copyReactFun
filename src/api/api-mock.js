// import fetch from '../utils/fetch';
import Mock from 'mockjs'

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
export function getAllUsers(params){
    return Mock.mock({
            "data|4-10": [{   // 随机生成4到10个数组元素
            'user_id': '@string("lower", 16, 16)',  // 中文名称
            'email': '@email',    // 属性值自动加 1，初始值为88
            'status|1': [
                    'pandding',
                    'online',
                    'offline',
                ],   // 18至28以内随机整数, 0只是用来确定类型
            'time_created': '@date("yyyy-MM-dd hh:mm:ss")',  // 日期

        }]
    })
}