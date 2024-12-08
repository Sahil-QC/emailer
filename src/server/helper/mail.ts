import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { env } from "~/env";

const SENDER_MAIL = env.SENDER_EMAIL;
const SENDER_MAIL_PASSWORD = env.SENDER_EMAIL_PASSWORD;

type SendMailArgumentsTypes = {
  receiverEmail: string;
  mailSubject: string;
  content: string;
};
const sendMail = async ({
  receiverEmail,
  mailSubject,
  content,
}: SendMailArgumentsTypes): Promise<string> => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: SENDER_MAIL,
        pass: SENDER_MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: SENDER_MAIL,
      to: receiverEmail,
      subject: mailSubject,
      html: content,
    };

    const info: SMTPTransport.SentMessageInfo =
      await transport.sendMail(mailOptions);

    return info.messageId;
  } catch (err) {
    console.log("unable to send email, err: ", err);
    throw new Error("unable to send otp");
  }
};

export default sendMail;
