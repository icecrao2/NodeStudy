const crypto = require('crypto');


const createSalt = () => {

  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf)=>{
      
      if (err) reject(err);
      resolve(buf.toString("base64"));

    })
  });

};

const createCryptoPassword = async (password) => {
  
  const salt = await createSalt();
  return new Promise((resolve, reject) => {

    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({password : key.toString("base64"), salt});
    })

  });

}

const getCryptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({password : key.toString("base64"), salt});
    })
  })
}


const main = async (password) => {

  const cryptoPass = await createCryptoPassword(password);
  console.log(cryptoPass);
  const getCrypto = await getCryptoPassword(password, await createSalt());


  console.log(getCrypto);
}

main("jaewoong");