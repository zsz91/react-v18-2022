import React, {useEffect} from 'react';
import  './basic.less';
export default function Basic(props){
    const { children, ...otherProps} = props;
    useEffect(()=>{
        if(props.location.pathname){
            window.scrollTo(0,0); // 回到页面顶部
            // window.location.reload();
        }
    }, [props.location.pathname]);
    return(
        <div style={{position: 'relative'}}>
            <div className={'basic_content'}>
                {children}
            </div>
        </div>
    )
}
