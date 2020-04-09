import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = {
    auth: true
}

export default {
    path: '/bootAdmin/systemMonitor',
    name: 'systemMonitor',
    meta,
    redirect: {
        name: 'system-monitor-index'
    },
    component: layoutHeaderAside,
    children: (pre => [
        {
            path: '/bootAdmin/systemMonitor/logManager/logininfo',
            name: `logininfo`,
            component: _import('bootAdmin/system/monitor/logMonitor/logininfo/index'),
            meta: {
                ...meta,
                title: '登录日志'
            }
        },
        {
            path: '/bootAdmin/systemMonitor/operlog',
            name: `logininfo`,
            component: _import('bootAdmin/system/monitor/logMonitor/operlog/index'),
            meta: {
                ...meta,
                title: '操作日志'
            }
        },
        {
            path: '/bootAdmin/systemMonitor/userOnline',
            name: `userOnline`,
            component: _import('bootAdmin/system/monitor/userOnline/index'),
            meta: {
                ...meta,
                title: '在线用户'
            }
        },
        {
            path:'/bootAdmin/systemMonitor/job',
            name: 'job',
            component: _import('bootAdmin/system/monitor/job/index'),
            meta:{
                ...meta,
                title:'定时任务'
            }
        },
        {
            path:'/bootAdmin/systemMonitor/jobLog',
            name: 'jobLog',
            component: _import('bootAdmin/system/monitor/jobLog/index'),
            meta:{
                ...meta,
                title:'调度日志'
            }
        }
    ])('systemMonitor-')
}