import React, { forwardRef } from 'react';
import './styles.less';

export default forwardRef(function Content(props, ref){


    return (
        <div className='content-div' ref={ref}>
           <h2>温江佳茂轮胎经营部出货单</h2>

        </div>
    )
})