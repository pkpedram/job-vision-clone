import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/button'
import Input from '../../../components/input'
import userAction from '../../../redux/actions/user'

const FirstStepLoginLayout = ({
    setLoginInfo,
    nextStep
}) => {
    const [fsInfo, setFsInfo] = useState()
  return (
    <div className='w-full flex flex-col items-center'>
        <Input 
        placeholder='شماره موبایل یا آدرس ایمیل را وارد کنید'
        customClass={'w-2/3 mb-5'}
        onChange={(e) => setFsInfo(e.target.value)}
        value={fsInfo}

        />
        <Button title={'ادامه'} to="" small onClick={() =>{
            if(fsInfo.includes('@')){
               setLoginInfo({email : fsInfo})
            }
            else{
                setLoginInfo({phoneNumber: fsInfo})
            }
            nextStep();
        }}/>

    </div>
  )
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = {
    setLoginInfo: userAction.setLoginInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstStepLoginLayout)