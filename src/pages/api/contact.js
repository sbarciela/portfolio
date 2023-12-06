// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "../../../lib/nodemailer";
import EmailTemplate from "../../../components/EmailTemplate";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    

    try {
      await transporter.sendMail({
        ...mailOptions,
        text:"Recibiste un mail desde tu website",
        subject: "New message",
        html:`<div><div>from:${data.email}</div> <div>name:${data.name}</div> <div>message:${data.message}</div></div>`
      
      });

      return res.status(200).json({ success: true });
    } catch (err) {
     
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
