import CryptoJS from 'crypto-js'

export default {
  encryptStringData (payload, secret = process.env.pannt) {
    const encryptToken = CryptoJS.AES.encrypt(payload, secret).toString()
    return encryptToken
  },

  encryptObjectData (payload, secret = process.env.pannt) {
    const encryptToken = CryptoJS.AES.encrypt(
      JSON.stringify(payload),
      secret
    ).toString()
    return encryptToken
  },

  decryptObjectData (payload, secret = process.env.pannt) {
    const bytes = CryptoJS.AES.decrypt(payload, secret)
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  },

  decryptStringData (payload, secret = process.env.pannt) {
    const bytes = CryptoJS.AES.decrypt(payload, secret)
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    return originalText
  }
}
