const {User} = require('../models/userModel');
const {generateOTP,verifyOTP} = require('../helpers/otpGeneration');
const jwt = require('jsonwebtoken');
const sendOTP = async (req, res) => {
    try {
      const { email } = req.body;
      const _user = await User.findOne({where:{email: email}});
      if (!_user) {
        let {otp}=await generateOTP(email,8,600);
        return res.status(200).json({ message: 'SMS OTP Successfyll Sent:'+otp });
      }
      else{
        let {otp}=await generateOTP(email,8,600);
        return res.status(200).json({ message: 'SMS OTP Successfyll Sent:'+otp });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const loginWithOTP = async (req, res) => {
    try {
      const { email,role,otp } = req.body;
      const _user = await User.findOne({where:{email: email}});
      if (!_user) {
        let {success,message}=await verifyOTP(email,otp);
        if(success)
        {
          let newUser=new User({email: email, role: role});
          await newUser.save();
          let _secret=process.env.JWT_SECRET || 'rajasekhar-secret-key';
          const token = jwt.sign({ user_id: newUser.user_id ,role:newUser.role,email:newUser.email}, _secret , { expiresIn: '1h' });
          return res.status(200).json({ message: 'user successfully created',access_token:token});
        }
        else
        {
          return res.status(200).json({ message: message});
        }
      }
      else{
        let {success,message}=await verifyOTP(email,otp);
        if(success)
        {
          let _secret=process.env.JWT_SECRET || 'rajasekhar-secret-key';
          const token = jwt.sign({ user_id: _user.user_id ,role:_user.role,email:_user.email}, _secret , { expiresIn: '1h' });
          return res.status(200).json({ message: message,access_token:token});
        }
        else
        {
          return res.status(200).json({ message: message});
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {sendOTP,loginWithOTP};
