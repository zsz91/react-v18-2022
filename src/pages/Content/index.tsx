import React, { forwardRef } from 'react';
import './styles.less';
import dayjs from "dayjs";
export default forwardRef(function Content(props, ref){


    return (
        <div className='content-div' ref={ref}>
           <h2>温江佳茂轮胎经营部出货单</h2>
            <div className={'table'}>
                <div className={'line_1'}>
                    <span>
                        购货单位(个人) :
                    </span>
                    <span>
                        联系人 :
                    </span>
                    <span>
                        单号:
                    </span>
                </div>
                <div className={'line_1'}>
                    <span>
                        地址 :
                    </span>
                    <span>
                        联系方式 :
                    </span>
                    <span>
                        打印日期 : {dayjs().format('YYYY-MM-DD HH:mm:ss')}
                    </span>
                </div>
            </div>
        </div>
    )
})