const packageJson = require('../../package.json'); // Importando o arquivo package.json

exports.getVersion = (req, res) => {
  const appName = packageJson.name;
    const appVersion = packageJson.version;
    res
        .status(200)
        .json({ 
            name: appName,
            message: 'OK',
            version: appVersion
        });;
};