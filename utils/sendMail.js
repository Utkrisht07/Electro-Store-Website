const dotenv = require("dotenv");
dotenv.config();
const AWS = require("aws-sdk");

AWS.config.update({
	accessKeyId: process.env.SES_ACCESS_KEYID,
	secretAccessKey: process.env.SES_SECRET_KEY,
	region: "ap-south-1",
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const email_ids = ["sharmautkrisht@gmail.com"]

module.exports.sendEmail = async ({name,message,email}) => {
	let params = {
		Destination: {
			BccAddresses: [],
			CcAddresses: [],
			ToAddresses: email_ids,
			// ToAddresses: ["dnyaneshwarbirajdar89@gmail.com"],
		},
		Message: {
			Body: {
				Html: {
					Charset: "UTF-8",
					Data: message,
				},
				Text: {
				Charset: "UTF-8",
				Data: "Electro Web Store",
				},
			},
			Subject: {
				Charset: "UTF-8",
				Data: `New Query from ${name}`,
			},
		},
		Source: "atmadeep.das@bjtmail.com",
	};
	const sendEmail = ses.sendEmail(params).promise();

	sendEmail
	.then((data) => {
		console.log("Email sent");
	})
	.catch((err) => {
		console.log(err);
	});
}





