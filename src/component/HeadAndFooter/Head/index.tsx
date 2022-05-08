import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Menu} from "antd";
import './head.less';
import routesList from "./routesList";

const {SubMenu} = Menu;

function Head(props) {
  const {global, dispatch} = props;
  const [scrollTop, setScrollTop] = useState(false);
  const {activeMenu} = global;
  useEffect(() => {
    changeActiveMenu(props.history?.location?.pathname);
    window.onscroll = () => {
      const newScrollTop = document.documentElement.scrollTop;
      setScrollTop(newScrollTop > 0);
    }
  }, []);

  function changeActiveMenu(newMenu: string) {
    dispatch({
      type: 'global/changeActiveMenu',
      payload: {
        activeMenu: newMenu,
      },
    });
  }

  const handleClick = (e) => {
    changeActiveMenu(e.key);
    props.history.push(e.key);
  }
  const style1 = {
    backgroundColor: 'rgba(1,99,175,1)',
  };
  const style2 = {
    backgroundColor: 'transparent',
  }
  const thisStyle = scrollTop ? style1 : style2;
  return (
      <div className={'zy_public_head'}
           style={thisStyle}
      >
        <div className={'content'}>
          <div>
            <img src={logo} alt="logo"/>
          </div>
          <div>
            <Menu onClick={handleClick}
                  selectedKeys={[activeMenu]}
                  mode="horizontal"
                  items={routesList.map((g) => {
                    if(g.children){
                      g.children = g.children.map((x) => {
                        return {
                          ...x,
                          key: x.path,
                          title: x.name,
                          label: x.name,
                        }
                      })
                    }
                    return {
                      ...g,
                      key: g.path,
                      title: g.name,
                      label: g.name,
                    };
                  })}
            />

          </div>
        </div>
      </div>
  );
}

export default connect(({global}) => {
  return {
    global
  };
})(Head);
