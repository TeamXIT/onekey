const otpStorage = new Map();

const generateOTP = (email, digitCount, expirationTimeInSeconds) => {
  if (typeof digitCount !== 'number' || digitCount <= 0) {
    throw new Error('Invalid digit count. Please provide a positive integer.');
  }
  if (!email) {
    throw new Error('Email is required');
  }
  else{
    const min = 10 ** (digitCount - 1);
    const max = 10 ** digitCount - 1;

    const otp = Math.floor(min + Math.random() * (max - min + 1)).toString();

    const timestamp = Math.floor(Date.now() / 1000);
    const expirationTimestamp = timestamp + expirationTimeInSeconds;

    otpStorage.set(email, { otp, expirationTimestamp });

    return { otp, expirationTimestamp };
  }
};

const verifyOTP = (email, userEnteredOTP) => {
  const storedData = otpStorage.get(email);

  if (!storedData || !storedData.otp || !storedData.expirationTimestamp) {
    return { success: false, message: 'Invalid OTP or OTP expired' };
  }

  const { otp, expirationTimestamp } = storedData;

  if (userEnteredOTP !== otp) {
    return { success: false, message: 'Invalid OTP' };
  }

  const currentTimestamp = Math.floor(Date.now() / 1000);
  if (currentTimestamp > expirationTimestamp) {
    otpStorage.delete(email);
    return { success: false, message: 'OTP has expired' };
  }

  otpStorage.delete(email); 

  return { success: true, message: 'OTP verification successful' };
};
module.exports = {generateOTP,verifyOTP};