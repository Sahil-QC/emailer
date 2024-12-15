export const emailTemplate = `
  <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
      <table style="width: 100%; max-width: 600px; margin: 0 auto; border: 1px solid #ccc; border-radius: 10px; background-color: #f9f9f9; padding: 20px;">
        <tr>
          <td style="text-align: center; padding-bottom: 20px;">
            <h2 style="color: #2c3e50;">Welcome to [Company Name] – Your Journey Starts Now!</h2>
          </td>
        </tr>
        <tr>
          <td>
            <p style="font-size: 16px; line-height: 1.6;">
              Dear <strong>[ename]</strong>,
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              We are thrilled to welcome you to the <strong>[Company Name]</strong> team!
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Your journey with us begins on <strong>[dateOfJoining]</strong>, and we are excited to have you as part of our <strong>[department]</strong> department. We are confident that you will contribute to our team's success and grow alongside our talented and passionate colleagues.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              You will be reporting directly to <strong>[managerName]</strong>, who will guide and support you as you get settled into your role.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Here’s a quick overview of some things to expect as you start:
            </p>
            <ul style="font-size: 16px; line-height: 1.6; margin-left: 20px;">
              <li><strong>Orientation:</strong> Your first few days will include orientation to help you get familiar with the company’s processes and culture.</li>
              <li><strong>Team Introduction:</strong> You’ll meet your colleagues in the <strong>[department]</strong> department and across the company.</li>
              <li><strong>Resources:</strong> You will receive access to all the tools and resources you need to succeed.</li>
            </ul>
            <p style="font-size: 16px; line-height: 1.6;">
              Once again, welcome to the team! We are so excited to have you with us and look forward to seeing the amazing impact you will make here.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              If you have any questions or need assistance before your start date, feel free to reach out to us.
            </p>
            <br>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

export const hrEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Onboarding Request</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    h1 {
      font-size: 18px;
      color: #007bff;
    }
    p {
      margin: 8px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Onboarding Request for New Employee</h1>
    <p>Dear <strong>{{hrRepresentativeName}}</strong>,</p>
    <p>I hope this message finds you well.</p>
    <p>I am writing to inform you that <strong>{{ename}}</strong> is set to join our team on <strong>{{dateOfJoining}}</strong> in the <strong>{{department}}</strong> department. Could you please initiate the onboarding process for them?</p>
    <p>Let me know if you need any further information or documentation from my side.</p>
    <p>Thank you for your assistance!</p>
    <p>Best regards,</p>
    <p><strong>[senderName]</strong></p>
  </div>
</body>
</html>
`;

export const managerEmailTemplate = `<!DOCTYPE html>
<html>
<head>
    <title>New Employee Joining Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .header {
            background-color: #0073e6;
            color: #ffffff;
            text-align: center;
            padding: 10px 0;
            border-radius: 8px 8px 0 0;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #666;
            margin-top: 20px;
        }
        .highlight {
            color: #0073e6;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Employee Joining Notification</h2>
        </div>
        <p>Dear <strong>[managerName]</strong>,</p>
        <p>
            I am pleased to inform you that <span class="highlight">[Employee's Full Name]</span> has joined your team in the <span class="highlight">[Department Name]</span> department. Their official start date is <span class="highlight">[Joining Date]</span>.
        </p>
        <p>
            Please provide guidance and support to help them integrate smoothly into the team and utilize their skills and potential for the benefit of the company.
        </p>
        <p>
            Let me know if there is any assistance required in this process.
        </p>
        <p>Thank you for your cooperation.</p>
        <p>
            Best regards,<br>
            [Your Name]<br>
            [Your Position]<br>
            [Your Contact Information]
        </p>
        <div class="footer">
            <p>This is an automated message. Please reach out if you have further questions.</p>
        </div>
    </div>
</body>
</html>`;

export const itEmailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IT Onboarding Preparation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f4f6f9;
        }
        .header {
            background-color: #2c3e50;
            color: #ffffff;
            text-align: center;
            padding: 15px 0;
            border-radius: 8px 8px 0 0;
        }
        .section-title {
            color: #2980b9;
            margin-top: 20px;
        }
        .highlight {
            color: #2980b9;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>IT Onboarding Preparation</h2>
        </div>

        <p>Dear <strong>{{itSupportName}}</strong>,</p>

        <p>We have a new team member joining us on <strong>{{dateOfJoining}}</strong>, and we need your assistance in preparing their technical setup.</p>

        <h3 class="section-title">New Employee Details</h3>
        <p>
            <strong>Name:</strong> {{ename}}<br>
            <strong>Department:</strong> {{department}}<br>
            <strong>Position:</strong> {{position}}
        </p>

        <h3 class="section-title">Required Technical Preparations</h3>
        <ul>
            <li>Create company email account: <span class="highlight">{{emailAddress}}</span></li>
            <li>Set up computer/laptop with standard company image</li>
            <li>Configure access to necessary software and systems:
                <ul>
                    <li>Email and communication tools</li>
                    <li>Project management platforms</li>
                    <li>Relevant departmental software</li>
                </ul>
            </li>
            <li>Prepare network and VPN access credentials</li>
            <li>Create accounts in company directory and collaboration tools</li>
        </ul>

        <h3 class="section-title">Additional Notes</h3>
        <p>Please confirm completion of setup by <strong>{{setupCompletionDate}}</strong>. If you have any questions or encounter any challenges, please reach out immediately.</p>

        <p>Thank you for your support in ensuring a smooth onboarding process.</p>

        <p>Best regards,<br>
        <strong>{{senderName}}</strong><br>
        <strong>{{senderPosition}}</strong></p>
    </div>
</body>
</html>`;
