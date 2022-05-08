import React, { useRef, useEffect, useState } from 'react';
import './index.less';
import ReactToPrint from "react-to-print";
import {Button} from 'antd';
import Content from '../Content/index';

export default function Home(props) {
    const printDom = useRef();
    return <div className={'home'}>
        <ReactToPrint
            trigger={() => {
                return  <Button type={'primary'}>打印</Button>;
            }}
            content={() => printDom.current}
        />

        <Content ref={printDom}/>
    </div>

}