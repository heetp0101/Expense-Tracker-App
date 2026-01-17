import { UserOutlined } from '@ant-design/icons';
import 'antd';
import { Dropdown, Space, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import '../resources/default-layout.css';
function DefaultLayout(props)
{
    const navigate = useNavigate();
    const location = useLocation();
  // Extract the username from the location state
  const username = new URLSearchParams(location.search).get("username");

  const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick = (e) => {

    // delete  the record of that login user from user-login collection
    // localStorage.removeItem("transactionData");
    navigate("/login");
    message.success("user logged out successfully !");
    console.log('click', e);
  };

  const items = [
    {
      label: 'Logout',
      key: '1',
    }
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };



    return (
       
       <div className="layout">
            
            <div className="header d-flex justify-content-between align-items-center">
                <div>
                     <h1 className="logo" >SHEY MONEY</h1>
                </div>
                <div>
                    {/* Display the username if it's not an empty string */}
                    {/* {username && <h1 className='username'>{username}</h1>}    */}
                    <Space wrap class="user-profile">
                        <Dropdown.Button menu={menuProps} placement='bottom' icon={<UserOutlined />} >
                            <p class="username">{username}</p>
                        </Dropdown.Button>
                    </Space>

                </div>
            </div>

            <div className="content">
                {props.children}

             </div>
        </div> 
    
    );
}

export default DefaultLayout;
