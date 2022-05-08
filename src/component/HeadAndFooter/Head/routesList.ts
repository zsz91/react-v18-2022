const routesList = [
    {
        path: '/Home',
        name: '首页',
    },
    {
        path: '/Product',
        name: '产品中心',
        children: [
            {
                path: '/Product/zhongtai',
                name: '知用中台',
            },
            {
                path: '/Product/ocr',
                name: 'OCR',
            },
            {
                path: '/Product/zhxyjcpt',
                name: '智慧校园基础平台',
            },
            {
                path: '/Product/xsgzzhglpt',
                name: '学生工作综合管理平台',
            },
            {
                path: '/Product/yzsfwpt',
                name: '一站式服务平台',
            },
            {
                path: '/Product/zhyrpt',
                name: '智能育人平台',
            },
            {
                path: '/Product/zhxqfxpt',
                name: '综合校情分析平台',
            },
        ],
    },
    {
        path: '/Solutions',
        name: '解决方案',
    },
    {
        path: '/Service',
        name: '服务体系',
    },
    {
        path: '/Cases',
        name: '典型案例',
    },
    {
        path: '/News',
        name: '新闻中心',
    },
    {
        path: '/About',
        name: '关于知用',
    }
]
export default routesList;
