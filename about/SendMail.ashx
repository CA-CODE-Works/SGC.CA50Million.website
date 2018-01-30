<%@ WebHandler Language="C#" Class="SendMail" %>

using System;
using System.Web;

public class SendMail : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        string fromEmail = context.Request["fromEmail"];
        string comment = context.Request["comment"];
        string recaptchaResponse = context.Request["gRecaptchaResponse"];

        bool success = this.VerifyRecaptcha(recaptchaResponse);

        if (success)
        {

            if ((!string.IsNullOrEmpty(fromEmail)) && (!string.IsNullOrEmpty(comment)))
            {
                using (System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage())
                {
                    message.To.Add("CA.50M@OPR.CA.GOV");
                    // message.To.Add("Theresa.Rapozo@state.ca.gov");
                    // message.To.Add("CA.50M@OPR.CA.GOV");


                    // Uncomment this address to send email to here.  Comment out the other addresses
                    // message.To.Add("CA.50M@OPR.CA.GOV");

                    message.Subject = "CA @50 Million Contact Us Message";
                    message.From = new System.Net.Mail.MailAddress("no-reply@state.ca.gov");
                    message.Body = "This message was submitted using the Contact Us form on http://www.ca50million.opr.ca.gov/About/Contact-Us.html" + Environment.NewLine + 
                            "From: " + fromEmail + " " + Environment.NewLine + "Message: " + comment;

                    // See web.config for default SMTP gateway settings (using SendGrid).
                    System.Net.Mail.SmtpClient client = new System.Net.Mail.SmtpClient();

                    client.Send(message);
                   
                }

                using (System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage())
                {
                    message.To.Add(fromEmail);

                    // Uncomment this address to send email to here.  Comment out the other addresses
                    // message.To.Add("CA.50M@OPR.CA.GOV");

                    message.Subject = "CA @50 Million Email Confirmation";
                    message.From = new System.Net.Mail.MailAddress("no-reply@state.ca.gov");
                    DateTime now = DateTime.Now;
                    message.IsBodyHtml = true;
                    message.Body = "<p><strong>Thank you.</strong></p>" + string.Format("<p>This is to confirm that your message was delivered on {0} at {1}.</p>", now.ToString("D"), now.ToShortTimeString());

                    // See web.config for default SMTP gateway settings (using SendGrid).
                    using (System.Net.Mail.SmtpClient client = new System.Net.Mail.SmtpClient())
                    {
                        client.Send(message);
                    }
                }

            }
            context.Response.Write("Your message has been sent.");
        }
        else
            context.Response.Write("Please verify that your not a robot");
    }

    private bool VerifyRecaptcha(string gRecaptchaResponse)
    {
        bool success = false;
        string postDataString = string.Format("&secret=6LezHyETAAAAAEZpoO-g-a7kjP8I3U2XMnC1OkKD&response={0}&remoteip=", gRecaptchaResponse);
        var ascii = new System.Text.ASCIIEncoding();
        byte[] postBytes = ascii.GetBytes(postDataString);

        var request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create("https://www.google.com/recaptcha/api/siteverify");
        request.Method = "POST";
        request.ContentType = "application/x-www-form-urlencoded";
        request.ContentLength = postBytes.Length;

        using (System.IO.Stream postStream = request.GetRequestStream())
        {
            postStream.Write(postBytes, 0, postBytes.Length);
            postStream.Flush();
            postStream.Close();
        }

        string output = string.Empty;

        using (System.Net.HttpWebResponse response = (System.Net.HttpWebResponse)request.GetResponse())
        {
            using (System.IO.Stream stream = response.GetResponseStream())
            {
                var reader = new System.IO.StreamReader(stream);
                output = reader.ReadToEnd();
            }
        }

        var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();

        RecaptaResponse results = serializer.Deserialize<RecaptaResponse>(output);

        success = bool.Parse(results.success);

        return success;
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}

public class RecaptaResponse
{
    public string success { get; set; }
    public string challenge_ts { get; set; }
    public string hostname { get; set; }
}