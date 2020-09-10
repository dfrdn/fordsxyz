const md5 = require('md5')

exports.handler = (event) => {
  const { link } = event.queryStringParameters
  const { SCMACHINE_API_KEY, SCMACHINE_API_SECRET } = process.env
  const hash = md5(`${link}${SCMACHINE_API_SECRET}`)
  console.log(hash)
  return {
    statusCode: 200,
    body: `https://api.screenshotmachine.com/?key=${SCMACHINE_API_KEY}&url=${encodeURIComponent(
      link
    )}&dimension=1920x1080&hash=${hash}`,
  }
}
