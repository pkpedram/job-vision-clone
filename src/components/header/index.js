import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import desktopPrimaryLogo from '../../assets/img/header-logo-primary-desktop.svg'
import Button from '../button'


import arrowIcon from '../../assets/img/angle-thin-white.svg';
const Header = ({
   headerOptions,
   isLogin,
   headerSettings,
   userInfo
 }) => {
  
  return (  headerSettings.shown ? 
    <div className='fixed h-20 bg-white top-0 rounded-b-xl w-full shadow-sm flex items-center z-50 justify-center'>
      <div className='flex items-center justify-between max-w-7xl w-3/5'>
        <div className='flex items-center'>
          {
            headerOptions.map((item) => (
              <Link to={item.link} className='mx-2 text-xs'>{item.title}</Link>
            ))
          }
        </div>
        <div className='flex items-center ltr'>
          <Link to='/'><img src={desktopPrimaryLogo}  className="pr-4 border-grayF1 border-r-2"/></Link>
          {
            isLogin ? 
            <Link to="/profile" className='bg-blueF2 flex items-center justify-between w-40 px-4 py-3 ml-3 rounded-md'>
                
                <p className='text-white text-xs'>
                  {userInfo.name} {userInfo.lastname}
                </p>

                <img src={arrowIcon} />
            </Link>
            :
            <>
            <Link to='/employers' className='mx-2 mr-4 text-sm text-gray73'>
          بخش کارفرمایان
          </Link>
          <Button to='/login' title='ورود / ثبتنام کارجو' />
            </>
          }
        </div>
      </div>
    </div>
    :
    null
  )
  
}

const mapStateToProps = state => ({
  headerOptions: state.publicApi.headerOptions,
  isLogin: state.userStates.isLogin,
  headerSettings: state.publicApi.headerSettings,
  userInfo: state.userStates

});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header);