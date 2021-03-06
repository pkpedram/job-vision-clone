import React, { useState } from "react";
import Input from "../../../components/input";
import { userAction } from "../../../redux/actions";
import { connect } from "react-redux";
import Select from "../../../components/select";
import Button from "../../../components/button";

const RegisterLayout = ({ 
    loginInfo, 
    familiarityItems, 
    register, 
    setProfile,
    nextStep,
}) => {
  const [registerData, setRegisterData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    familiarityId: null,
  });
  return (
    <div className="w-4/5  flex flex-col items-center">
      <p className="text-right text-xs text-black57">
        حساب کاربری با این آدرس ایمیل وجود ندارد. برای ساخت حساب جدید در جاب
        ویژن، اطلاعات زیر را کامل کنید.
      </p>

      <Input
        customClass={"w-full my-3"}
        onChange={(e) => null}
        value={loginInfo.email}
      />
      <Input
        placeholder="شماره موبایل خود را وارد کنید"
        customClass={"w-full mb-3"}
        onChange={(e) =>
          setRegisterData({
            ...registerData,
            phoneNumber: e.target.value,
          })
        }
        value={registerData.phoneNumber}
      />
      <Input 
      password 
      
      onChange={e => setRegisterData({
          ...registerData,
          password: e.target.value
      })}
      value={registerData.password}
      />
        <Select 
        customClass={"w-full my-3"}
        onChange={(e) => setRegisterData({
            ...registerData,
            familiarityId: e
        })} options={familiarityItems} />

        <Button title='ثبت نام' small onClick={() => {
            register(registerData);
            setProfile(registerData);
            nextStep();
        }}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loginInfo: state.userStates.loginInfo,
  captchaState: state.captchaState,
  familiarityItems: state.publicApi.familiarityItems
});
const mapDispatchToProps = {
  setLoginInfo: userAction.setLoginInfo,
  register: userAction.register,
  setProfile: userAction.setProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterLayout);
